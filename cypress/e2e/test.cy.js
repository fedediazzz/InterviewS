import {item} from "../pom/item.js"


describe('Item Management Tests', () => {
  beforeEach(() => {
    item.visit();
  });

  it('CREATION - TC1: Should create an item successfully', () => {
    const textoCreado = 'I am Dro. Who';
    const filePath = 'cypress/fixtures/images/image320.png';
    item.createItem(textoCreado, filePath);
  });

  it('EDITION - TC2: Should edit an existing item successfully', () => {
    const textoModificado = 'Hello People';
    item.editItem(textoModificado);
    cy.contains(textoModificado).should('exist');
  });
});
