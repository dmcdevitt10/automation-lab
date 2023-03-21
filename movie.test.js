const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll( async () => {
    await driver.get('http://127.0.0.1:5500/movie-list/index.html')
})

afterAll( async () => {
    await driver.quit()
})

describe('movie list functionalities', () => {
    test('add movie', async () => {
        await driver.findElement(By.xpath("//input")).sendKeys("Fight Club\n")
        await driver.sleep(2000)
    })
    test('cross of movie', async () => {
        await driver.findElement(By.xpath('//li/span')).click()
        await driver.findElement(By.className('checked'))
        await driver.sleep(2000)
    })

})