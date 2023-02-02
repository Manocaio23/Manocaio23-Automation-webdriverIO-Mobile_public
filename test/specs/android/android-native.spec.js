describe('Features Native Tests', () => {
    it('Acces an Activity directly', async () => {

        //passando por parametro pacote e atividade ou seja acessar diretamente a parada sem clicar em varios menus 
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");
        await driver.pause(3000)
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist()
    });

    it('Working Alerts', async() => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");
      

        //click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click()

       // accept alert
       // await driver.acceptAlert();

        //desativar alert
       // await driver.dismissAlert()

       //click on buttom - OK
       await $('//*[@resource-id="android:id/button1"]').click()
        //assert alert - que o alerta nao esta visivel
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist()

    });

    it('Vertical Scrolling',async () => {
        await $('//android.widget.TextView[@content-desc="App"]').click()
        await $('//android.widget.TextView[@content-desc="Activity"]').click()

        //scroll to the end - para o final
       // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
      //  await driver.pause(1000)
      //  await $('//android.widget.TextView[@content-desc="Secure Surfaces"]').click()
        
        //scrol text Into view -  indo ate o elemento
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click()

        //assertion

        await expect($('//android.widget.TextView[@content-desc="Secure Dialog"]')).toExist()

    });

    it('Scrool views Horizontal',async () => {
        //pegando direto
       await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1")
        
       //Scrolling
       await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
       await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')

       await driver.pause(2000)

    });

    it.only('Working with a date piker',async () => {
        //pegando direto
       await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.DateWidgets1")
     
       //get current date
       const date= await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]') 
      const currentDate= await date.getText()


       //click on change the date button
       await $('//android.widget.Button[@content-desc="change the date"]').click()
       
       //scroll right to the next month
       await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')

       //select the 10th date 
       	await $('//android.view.View[@content-desc="10 February 2023"]').click()


       //click on ok Button
       await $('//*[@resource-id="android:id/button1"]').click()
	
    
       // verify the updated date - verficiar se a data la em cima é a mesma alterada
        await expect(await date.getText()).not.toEqual(currentDate)


    });

});