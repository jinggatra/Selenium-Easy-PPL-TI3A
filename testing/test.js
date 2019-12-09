var webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())
var driver = new webdriver.Builder().forBrowser('chrome').build()
// const {Builder, By, Key, Util} = require ("selenium-webdriver");
//---------------------------------------------------------------------------

// testing 1
//...fail....
async function testing(){
    await driver.get('https://www.seleniumeasy.com/test/')
    // const searchInput = await driver.findElement(webdriver.By.('search_query'))

    // await searchInput.sendKeys('Dr Phil')

    const button = await driver.findElement(webdriver.By.className('dropdown-toggle')).click();
    // const button1 = await driver.findElement(webdriver.By.linkText('./basic-first-form-demo.html')).click();
    const button2 = await driver.findElement(webdriver.By.xpath("//a[@href='./basic-first-form-demo.html']")).click();
    // const searchButton = button[1]
    // const searchButton1 = button1[1]

    // await searchButton.click()

    await driver.sleep(2000)

    // driver.quit()

 }

async function testing2(){
    await driver.get('https://www.seleniumeasy.com/test/basic-first-form-demo.html')
    // const searchInput = await driver.findElement(webdriver.By.('search_query'))

    // await searchInput.sendKeys('Dr Phil')

    const searchInput = await driver.findElement(webdriver.By.id('user-message'))
    await searchInput.sendKeys('Dr Phil')
    const button = await driver.findElement(webdriver.By.className('btn btn-default')).click();
    const searchButton = button[1]

    await searchButton.click()

    await driver.sleep(2000)

    // const Output = await driver.findElement(webdriver.By.id('display'))

        // driver.quit()
    
}

async function testing3(){
    await driver.get('https://www.seleniumeasy.com/test/basic-first-form-demo.html')
    const searchInput2 = driver.findElement(webdriver.By.id('sum1')).sendKeys('a')
    const searchInput3 = driver.findElement(webdriver.By.id('sum2')).sendKeys('b')

    const button = driver.findElement(webdriver.By.xpath("//button[contains(., 'Get Total')]")).click();

    // const Output = await driver.findElement(webdriver.By.id('')
    await driver.sleep(2000)

    driver.quit()
}

async function testing4(){
    await driver.get('https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html')
    const list = driver.findElement(webdriver.By.id('select-demo'))
    // const searchInput3 = driver.findElement(webdriver.By.id('sum2')).sendKeys('b')

    const listclick = driver.findElement(webdriver.By.xpath("//option[contains(., 'Monday')]")).click();

    // const Output = await driver.findElement(webdriver.By.id('')
    await driver.sleep(2000)
}

// testing();
// testing2();
// testing3();
testing4();

// (async () =>{
   
// })()

//     let driver = await new Builder().forBrowser("chrome").build();

//     await driver.get("https://www.seleniumeasy.com/test/");
//     const WebElement = driver.findElement(By.className("dropdown"));
//     // WebElement.selectByVisibleText("Input Forms");
//     const Select =new Select(WebElement);
//     Select.selectByVisibleText("Input Forms");

//     const button2 = Select[1]
//     await button2.click();

//     await driver.sleep(2000);
//     driver.quit();