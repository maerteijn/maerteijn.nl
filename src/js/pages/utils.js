import ContentPage from "./content"
import NotFoundPage from "./notfound"

const types = {
  ContentPage: ContentPage,
  NotFoundPage: NotFoundPage,
}

export default (name) => types[name]
