//Javascript program for hands on Locators

import {expect, test} from "@playwright/test" 

test("Create Test Lead in the Sales force application", async({page}) => {
    const url = "https://login.salesforce.com"

    const username = "dilipkumar.rajendran@testleaf.com"
    const password = "TestLeaf@2025"

    await page.goto(url)

    await page.locator(`#username`).fill(username)
    await page.locator(`#password`).fill(password)

    await page.locator(`//input[@id='Login']`).click()

    await page.waitForLoadState('domcontentloaded')

    await page.waitForSelector(`//div[@class='slds-icon-waffle']`,{state: 'visible'})
    await page.locator(`//div[@class='slds-icon-waffle']`).click()

    await page.waitForSelector(`//button[text()='View All']`,{state:'visible'})
    await page.locator(`//button[text()='View All']`).click()

    await page.waitForSelector(`//p[text()='Sales']`,{state:`visible`})
    await page.locator(`//p[text()='Sales']`).click()

    await page.waitForSelector(`//a[@title='Leads']`,{state:'visible'})
    await page.locator(`//a[@title='Leads']`).click()

    await page.locator(`//a[@title='New']`).click()

    await page.locator(`//label[text()='Salutation']/following::button[1]`).click()

    await page.locator(`//span[text()='Mr.']`).click()

    const lastName = "Duraiswamy"
    await page.locator(`//input[@name='lastName']`).fill(lastName)

    const companyName = "TestLeaf"
    await page.locator(`//input[@name='Company']`).fill(companyName)

    await page.locator(`//button[@name='SaveEdit']`).click()

    const leadName = (await (page.locator(`//*[@slot='primaryField']`).innerText())).trim()
    const leadNameResult = leadName.split(" ").filter(word => word.length>0).join("")

    console.log(leadNameResult)

    expect(leadNameResult).toBe('Mr.'+lastName)

    await page.waitForTimeout(3000)
})