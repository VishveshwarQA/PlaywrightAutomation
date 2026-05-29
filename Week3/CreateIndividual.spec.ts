//Javascript program to Create Individuals in Sales force application

import {expect, test} from "@playwright/test" 

test("Create Invididuals in Sales force app",async({page}) => {
    const url = "https://login.salesforce.com"

    await page.goto(url)

    const username = "dilipkumar.rajendran@testleaf.com"
    const password = "TestLeaf@2025"

    await page.locator(`//input[@id='username']`).fill(username)
    await page.locator(`//input[@id='password']`).fill(password)

    await page.locator(`//input[@id='Login']`).click()

    await page.locator(`//button[@title='App Launcher']`).click()

    await page.locator(`//button[text()='View All']`).click()

    await page.locator(`//p[text()='Individuals']`).click()

    await page.locator(`//span[text()='Individuals']/following::one-app-nav-bar-item-dropdown`).click()

    await page.locator(`//span[text()='New Individual']`).click()

    const lastName = `Vishveshwar`
    await page.locator(`//input[@placeHolder='Last Name']`).fill(lastName)

    await page.locator(`//span[text()='Save']`).click()

    //verify the individual name is same as the name created by the last name
    expect(await page.locator(`//div[contains(@class,'primaryFieldRow')]//h1//span`).innerText()).toBe(lastName)
})