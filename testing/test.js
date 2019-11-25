// var webdriver = require('selenium-webdriver')
// const chrome = require('selenium-webdriver/chrome')
// const chromedriver = require('chromedriver')

// chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())
// var driver = new webdriver.Builder().forBrowser('chrome').build()
const {Builder, By, Key, Util} = require ("selenium-webdriver");
//---------------------------------------------------------------------------

// testing 1
//...fail....
async function testing(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://www.seleniumeasy.com/test/");
    const WebElement = driver.findElement(By.className("dropdown"));
    WebElement.selectByVisibleText("Input Forms");
    const button1 = WebElement[1]
    await button1.click();
    const Select =new Select(WebElement);
    Select.selectByVisibleText("Input Forms");

    const button2 = Select[1]
    await button2.click();

    await driver.sleep(2000);
    driver.quit();
}
testing();

// (async () =>{
//     await driver.get('https://www.seleniumeasy.com/test/')
//     // const searchInput = await driver.findElement(webdriver.By.('search_query'))

//     // await searchInput.sendKeys('Dr Phil')

//     const button = await driver.findElement(webdriver.By.click(driver.findElement(By.className('dropdown-toggle'))))
//     const searchButton = button[1]

//     await searchButton.click()

//     await driver.sleep(2000)

//     driver.quit()
// })()