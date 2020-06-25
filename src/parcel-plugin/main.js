import path from "path"
import { promises as fs } from "fs"
import config from "parcel-bundler/src/utils/config"
import { SitemapStream, streamToPromise } from "sitemap"

import { validator } from "../js/schema"

const loadJSON = async (json_path) => {
  const json = await fs.readFile(json_path)
  const parsed = JSON.parse(json)

  // Check if the loaded json is valid
  if (!validator(parsed)) {
    const error = validator.errors[0]
    throw `Site data does not validate ${error.dataPath}: ${error.message}`
  }
  return parsed
}

const generate_sitemap = (hostname, pages) => {
  const stream = new SitemapStream({ hostname: hostname })
  pages.forEach((page) => stream.write({ url: page.path, changefreq: "daily" }))
  stream.end()
  return streamToPromise(stream).then((data) => data.toString())
}

export default (bundler) => {
  bundler.on("bundled", async (bundle) => {
    const package_json_path = await config.resolve(__dirname, ["package.json"])
    const package_json = await config.load(package_json_path, ["package.json"])

    try {
      const site_json = await loadJSON(
        path.join(
          path.dirname(package_json_path),
          package_json.sitemap_settings.site_json
        )
      )

      const sitemap_xml = await generate_sitemap(
        package_json.sitemap_settings.hostname,
        site_json.pages.filter((page) => page.type == "ContentPage")
      )

      const dest_path = path.join(path.dirname(bundle.name), "sitemap.xml")
      fs.writeFile(dest_path, sitemap_xml)
    } catch (e) {
      console.error(e)
    }
  })
}
