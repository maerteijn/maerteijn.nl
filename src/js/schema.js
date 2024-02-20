import Ajv from "ajv"
import addFormats from "ajv-formats"

const definitionsSchema = {
  $id: "definitions.json",
  definitions: {
    "non-empty-string": {
      type: "string",
      minLength: 1,
    },
    "language-code": {
      type: "string",
      pattern: "^[[a-z]{2}$",
    },
    path: {
      type: "string",
      format: "uri-reference",
      minLength: 1,
    },
    backlink: {
      type: "object",
      properties: {
        title: { $ref: "definitions.json#/definitions/non-empty-string" },
        path: { $ref: "definitions.json#/definitions/path" },
      },
      required: ["title", "path"],
      additionalProperties: false,
    },
    page: {
      type: "object",
      properties: {
        title: { $ref: "definitions.json#/definitions/non-empty-string" },
        description: { $ref: "definitions.json#/definitions/non-empty-string" },
        name: { $ref: "definitions.json#/definitions/non-empty-string" },
        path: { $ref: "definitions.json#/definitions/path" },
        url: { $ref: "definitions.json#/definitions/path" },
        type: { $ref: "definitions.json#/definitions/non-empty-string" },
        content_component: {
          $ref: "definitions.json#/definitions/non-empty-string",
        },
        footer_component: {
          $ref: "definitions.json#/definitions/non-empty-string",
        },
        settings: {
          type: "object",
          properties: {
            language: { $ref: "definitions.json#/definitions/language-code" },
            identifier: { type: "integer" },
            show_in_menu: { type: "boolean" },
            backlink: { $ref: "definitions.json#/definitions/backlink" },
          },
        },
      },
      required: ["title", "name", "path", "settings"],
      additionalProperties: false,
    },
    pages: {
      type: "array",
      items: { $ref: "definitions.json#/definitions/page" },
      default: [],
    },
    "logo-link": {
      type: "object",
      properties: {
        title: { $ref: "definitions.json#/definitions/non-empty-string" },
        url: { type: "string", format: "uri", minLength: 1 },
        font_awesome_icon: {
          $ref: "definitions.json#/definitions/non-empty-string",
        },
      },
      required: ["title", "url", "font_awesome_icon"],
      additionalProperties: false,
    },
    "site-settings": {
      type: "object",
      properties: {
        title: { $ref: "definitions.json#/definitions/non-empty-string" },
        default_language: {
          $ref: "definitions.json#/definitions/language-code",
        },
        languages: {
          type: "object",
          patternProperties: {
            "^[[a-z]{2}$": {
              $ref: "definitions.json#/definitions/language-code",
            },
          },
        },
      },
      required: ["title", "default_language", "languages"],
      additionalProperties: false,
    },
  },
}

const siteSchema = {
  $id: "siteschema.json",
  title: "site",
  type: "object",
  properties: {
    site_settings: { $ref: "definitions.json#/definitions/site-settings" },
    pages: { $ref: "definitions.json#/definitions/pages" },
    logo_links: {
      type: "array",
      items: { $ref: "definitions.json#/definitions/logo-link" },
      default: [],
    },
  },
  required: ["site_settings", "pages", "logo_links"],
}

const ajv = new Ajv({ schemas: [definitionsSchema, siteSchema] })
addFormats(ajv)

export const validator = ajv.getSchema("siteschema.json")

export default { validator }
