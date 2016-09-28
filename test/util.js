import path from 'path'
import chromedriver from 'chromedriver'
import express from 'express'

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const startChromeDriver = async (port = 9515) => {
  if (chromedriver.defaultInstance) return undefined

  chromedriver.start([`--port=${port}`, '--url-base=/wd/hub'])
  process.on('exit', chromedriver.stop)
  return chromedriver.waitUntilRunning()
}

let serverPort = null
export const startHTTPServer = () => {
  if (serverPort) return Promise.resolve(serverPort)

  const app = express()
  app.get('*', (req, res) => {
    if (req.url.match(/^\/dist\//g)) {
      return res.sendFile(path.join(__dirname, `..${req.url}`))
    }
    return res.sendFile(path.join(__dirname, '../index.html'))
  })
  return new Promise((resolve, reject) => {
    const server = app.listen(0, 'localhost', (err) => {
      if (err) return reject(err)
      serverPort = server.address().port
      return resolve(serverPort)
    })
    process.on('exit', () => server.close())
  })
}
