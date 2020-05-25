export const isOldBrowser = () => {
  //IE 11
  return !!window.msCrypto
}
