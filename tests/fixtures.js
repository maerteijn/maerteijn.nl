export const home_content = "# home"

export const projects_content = "# projects"

export const site_json = `
{
  "site_settings": {
    "title": "My site",
    "default_language": "nl",
    "languages": {"nl": "en", "en": "nl"}
  },
  "pages": [
    {
      "name": "home",
      "title": "home",
      "path": "/",
      "type": "ContentPage",
      "url": "/content/nl/home.md",
      "settings": {
        "language": "nl",
        "show_in_menu": true
       }
    },
    {
      "name": "projects",
      "title": "projects",
      "path": "/nl/projects",
      "type": "ContentPage",
      "url": "/content/nl/projects.md",
      "settings": {
        "language": "nl",
        "show_in_menu": true
       }
    },
    {
      "name": "another-language",
      "title": "another language",
      "path": "/en/another-language",
      "type": "ContentPage",
      "url": "/content/nl/home.md",
      "settings": {
        "language": "en",
        "show_in_menu": true
       }
    },
    {
      "name": "not-found",
      "title": "maerteijn - 404",
      "path": "*",
      "type": "NotFoundPage",
      "settings": {}
    }
  ],
  "logo_links": [
    {
      "title": "LinkedIn",
      "url": "https://www.linkedin.com/in/maerteijn/",
      "font_awesome_icon": "fab-linkedin-in"
    },
    {
      "title": "Github",
      "url": "https://www.github.com/maerteijn/",
      "font_awesome_icon": "fab-github"
    }
  ]
}
`

export const site_json_invalid = `
{
  "site_settings": {
  }
}
`
