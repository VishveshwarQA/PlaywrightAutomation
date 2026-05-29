//Java program to interact with Leaf Ground - Checkbox elements

import {expect, test} from "@playwright/test"

test ("Interact with Checkbox elements in Leaf Ground", async({page}) => {
    const url = `https://leafground.com/checkbox.xhtml`
    await page.goto(url)

    //Clicking the basic checkbox 
    await page.locator(`//span[text()='Basic']`).click()

    //Click on the Notification Checkbox.
    await page.locator(`//span[text()='Ajax']`).click()

    //verifying the expected message is displayed once the notification checkbox is checked
    await expect(page.locator(`//span[text()='Checked']`)).toBeVisible()

    //Favourite Languages
    const languages = [`Java`,`Javascript`,`Others`]
    for(let i=0;i<languages.length;i++) {
        await page.locator(`//label[text()='${languages[i]}']`).click()
    }

    //Tri-State Checkbox
    for(let i=0;i<3;i++) { //Tri state checkbox so setting the limit as 3 
        await page.locator(`//h5[text()='Tri State Checkbox']/following::div[contains(@class,'ui-chkbox-box')]`).nth(0).click()
        await expect(page.locator(`//span[text()='State has been changed.']`)).toBeVisible()
        const stateValue = await page.locator(`//span[text()='State has been changed.']//following-sibling::p[1]`).innerText()
        console.log(stateValue)
        expect(stateValue.includes(`State = `+(i+1)))
    }

    //Toggle Switch.
    await page.locator(`//div[@class='ui-toggleswitch-slider']`).click()
    await expect(page.locator(`//span[text()='Checked']`)).toBeVisible()

    await expect(page.locator(`//h5[text()='Verify if check box is disabled']/following::input[1]`)).toBeDisabled()

    //Select Multiple Cities
    await page.locator(`//ul[@data-label='Cities']`).click()
    const cities = [`London`,`Paris`,`Brasilia`,`Amsterdam`]
    for(const city of cities)  {
        let cityXPath = `//li[@data-item-value='${city}']/div[1]`
        await page.locator(cityXPath).click()
    }

    //Entering some value to search and select the result
    await page.locator(`//input[@aria-label='Filter Input']`).fill('Ro')
    await page.locator(`//ul[contains(@class,'ui-selectcheckboxmenu-items')]//li[@data-item-value='Rome']`).waitFor()
    await page.locator(`//ul[contains(@class,'ui-selectcheckboxmenu-items')]//li[@data-item-value='Rome']/div[1]`).click()
    await page.locator(`//span[@class='ui-icon ui-icon-circle-close']`).click()

    await page.waitForTimeout(3000)

    await page.close()
})

