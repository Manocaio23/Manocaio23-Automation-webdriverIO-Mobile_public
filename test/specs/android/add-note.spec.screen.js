const addNoteScreen = require("../screenobjetcs/andorid/add-note.screen");
const editNoteScreen = require("../screenobjetcs/andorid/edit-note.screen");

describe('Add Notes', ()  => {
    it('Skip tutorial', async  () => {
        //await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click()
        //await driver.pause(1000);
        await addNoteScreen.skipBtn.click()
        
       //await driver.pause(1000);
      //  await expect($('//*[text="Add note"]')).toBeDisplayed() //valiidando se tem isso
     
        await driver.pause(3000);

    });

    it('aad a note, save changes & verify note',async () => {
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click()
     await driver.pause(1000);
      await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/img_add"]').click()
      await $('//*[@text="Text"]').click()
      await expect($('//*[@text="Editing"]')).toBeDisplayed() // está habilitado ou visivel
      //await $('')

      const textFiled = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
      await textFiled.addValue('Canada');

      const Note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').setValue("Comentários Machistas")

      // save the changes
      await driver.back();
      await driver.back()
	
     
      //assertion
      await expect ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed()
       await expect ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Comentários Machistas")
      
       await driver.pause(3000);
    });
 
it('Create Note and Delete Testing', async() => {
   
    await  editNoteScreen.skipTutorial()

      await addNoteScreen.addNoteTxt.click()
      await $('//*[@text="Text"]').click()
      await expect($('//*[@text="Editing"]')).toBeDisplayed() // está habilitado ou visivel
    
    await  editNoteScreen.addAndSaveNote('Testando título','Testando Testanddo Testando')
    //   await addNoteScreen.titleTxt.addValue('O que a Wandinha nao gosta?');
    //   await addNoteScreen.noteTxt.setValue("Comentários Machistas")

      // save the changes
      await addNoteScreen.saveNote()

      //assertion
      await expect (addNoteScreen.editBtntoBeDisplayed).toBeDisplayed()
       await expect (addNoteScreen.viewNotetoHaveText).toHaveText("Testando Testanddo Testando")
	
       await driver.pause(1000);
       
      //deletar
      await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]').click()
      await $('//hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[7]').click()
   //  await expect($('//*[@text="Are you sure you want to move the note to the trash can"]')).toHaveText()
      await $('//*[@resource-id="android:id/button1"]').click() 

      //verificar se está na lixeira
      await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()
     await $('//*[@text="Trash Can"]').click()
  //  await expect($('//*[@text="?"]')).toHaveText("O que a Wandinha nao gosta")
      //clicar em cima do bagulho epassar de fato o texto
      
       await driver.pause(3000);
});
});