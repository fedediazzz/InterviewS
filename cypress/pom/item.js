class Item {
 		visit(){
		cy.visit("http://immense-hollows-74271.herokuapp.com/");
		}
	
		createItem(textoCreado, filePath) {
			cy.get('[name="text"]').type(textoCreado);
			cy.get('[name="imageSrc"]').selectFile(filePath);
			cy.contains('Create Item').click()

		}

		editItem(textoModificado){
			cy.get('button[type="button"]').eq(1).click();
			cy.get('[name="text"]').clear().type(textoModificado);
			cy.contains('Update Item').click();
    		cy.contains(textoModificado).should('exist');
		}
}
export const item = new Item
  