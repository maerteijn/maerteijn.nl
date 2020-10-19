import { assert } from "chai"

import { validator } from "@/js/schema"
import * as fixtures from "../fixtures"

describe("JSON Schema", () => {
  it("A JSON should validate with the schema correctly correctly", () => {
    const parsed_json = JSON.parse(fixtures.site_json)
    const is_valid = validator(parsed_json)
    assert.isTrue(is_valid)
  })

  it("Invalid JSON should not be valid", () => {
    const parsed_json = JSON.parse(fixtures.site_json_invalid)
    const is_valid = validator(parsed_json)
    assert.isFalse(is_valid)
    assert.equal(validator.errors.length, 1)

    assert.lengthOf(validator.errors, 1)
    const error = validator.errors[0]
    assert.include(error.dataPath, "site_settings")
    assert.include(error.message, "should have required property")
  })
})
