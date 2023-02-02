//const ListScreen = require('../../screenobjects/ios/list-screen.js')
const ListScreen = require('../../specs/screenobjetcs/ios/list-screen.js')
describe('teste', () => {

  before(async () => {
       //outro jeito - para todos os testes antes faca isso
    await ListScreen.createListBtn.click()
    await ListScreen.listNameInput.addValue("Teste")
    await ListScreen.createBtn.click()
  });
   it('Create a Todo list', async () => {
    
        //elementos
        // await $('//XCUIElementTypeButton[@name="Create list"]').click()
        // await $('//XCUIElementTypeTextField[@name="List Name "]').click()

      

        // no obbjects ele usa com id e n pega aqui
        await expect ($('//XCUIElementTypeStaticText[@name="Teste"]')).toBeExisting()


   }); 
   it.only('Create a Todo Item', async () => {
    await expect ($('//XCUIElementTypeStaticText[@name="Teste"]')).toBeExisting()

    //create item
    await ListScreen.clickItemBtn.click()
    await ListScreen.createItemBtn.click()
    await ListScreen.createTitleItemInput.addValue("Teste")
  //  await $('//*[@value="Due"]').click()
    await driver.pause(1000)
  //  await $('//XCUIElementTypeOther[@name="Date Picker"]').click()
    // //datapicker
    // await $('//XCUIElementTypeStaticText[@name="Sabado, Janeiro 28"]').click()

}); 
});