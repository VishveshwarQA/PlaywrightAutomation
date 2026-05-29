//Javascript program to use the playwright locators for creating the new account in Sales force app

import {expect, test} from "@playwright/test"

test("Create New Account using Playwright Locators",async({page}) => {
    const url = "https://login.salesforce.com/"

    const username = "dilipkumar.rajendran@testleaf.com"
    const password = "TestLeaf@2025"

    await page.goto(url)

    await page.getByRole("textbox",{name:"Username",exact:true}).fill(username)
    await page.getByRole("textbox",{name:"Password",exact:true}).fill(password)

    await page.getByRole("button",{name:"Log In",exact:true}).click()

    await page.waitForTimeout(3000)
    await page.waitForSelector(`//button[@title='App Launcher']/div[1]`,{state:"visible"})

    const pageTitle = `Home | Salesforce`
    const pageURL   = `https://testleaf.lightning.force.com/lightning/page/home`

    expect(await page.title()).toEqual(pageTitle)
    expect(await page.url()).toEqual(pageURL)

    await page.locator(`//button[@title='App Launcher']/div[1]`).click()

    await page.waitForTimeout(2000)

    await page.getByText(`View All`).last().click()

    await page.getByPlaceholder(`Search apps or items...`).fill(`Service`)

    await page.locator(`(//mark[contains(text(),'Service')])[1]`).click()

    await page.locator(`[title='Accounts']`).click()

    await page.getByRole("button",{name:"New"}).click()

    await page.locator(`[name='Name']`).fill('Test Leaf')

    await page.locator(`//button[text()='Save']`).click()
    
    expect(await page.locator(`//div[contains(@id,'toast')]`)).toBeVisible()

    await page.waitForTimeout(3000)   
})