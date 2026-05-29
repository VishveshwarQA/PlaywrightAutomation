//Playwright program to test the PVR cinemas application

import {expect, test} from "@playwright/test"

test("PVR cinemas automation", async({page}) => {
    const url = "https://www.pvrcinemas.com/"

    await page.goto(url)

    await page.locator(`//h6[text()='Chennai']`).click()

    await page.locator(`//span[text()='Cinema']`).click()

    await page.locator(`//span[text()='Select Cinema']`).click()

     await page.waitForTimeout(2000)   
    await page.waitForSelector(`//ul[@role='listbox']//li[1]/span`,{state:`visible`})
    await page.locator(`//ul[@role='listbox']//li[1]/span`).click()

    await page.waitForTimeout(2000)
    await page.waitForSelector(`//ul[@role='listbox']//li[2]/span`,{state:`visible`})
    await page.locator(`//ul[@role='listbox']//li[2]/span`).click()

    await page.waitForTimeout(2000)
    await page.waitForSelector(`//ul[@role='listbox']//li[1]/span`,{state:`visible`})
    await page.locator(`//ul[@role='listbox']//li[1]/span`).click()
    
    await page.waitForTimeout(2000)
    await page.waitForSelector(`//ul[@role='listbox']//li[1]/span`,{state:`visible`})
    await page.locator(`//ul[@role='listbox']//li[1]/span`).click()

    await page.locator(`//button[@aria-label='Submit']//span[text()='Book']`).click()

    await page.waitForTimeout(2000)
    expect(await page.locator(`//button[text()='Accept']`)).toBeVisible()
    await page.locator(`//button[text()='Accept']`).click()

    let seatNumber = await page.locator(`.seat-current-pvr`).nth(0).getAttribute("id")
    await page.locator(`.seat-current-pvr`).nth(0).click()

    //verifying the respective seat is selected
    const seatNumberValue = seatNumber!.split('|')[1].replace(':', '');
    console.log(seatNumberValue)

    const bookedSeat = await page.locator(`//h6[text()='Seat Info']/following::div[1]//p`).innerText()
    expect(bookedSeat).toEqual(seatNumberValue)
    console.log(bookedSeat)

    expect(await page.locator(`//div[@class='grand-prices']`)).toBeVisible()

    //printing the total prices of the ticket
    const ticketCharges = await page.locator(`//div[@class='grand-prices']//h6`).innerText()
    console.log(ticketCharges)

    expect(await page.title()).toEqual(`PVR Cinemas`)

    await page.locator(`//button[text()='Proceed']`).click()

    await page.waitForTimeout(3000)

})