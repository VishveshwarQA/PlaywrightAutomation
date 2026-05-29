//Javascript program to Edit the invididual on the sales force app

import {expect, test} from "@playwright/test"

test("Edit the individual in the sales force app", async({page}) => {
    const url = "https://login.salesforce.com/?locale=in"

    const username = `dilipkumar.rajendran@testleaf.com`
    const password = `TestLeaf@2025`

    await page.goto(url)

    await page.locator(`#username`).fill(username)
    await page.locator(`#password`).fill(password)

    await page.locator(`#Login`).click()

    await page.locator(`//button[@title='App Launcher']`).click()

    await page.locator(`//button[text()='View All']`).click()

    await page.locator(`//p[text()='Individuals']`).click()

    const individualName = `Vishveshwar`
    await page.locator(`//input[@name='Individual-search-input']`).clear()
    await page.locator(`//input[@name='Individual-search-input']`).fill(individualName)
    await page.keyboard.press('Enter')

    await page.locator(`//span[@data-cell-type='lstListViewRowLevelAction']//lightning-primitive-icon`).nth(0).click()

    await page.locator(`//a[@title='Edit']`).click()

    await page.locator(`//span[text()='Salutation']/following::a[1]`).click()

    await page.locator(`//a[@title='Mr.']`).click()

    const firstName = `Vishveshwar`
    await page.locator(`//input[@placeHolder='First Name']`).clear()
    await page.locator(`//input[@placeHolder='First Name']`).fill(firstName)

    await page.locator(`//span[text()='Save']`).click()

    const newIndividualTitle = await page.locator(`//table/tbody//th[1]//a[1]`).nth(0).getAttribute("title")
    console.log(newIndividualTitle)
    expect(newIndividualTitle).toBe(firstName+" "+individualName)

})