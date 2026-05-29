//Javascript program to interact with RadioButton Dropdown

import {test,expect} from "@playwright/test" 

test("Learn Radiobutton Dropdown", async({page})=> {
    const url = "https://leafground.com/radio.xhtml"

    page.goto(url)

    //Asserting the default selecting radio button
    const safariRadioBtn = `//h5[contains(text(),'default select radio button')]/following::label[text()='Safari']/preceding::input[1]`
    await expect(page.locator(safariRadioBtn)).toBeChecked() //always ensure the toBeChecked() will be used to the input tag verification

    //Asserting the default age group
    const defaultAgeGroupRadioBtn = `//h5[contains(text(),'age group')]/following::label[text()='21-40 Years']/preceding::input[1]`
    await expect(page.locator(defaultAgeGroupRadioBtn)).toBeChecked()

    //most favourite browser
    const favBrowserRadioBtn = `//h5[contains(text(),'most favorite browser')]/following::label[text()='Chrome']/preceding::div[1]`
    await page.locator(favBrowserRadioBtn).nth(0).click()
    await expect(page.locator(favBrowserRadioBtn).nth(0)).toBeEnabled() //we are using enabled as we are verifying the div tag 


    //click one of the cities.
    const cityRadioBtn = `//label[text()='Chennai']/preceding::div[1]`
    await page.locator(cityRadioBtn).click()
    await expect(page.locator(cityRadioBtn)).toBeEnabled()
    await expect(page.locator(cityRadioBtn+`/preceding::input[1]`)).toBeChecked()

    //Selecting age group and asserting it
    const ageGroupRadioBtn = `//h5[contains(text(),'age group')]/following::label[text()='1-20 Years']/preceding::div[1]`
    await page.locator(ageGroupRadioBtn).click()
    await expect(page.locator(ageGroupRadioBtn)).toBeEnabled()
    await expect(page.locator(ageGroupRadioBtn+`/preceding::input[1]`)).toBeChecked()

    await page.waitForTimeout(3000)
})