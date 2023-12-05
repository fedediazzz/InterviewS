
describe('Item Management',() => {
  beforeEach(() => {
    cy.visit('http://immense-hollows-74271.herokuapp.com/');
  });

 it('CREATION - TC1: Should create an item successfully', () => {
  //Buenas Practicas
  //Arrange: instancio en primer lugar mis variables, debo saber con que cosas voy a trabajar.Por ejemplo:

  const textoCreado = 'I am Dro. Who'

  //ACT: Aqui ingreso los codigos de metodo. Se pueden hacer micro asssertions pero siempre es importante 
  //en la ultima parte del codigo 
  cy.get('[name="text"]').type (textoCreado);
  cy.get('[name="imageSrc"]').selectFile('cypress/fixtures/images/image320.png')
  cy.contains('Create Item').click()

  //ASSERT: Valido el resultado Esperado. En este caso con el 'exist'
  cy.get('img[src="assets/images/image320.png"]').should('exist');
  });

 it('EDITION - TC2: Should edit an existing item successfully', () => {
    const textoModificado = 'Hello People'

    cy.get('button[type="button"]').eq(1).click();
    cy.get('[name="text"]').clear().type(textoModificado);
    cy.contains('Update Item').click()
    cy.contains(textoModificado).should('exist');
  });

it('DELETION - TC3: Should delete the created item', () => {
cy.get(':nth-child(3) > .media-left > .media-body > .btn-group > [ng-click="strangerlist.open(item)"]').click();
cy.get('[ng-click="submit()"]').click({force: true});
cy.get('[src="assets/images/bikes-night.jpg"]').should("not.exist")

  });

it('MAX LENGTH - TC4: Should check max length in description', () => {
  const longText = 'a'.repeat(310);
  cy.get('[name="text"]').type(longText);
  cy.contains('Create Item').should('be.disabled');
});

 it('FILTER - TC5: Should filter the item with text "Creators: Matt Duffer, Ross Duffer"', () => {
    const searchText = 'Creators: Matt Duffer, Ross Duffer';
    cy.get('div[id="content"]')
      .contains(searchText)  
      .should('be.visible')
    });
})