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
      "description": "My description",
      "title": "home",
      "path": "/",
      "type": "ContentPage",
      "content_component": "MarkdownViewer",
      "footer_component": "LastUpdated",
      "url": "/content/nl/home.md",
      "settings": {
        "identifier": 1,
        "language": "nl",
        "show_in_menu": true
       }
    },
    {
      "name": "projects",
      "description": "My description",
      "title": "projects",
      "path": "/nl/projects",
      "type": "ContentPage",
      "content_component": "MarkdownViewer",
      "url": "/content/nl/projects.md",
      "settings": {
        "identifier": 2,
        "language": "nl",
        "show_in_menu": true,
        "backlink": {
          "title": "Home",
          "path": "/"
        }
       }
    },
    {
      "name": "another-language",
      "description": "My description",
      "title": "another language",
      "path": "/en/another-language",
      "type": "ContentPage",
      "content_component": "MarkdownViewer",
      "url": "/content/nl/home.md",
      "settings": {
        "identifier": 1,
        "language": "en",
        "show_in_menu": true
       }
    },
    {
      "name": "redirect",
      "title": "maerteijn - redirect",
      "path": "/:pathMatch(.*)*",
      "type": "RedirectPage",
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
