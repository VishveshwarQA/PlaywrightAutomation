//Javascript program to interact with Decalthon program

import {expect, test} from "@playwright/test"

test("Decalthon application interaction",async({page}) => {
    const url = "https://www.decathlon.in/"

    await page.goto(url)

    expect(await page.url()).toEqual(url)

    await page.locator(`//input[@type='search']`).click()

    expect(await page.locator(`//input[@type='search']`)).toBeEnabled()

    await page.locator(`//input[@type='search']`).fill("Shoes")

    await page.keyboard.press(`Enter`)

    await page.waitForTimeout(3000)

    console.log(await page.title())

    expect(await page.title()).toEqual(`Search | Shoes`)

    await page.locator(`//span[text()='Category']`).click()
    await page.locator(`//span[text()='Trainers']`).click()

    await page.locator(`//span[text()='Gender']`).click()
    await page.locator(`//span[text()='Men']`).last().click()

    await page.locator(`//span[text()='Size']`).click()
    await page.locator(`//span[text()='10.5']`).click()

    await page.locator(`//span[text()='Most relevant']`).click()
    await page.locator(`//span[contains(text(),'(high → low)')]`).click()

    await page.locator(`//div[@data-test-id='search-products-grid']//a`).nth(0).click()

    await page.waitForTimeout(2000)

    await page.locator(`//span[text()='10.5']`).click()

    await page.locator(`//span[@data-test-id='button-children']`).click()

    await page.waitForTimeout(2000)

    await page.locator(`//span[text()='Cart']`).click()

    const cartTotal = await page.locator(`//div[@data-test-id='cart:cart-checkout-total-cart-value']/p`).innerText()
    console.log(`Cart Total value: ${cartTotal}`)

    await page.waitForTimeout(3000)

})