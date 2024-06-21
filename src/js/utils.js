import Viewer from "viewerjs"

export const isOldBrowser = () => {
  // check if browser supports grid
  const gridNotSupported =
    typeof document.createElement("div").style.grid !== "string"

  // and check for IE11 explicitly
  const isIE11 = !!window.msCrypto

  return gridNotSupported || isIE11
}

const checkIsDarkSchemePreferred = () =>
  window?.matchMedia?.("(prefers-color-scheme:dark)")?.matches ?? false

export const getLayout = () => {
  if (isOldBrowser()) {
    return "basic-layout"
  }
  return (
    window.localStorage.layout ||
    (checkIsDarkSchemePreferred() && "basic-layout") ||
    "default-layout"
  )
}

export const updateTheme = (state) => {
  document.documentElement.className =
    state.layout == "default-layout" ? "theme-light" : "theme-dark"
}

export const createImageViewer = (image) => {
  return new Viewer(image, {
    toolbar: false,
    tooltip: false,
    button: false,
    navbar: false,
    title: false,
  })
}

// we could use a negative lookbehind regex here but that's not supported
// in older browsers.
export const normalizePath = (path) =>
  path && path != "/" ? path.replace(/\/$/, "") : path
