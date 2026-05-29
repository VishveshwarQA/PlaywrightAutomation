//Javascript program to edit the lead value in the sales force application

import {test,expect} from "@playwright/test"

test("Edit Lead in the Sales force application", async({page}) => {
    const url = "https://login.salesforce.com"

    const username = "dilipkumar.rajendran@testleaf.com"
    const password = "TestLeaf@2025"

    await page.goto(url)

    await page.locator(`#username`).fill(username)
    await page.locator(`#password`).fill(password)

    await page.locator(`//input[@id='Login']`).click()

    await page.waitForLoadState('domcontentloaded')

    await page.locator(`.slds-icon-waffle`).click()

    await page.waitForSelector(`//button[text()='View All']`,{state:'visible'})
    await page.locator(`//button[text()='View All']`).click()

    await page.waitForSelector(`//p[text()='Sales']`,{state:'visible'})
    await page.locator(`//p[text()='Sales']`).click()

    await page.locator(`//a[@title='Leads']`).click()

    await page.waitForSelector(`//td//lightning-primitive-icon`,{state:"visible"})
    await page.locator(`//td//lightning-primitive-icon`).nth(0).click()

    await page.locator(`//a[@title='Edit']`).click()

    await page.locator(`//label[text()='Salutation']/following::span[1]`).click()
    
    const salutation = 'Prof.' 
    await page.locator(`//span[text()='${salutation}']`).nth(0).click()
    
    const lastName = 'Vishveshwar'
    await page.locator(`//input[@name='lastName']`).clear()
    await page.locator(`//input[@name='lastName']`).fill(lastName)

    const companyName = 'Playwright'
    await page.locator(`//input[@name='Company']`).clear()
    await page.locator(`//input[@name='Company']`).fill(companyName)

    await page.locator(`//button[@name='SaveEdit']`).click()

    //Verify last name and company name of the lead 
    expect(await page.locator(`//table/tbody/tr[1]/th//a[1]`).getAttribute("title")).toBe(lastName)
    expect(await page.locator(`//table/tbody/tr[1]/td[@data-label='Company']//a[1]`).getAttribute("title")).toBe(companyName)
    
    //verify the salutation along with the lead name
    await page.locator(`//table/tbody/tr[1]/th//a[1]`).click()

    let leadName = await page.locator(`//div[contains(@class,'primaryFieldRow')]//lightning-formatted-name`).innerText()
    leadName = leadName.split(" ").filter(word=>word.length>0).join(" ")
    
    expect(leadName).toBe(salutation+" "+lastName)

    await page.waitForTimeout(2000)

})