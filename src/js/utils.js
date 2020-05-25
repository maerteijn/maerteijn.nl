export const isOldBrowser = () => {
  // check if browser supports grid
  const gridNotSupported =
    typeof document.createElement("div").style.grid !== "string"

  // and check for IE11 explicitly
  const isIE11 = !!window.msCrypto

  return gridNotSupported || isIE11
}
