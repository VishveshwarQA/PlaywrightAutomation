//Javascript program to interact with the leaf ground application 

import {expect, test} from "@playwright/test"

test("Interact with Leaf Ground application", async({page}) => {
    const url = "https://leafground.com/select.xhtml"
    await page.goto(url)

    const selectDropdown = `//select[@class='ui-selectonemenu']`

    //favorite UI automation tool - using different select options
    await page.selectOption(selectDropdown,{label:`Playwright`})
    await page.selectOption(selectDropdown,{index:1})
   
    //Get the count and print all the values from the dropdown
    const optionDropdown = selectDropdown + `//option`
    const dropDownCount = await page.locator(optionDropdown).count()
    console.log(`Dropdown count is ${dropDownCount}`)

    for(let i=0;i<dropDownCount;i++) {
        const dropdownValues = await page.locator(optionDropdown).nth(i).innerText()
        console.log(dropdownValues)
    }

    //Choose your preferred Country
    await page.locator(`//label[text()='Select Country']`).click()
    const country = `India`
    const prefCountry = `//li[text()='${country}']`
    await page.locator(prefCountry).click()

    //Confirm Cities belongs to Country is loaded
    const expectedCity = `Chennai`
    await page.locator(`//label[text()='Select City']`).click()
    await expect(page.locator(`//li[text()='Chennai']`)).toBeVisible()

    //Choose any three courses from the dropdown
    const courseDropdown = `//h5[text()='Choose the Course']/following::button[1]`
    const courses = [`Playwright`,`PostMan`,`Selenium WebDriver`,`RestAssured`]

    for(let i=0;i<courses.length;i++) {
        await page.locator(courseDropdown).click()
        await page.locator(`//li[text()='${courses[i]}']`).click()
    }

    //Choose a language and print all the values from the dropdown.
    const language = 'Tamil'
    await page.locator(`//h5[contains(text(),'Choose language')]/following::div[1]`).click()

    const languageDropdown = `//ul[contains(@id,'lang_items')]//li`
    const languageDDcount  = await page.locator(languageDropdown).count()

    for(let i=0;i<languageDDcount;i++) {
        console.log(await page.locator(languageDropdown).nth(i).innerText())
    }

    await page.locator(`//li[text()='${language}']`).click()

    //Select 'Two' irrespective of the language chosen
    await page.locator(`//h5[contains(text(),'language chosen')]/following::div[1]`).click()
    await page.locator(`//li[@data-label='இரண்டு']`).click()

    await page.waitForTimeout(3000)

    await page.close()

})