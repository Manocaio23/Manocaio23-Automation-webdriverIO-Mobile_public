class AddNoteScreen{
    get skipBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
    }

    get addNoteTxt(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/img_add"]')
    }

    get titleTxt(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
    }

    get noteTxt(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
    }

    get editBtntoBeDisplayed(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')
    }

    get viewNotetoHaveText(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')
    }

    //terminar o deletar

    //Metodo

    async saveNote(){
        await driver.back();
      await driver.back()
    }

    


}

module.exports= new AddNoteScreen()
// epxport deault new classe


