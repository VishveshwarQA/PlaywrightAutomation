//Playwright program to create a lead in leaf taps application and verify the details once it has been created

import {expect, test} from "@playwright/test"

test("Create Lead assertion", async({page}) => {
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

    const companyName       = `Nagarro Software Pvt. Ltd`
    const firstName         = `Vishveshwar`
    const lastName          = `Duraiswamy`
    const salutation        = `Mr.`
    const title             = `Software Test Lead`
    const annualRevenue     = `2500000`
    const department        = `Testing`
    const phoneNumber       = `9578184957`

    await page.locator(`#createLeadForm_companyName`).fill(companyName)
    await page.locator(`#createLeadForm_firstName`).fill(firstName)
    await page.locator(`#createLeadForm_lastName`).fill(lastName)
    await page.locator(`#createLeadForm_personalTitle`).fill(salutation)
    await page.locator(`#createLeadForm_generalProfTitle`).fill(title)
    await page.locator(`#createLeadForm_annualRevenue`).fill(annualRevenue)
    await page.locator(`#createLeadForm_departmentName`).fill(department)
    await page.locator(`#createLeadForm_primaryPhoneNumber`).fill(phoneNumber)

    await page.waitForTimeout(2000)

    await page.locator(`.smallSubmit`).click()

    expect(await page.title()).toEqual("View Lead | opentaps CRM")

    expect.soft(await page.locator(`#viewLead_companyName_sp`).innerText()).toContain((companyName.split(" "))[0])
    expect(await page.locator(`#viewLead_firstName_sp`).innerText()).toEqual(firstName)
    expect(await page.locator(`#viewLead_lastName_sp`).innerText()).toEqual(lastName)
    expect(await page.locator(`#viewLead_generalProfTitle_sp`).innerText()).toEqual(title)
    expect(await page.locator(`#viewLead_departmentName_sp`).innerText()).toEqual(department)
    
    //parse the annual revenue without any dollar signs
    let revenue = await page.locator(`#viewLead_annualRevenue_sp`).innerText()
    revenue = (revenue.replace("$","").replaceAll(",","").split("."))[0].trim()
    console.log(revenue)

    expect(revenue).toEqual(annualRevenue)
})