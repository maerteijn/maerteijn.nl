import path from "path"
import fs from "fs"

import { assert } from "chai"
import { chromium } from "playwright-chromium"

import { startServer } from "./server"

const dist = path.resolve(__dirname, "../../dist/e2e")
const screenshots = path.join(dist, "screenshots")

const site = JSON.parse(fs.readFileSync(path.join(dist, "content/site.json")))
const default_page = site.pages[0]

describe("Scenario: Go to the homepage an click all links in the navigation", () => {
  before(async function () {
    this.server = startServer(1234, dist)
    // Add {headless: false} to show the browser
    this.browser = await chromium.launch()
    if (!fs.existsSync(screenshots)) {
      fs.mkdirSync(screenshots)
    }
  })

  after(async function () {
    this.server.close()
    await this.browser.close()
  })

  beforeEach(async function () {
    this.page = await this.browser.newPage()
    await this.page.goto(`http://localhost:1234`)
  })

  afterEach(async function () {
    await this.page.screenshot({
      path: path.join(
        screenshots,
        `${this.currentTest.title.replace(/\s+/g, "_")}.png`
      ),
    })
    await this.page.close()
  })

  it("We are redirected to the default homepage", async function () {
    await this.page.$(".page")
    const location = await this.page.evaluate("location.href")
    assert.isTrue(location.endsWith(default_page.path))
  })

  it("Clicking an image will show an overlay", async function () {
    const initial_location = await this.page.evaluate("location.href")

    const image = await this.page.waitForSelector(".page .content img")
    await image.click()

    const selector = await this.page.waitForSelector(".viewer-canvas", {
      state: "visible",
    })
    assert.isObject(selector)

    // hide the image again
    const viewer_canvas = await this.page.$(".viewer-canvas")
    viewer_canvas.click()
    await this.page.waitForSelector(".viewer-viewer_canvas", {
      state: "hidden",
    })
  })

  it("We can switch layout by clicking the layout button", async function () {
    const switch_language = await this.page.$("#switch-layout")
    await switch_language.click()

    const layout_div = await this.page.$(".basic-layout")
    assert(await layout_div.getAttribute("class"), "basic-layout")
  })

  it("We can switch language by clicking the language button", async function () {
    const initial_location = await this.page.evaluate("location.href")

    const switch_language = await this.page.$("#switch-language")
    await switch_language.click()

    const location = await this.page.evaluate("location.href")
    assert.notEqual(initial_location, location)
  })

  it("The navigation container renders items and we can navigate to them", async function () {
    // retrieve all pages of the current language
    const pages = site.pages.filter(
      (page) => page.settings.language == default_page.settings.language
    )

    // only navigation items of the current language should be shown
    const navigation_items = await this.page.$$("div.navigation .item a")
    assert.lengthOf(navigation_items, pages.length)

    // check if clicking them will result in the correct route
    for (const item of navigation_items) {
      let id = await item.getAttribute("id")
      await this.page.click(`a#${id}`)

      const location = await this.page.evaluate("location.href")
      const page = site.pages.filter((page) => page.name == id)[0]
      assert.isTrue(location.endsWith(page.path))
    }
  })
})
