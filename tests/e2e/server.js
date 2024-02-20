import express from "express"

export const startServer = (port, path) => {
  const server = express()
  server.use(express.static(path))
  return server.listen(port)
}
