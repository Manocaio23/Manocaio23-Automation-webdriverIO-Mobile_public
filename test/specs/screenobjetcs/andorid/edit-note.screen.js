const AddNoteScreen = require("./add-note.screen")


class EditNoteScreen{

    async skipTutorial(){
        await AddNoteScreen.skipBtn.click()
        await driver.pause(1000);
       
    }

async addAndSaveNote(noteHeading, noteBody){
    await AddNoteScreen.titleTxt.addValue(noteHeading);
    await AddNoteScreen.noteTxt.setValue(noteBody)
}
}
module.exports= new EditNoteScreen();