import expect from 'expect'
import * as WebDriver from 'webdriverio'
import { delay, startHTTPServer, startChromeDriver } from '../util'

const btnXpathByText = text => `//button[contains(text(), "${text}")]`
const counterXpath = value => `//div[contains(text(), "Clicked: ${value}")]`

describe('Counter example', function spec() {
  this.timeout(1E4)

  let client
  let serverPort
  before(async () => {
    serverPort = await startHTTPServer()
    const port = 9515
    await startChromeDriver(port)
    client = WebDriver.remote({
      port,
      desiredCapabilities: {
        browserName: 'chrome',
      },
    })
    return client.init()
  })

  after(() => client.end())

  it('should get title', async () => {
    const title = await client.url(`http://localhost:${serverPort}`).getTitle()
    expect(title).toBe('Redux counter example')
  })

  it('should to Counter with click `Go to counter` button', async () => {
    await client.click(btnXpathByText('Go to counter'))
    expect(await client.isExisting(counterXpath(0))).toBe(true)
  })

  it('should updated count after increment button click', async () => {
    await client.click(btnXpathByText('+'))
    expect(await client.isExisting(counterXpath(1))).toBe(true)
  })

  it('should updated count after descrement button click', async () => {
    await client.click(btnXpathByText('-'))
    expect(await client.isExisting(counterXpath(0))).toBe(true)
  })

  it('should changed if async button clicked and two second later', async () => {
    expect(await client.isExisting(counterXpath(0))).toBe(true)
    await client.click(btnXpathByText('Increment async'))
    expect(await client.isExisting(counterXpath(0))).toBe(true)
    await delay(2000)
    expect(await client.isExisting(counterXpath(1))).toBe(true)
  })

  it('should not changed if async button clicked then cancel button clicked', async () => {
    expect(await client.isExisting(counterXpath(1))).toBe(true)
    await client.click(btnXpathByText('Increment async'))
    expect(await client.isExisting(counterXpath(1))).toBe(true)
    await delay(100)
    await client.click(btnXpathByText('Cancel increment async'))
    await delay(2000)
    expect(await client.isExisting(counterXpath(1))).toBe(true)
  })
})
