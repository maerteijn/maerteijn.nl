export const structure_json = `
{
  "site_info": {
    "title": "My site"
  },
  "pages": [
    {
      "name": "home",
      "title": "home",
      "path": "/",
      "type": "ContentPage",
      "url": "./content/home.md",
      "show_in_menu": true
    },
    {
      "name": "projects",
      "title": "projects",
      "path": "/projects",
      "type": "ContentPage",
      "url": "./content/projects.md",
      "show_in_menu": true
    },
    {
      "name": "not-found",
      "title": "maerteijn - 404",
      "path": "*",
      "type": "NotFoundPage",
      "show_in_menu": false
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
