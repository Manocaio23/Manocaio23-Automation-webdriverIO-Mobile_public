describe('Android Elements Tests', () => {
    it('Find element by accessibility id', async () => {
        
        // pegando element id
       
        const appOption= await $('//android.widget.TextView[@content-desc="App"]');
        await expect(appOption).toBeExisting();	
       // await expect(appOption).toBeExisting();
    
        //click on element 
       await appOption.click();


        //assertion
    const appActioBar= await $('//android.widget.TextView[@content-desc="Action Bar"]')
    await expect(appActioBar).toBeExisting();

    });

    it('Class name', async() => {
        const className= await $('android.widget.TextView')

        console.log(await className.getText())

        //assertion
        await expect(className).toHaveText("API Demos")
    });

    it('UIautoamtor ', async() => {
        //onde contem: alert entao click
     await $('android= new UiSelector().textContains("Animation")').click()
      
    });

    it.only('Send Text Field - Autocomplete ', async() => {
        //onde contem: alert entao click
     await $('android= new UiSelector().textContains("Views")').click()
     await $('//android.widget.TextView[@content-desc="Auto Complete"]').click()
     await $('//android.widget.TextView[@content-desc="1. Screen Top"]').click()

     // pegando 
     const textFiled = await $('//*[@resource-id="io.appium.android.apis:id/edit"]')
     await textFiled.addValue('Canada');

     
    });
});