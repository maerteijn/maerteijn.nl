const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>maerteijn</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
  </head>
  <body>
  </body>
</html>
`
require("jsdom-global")(html, { url: "http://localhost" })
