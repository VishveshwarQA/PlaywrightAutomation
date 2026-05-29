//Playwright program to edit the leaftaps application 

import {expect, test} from "@playwright/test"

test("Edit the Lead in the Leaftaps app", async({page}) => {
    const url = "http://leaftaps.com/opentaps/control/main"

    const username = `DemoCSR2`
    const password = `crmsfa`

    await page.goto(url)

    await page.locator(`#username`).fill(username)
    await page.locator(`#password`).fill(password)
    await page.locator(`.decorativeSubmit`).click()

    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click()

    await page.locator(`//a[text()='Leads']`).click()

    await page.locator(`//a[text()='Find Leads']`).click()

    await page.locator(`(//label[text()='First name:'])[3]/following::input[@name='firstName']`).fill('Vishveshwar')

    await page.locator(`//button[text()='Find Leads']`).click()

    await page.locator(`//table/following::td[contains(@class,'firstName')]//a[1]`).nth(1).click()

    await page.locator(`//a[text()='Edit']`).click()

    const updatedCompanyName    = `TestLeaf`
    const updatedAnnualRevenue  = `3000000` 
    const updatedDepartment     = `Software Development Engineer in Test`

    await page.locator(`#updateLeadForm_companyName`).clear()
    await page.locator(`#updateLeadForm_companyName`).fill(updatedCompanyName)
    
    await page.locator(`#updateLeadForm_annualRevenue`).clear()
    await page.locator(`#updateLeadForm_annualRevenue`).fill(updatedAnnualRevenue)

    await page.locator(`#updateLeadForm_departmentName`).clear()
    await page.locator(`#updateLeadForm_departmentName`).fill(updatedDepartment)

    await page.locator(`#updateLeadForm_description`).fill(`Learning Playwright Automation`)

    await page.locator(`//input[@value='Update']`).click()

    let parsedCompanyName = await page.locator(`#viewLead_companyName_sp`).innerText()
    parsedCompanyName = (parsedCompanyName.split(" ").filter(word=>word.length>0))[0]
    console.log(parsedCompanyName)
    expect(parsedCompanyName).toEqual(updatedCompanyName)

    let parsedAnnualRevenue = await page.locator(`#viewLead_annualRevenue_sp`).innerText()
    parsedAnnualRevenue = (parsedAnnualRevenue.replace("$","").replaceAll(",","").split("."))[0].trim()
    console.log(parsedAnnualRevenue)
    expect(parsedAnnualRevenue).toEqual(updatedAnnualRevenue)

    expect(await page.locator(`#viewLead_departmentName_sp`).innerText()).toEqual(updatedDepartment)

    expect(await page.locator(`#viewLead_description_sp`).innerText()).toEqual(`Learning Playwright Automation`)

    await page.waitForTimeout(3000)
})