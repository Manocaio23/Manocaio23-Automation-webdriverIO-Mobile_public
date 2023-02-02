
describe('teste', () => {
    // it('Find element xpath',async () => {

    //     //(tagname[@attribute=value])
    //     await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click()
    //     await $('//XCUIElementTypeStaticText[@name="Simple"]').click()
    //     await expect(await driver.getAlertText()).toContain("A short Title is Best")

    // });

    it('Input eLement',async () => {

        //(tagname[@attribute=value])

     //  await $('˜Search').click()
        await $('//XCUIElementTypeStaticText[@name="Search"]').click()
       // await $('˜Default').click()
         await $('//XCUIElementTypeStaticText[@name="Default"]').click()

         await $('//XCUIElementTypeSearchField').addValue("I love this course")
         await expect($('//XCUIElementTypeSearchField')).toHaveAttr("value")// ver se tem valor
       
        // await $('˜Clear text').click()
        await $('//XCUIElementTypeButton[@name="Clear text"]').click()
         await expect($('//XCUIElementTypeSearchField')).not.toHaveAttr("value")

    });

    it('Alert',async () => {
        //(tagname[@attribute=value]
   
        await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click()
      
         await $('//XCUIElementTypeStaticText[@name="Okay / Cancel"]').click()

         //click ok
         await driver.dismissAlert()
         //click cancel
       
        
       // assertion
       await expect($('//XCUIElementTypeButton[@name="OK"]')).not.toExist()

       
    });

    it.only('Scrolling',async () => {
        //(tagname[@attribute=value]
        // await driver.execute('mobile: scroll', {direction: "down"})
        // await driver.execute('mobile: scroll', {direction: "up"})
        //await driver.execute('mobile: scroll', {direction: "left"})
      //  await driver.execute('mobile: scroll', {direction: "right"})
        
      //complext
    await $('//XCUIElementTypeStaticText[@name="Picker View"]').click()
 //   await $('//XCUIElementTypePickerWheel[@name="Red color component value"]')

    const redPicker = await $('//XCUIElementTypePickerWheel[@name="Red color component value"]')
    const greenPiker= await $('//XCUIElementTypePickerWheel[@name="Green color component value"]')
    const bluePiker = await $('//XCUIElementTypePickerWheel[@name="Blue color component value"]')
   
   //scrol simples
   await driver.execute('mobile: scroll', {element: redPicker.elementId, direction: "down"})
   await driver.execute('mobile: scroll', {element: redPicker.elemenId, direction: "down"})
   await driver.execute('mobile: scroll', {element: bluePiker.elementId, direction: "up"})

   await driver.back();
      await driver.back()

///set purple color (125,0,125)
// await redPicker.addValue('125')
// await greenPiker.addValue('0')
// await bluePiker.addValue('125')

//fazendo o alert

      await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click()
      
         await $('//XCUIElementTypeStaticText[@name="Okay / Cancel"]').click()

         //click ok
         await driver.dismissAlert()
         //click cancel

       // assertion
       await expect($('//XCUIElementTypeButton[@name="OK"]')).not.toExist()

await driver.pause(2000)
      
    });
});