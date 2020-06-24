import ContentPage from "./content"
import RedirectPage from "./redirect"

const types = {
  ContentPage: ContentPage,
  RedirectPage: RedirectPage,
}

export default (name) => types[name]
