import { assert } from "chai"
import { promises as fs } from "fs"
import path from "path"

describe("Test parcel plugin", () => {
  it("A parcel plugin writes a sitemap.xml file with each build", () => {
    return fs
      .readFile("./dist/test/sitemap.xml", { encoding: "utf-8" })
      .then((data) => {
        assert.include(data, '<?xml version="1.0" encoding="UTF-8"?>')
        // there should be 10 url tags in the sitemap
        assert.lengthOf(data.match(/\<url\>/g) || [], 10)
      })
  })
})
