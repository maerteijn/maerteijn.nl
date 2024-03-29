import path from "path"
import { promises as fs } from "fs"
import { readFile } from 'fs/promises';
import { SitemapStream, streamToPromise } from "sitemap"

import { validator } from "../js/schema.js"
const package_json = JSON.parse(
  await readFile(
    new URL("../../package.json", import.meta.url)
  )
)
const current_path = process.cwd()
const build_path = "dist"

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
  pages.forEach((page) =>
    stream.write({
      url: page.path,
      changefreq: "daily",
      lastmod: new Date().toISOString(),
    })
  )
  stream.end()
  return streamToPromise(stream).then((data) => data.toString())
}

export default async () => {
  try {
    const site_json = await loadJSON(
      path.join(
        current_path,
        build_path,
        package_json.sitemap_settings.site_json
      )
    )
    const sitemap_xml = await generate_sitemap(
      package_json.sitemap_settings.hostname,
      site_json.pages.filter((page) => page.type == "ContentPage")
    )

    const dest_path = path.join(build_path, "sitemap.xml")
    fs.writeFile(dest_path, sitemap_xml)
  } catch (e) {
    console.error(e)
  }
}
