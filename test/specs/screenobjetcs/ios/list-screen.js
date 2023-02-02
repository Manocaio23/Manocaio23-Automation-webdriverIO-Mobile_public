class ListScreen{

    //create tudo list - elementos
    get createListBtn(){
        return $('//*[@name="Create list"]')
    }

    get listNameInput(){
        return $('//*[@value="List Name"]')
    }

    get createBtn(){
        return $('//XCUIElementTypeButton[@name="Create"]')
    }
s
    listNameField(name){
        return {name}
    }
    //create item

    get clickItemBtn(){
        return $('//*[@name="Teste"]')
    }

    get createItemBtn(){

        return $('//XCUIElementTypeStaticText[@name="Create item"]')
    }

    get createTitleItemInput(){
        return $('//*[@value="Title"]')
    }
}

module.exports = new ListScreen()