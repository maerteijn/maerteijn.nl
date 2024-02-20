import path from "path"
import fs from "fs"

import { assert } from "chai"
import { chromium } from "playwright-chromium"

import { startServer } from "./server.js"

import { URL } from "url"
import { dirname } from "path"

const __dirname = new URL(".", import.meta.url).pathname

const current_dir = process.cwd()
const dist = path.join(current_dir, "dist")
const screenshots = path.join(dist, "screenshots")

const site = JSON.parse(fs.readFileSync(path.join(dist, "content/site.json")))
const default_page = site.pages[0]

describe("Test browsing the website", () => {
  let server
  let port
  let browser
  let page

  beforeAll(async () => {
    server = startServer(0, dist)
    port = server.address().port

    // Add {headless: false} to show the browser
    browser = await chromium.launch()
    if (!fs.existsSync(screenshots)) {
      fs.mkdirSync(screenshots)
    }
  })

  afterAll(async () => {
    server.close()
    await browser.close()
  })

  beforeEach(async () => {
    page = await browser.newPage()
    await page.goto(`http://localhost:${port}`)
  })

  afterEach(async ({ task }) => {
    await page.screenshot({
      path: path.join(screenshots, `${task.name.replace(/\s+/g, "_")}.png`),
    })
    await page.close()
  })

  it("We are redirected to the default homepage", async function () {
    await page.$(".page")
    const location = await page.evaluate("location.href")
    assert.isTrue(location.endsWith(default_page.path))
  })

  it("Clicking an image will show an overlay", async function () {
    const initial_location = await page.evaluate("location.href")

    const image = await page.waitForSelector(".page .content img")
    await image.click()

    const selector = await page.waitForSelector(".viewer-canvas", {
      state: "visible",
    })
    assert.isObject(selector)

    // hide the image again
    const viewer_canvas = await page.$(".viewer-canvas")
    viewer_canvas.click()
    await page.waitForSelector(".viewer-viewer_canvas", {
      state: "hidden",
    })
  })

  it("We can switch layout by clicking the layout button", async function () {
    const switch_language = await page.$("#switch-layout")
    await switch_language.click()

    const layout_div = await page.$(".basic-layout")
    assert(await layout_div.getAttribute("class"), "basic-layout")
  })

  it("We can switch language by clicking the language button", async function () {
    const initial_location = await page.evaluate("location.href")

    const switch_language = await page.$("#switch-language")
    await switch_language.click()

    const location = await page.evaluate("location.href")
    assert.notEqual(initial_location, location)
  })

  it("The navigation container renders items and we can navigate to them", async function () {
    // retrieve all pages of the current language
    const pages = site.pages.filter(
      (page) =>
        page.settings.language == default_page.settings.language &&
        page.settings.show_in_menu
    )

    // only navigation items of the current language should be shown
    const navigation_items = await page.$$("div.navigation .item a")
    assert.lengthOf(navigation_items, pages.length)

    // check if clicking them will result in the correct route
    for (let i = 0; i < navigation_items, length; i++) {
      let item = navigation_items[i]

      const title = await item.getAttribute("title")
      await page.click(`a[title=${title}]`)
      const location = await page.evaluate("location.href")
      const page = site.pages.filter((page) => page.name == title)[0]
      assert.isTrue(location.endsWith(page.path))

      // make sure the menu checkbox is false after navigation (so the menu is hidden)
      assert.isFalse(await page.isChecked("#menu-btn"))
    }
  })

  it("There is also a sitemap available", async function () {
    const response = await page.goto(`http://localhost:${port}/sitemap.xml`)
    assert.equal(response.status(), 200)
  })
})
