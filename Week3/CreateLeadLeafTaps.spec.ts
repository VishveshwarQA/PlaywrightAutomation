//Javascript playwright program for Creating a Lead in Leaf taps application 

import {test,expect} from "@playwright/test"

test("Create Lead in Leaftaps app", async({page}) => {
    const url = `http://leaftaps.com/opentaps/control/main`

    const username = `DemoCSR2`
    const password = `crmsfa`

    await page.goto(url)

    await page.locator(`#username`).fill(username)
    await page.locator(`#password`).fill(password)

    await page.locator(`.decorativeSubmit`).click()

    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click()

    await page.locator(`//a[text()='Leads']`).click()

    await page.locator(`//a[text()='Create Lead']`).click()

    const companyName   = `Nagarro Software Solutions Pvt.Ltd`
    const firstName     = `Vishveshwar`
    const lastName      = `Duraiswamy`
    const salutation    = `Mr.`
    const title         = `Software Test Lead`
    const annualRevenue = `2500000`
    const department    = `Software Testing`
    const phoneNumber   = `9578184957`

    await page.locator(`#createLeadForm_companyName`).fill(companyName)
    await page.locator(`#createLeadForm_firstName`).fill(firstName)
    await page.locator(`#createLeadForm_lastName`).fill(lastName)
    await page.locator(`#createLeadForm_personalTitle`).fill(salutation)
    await page.locator(`#createLeadForm_generalProfTitle`).fill(title)
    await page.locator(`#createLeadForm_annualRevenue`).fill(annualRevenue)
    await page.locator(`#createLeadForm_departmentName`).fill(department)
    await page.locator(`#createLeadForm_primaryPhoneNumber`).fill(phoneNumber)

    await page.locator(`.smallSubmit`).click()

    console.log(await page.title())
    expect(await page.title()).toContain(`View Lead`)
})