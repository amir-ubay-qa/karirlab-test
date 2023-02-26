import langData from '../fixtures/lang-data.json'

describe('A. Featured language appearance', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('1. Verify language English is visible', () => {
    cy.verifyLanguage(langData.english)
  })
  it('2. Verify language of Rusia is visible', () => {
    cy.verifyLanguage(langData.rusia)
  })
  it('3. Verify language of Japan is visible', () => {
    cy.verifyLanguage(langData.jepang)
  })
  it('4. Verify language of Deutch is visible', () => {
    cy.verifyLanguage(langData.belanda)
  })
  it('5. Verify language of Francais is visible', () => {
    cy.verifyLanguage(langData.prancis)
  })
  it('6. Verify language of Espanol is visible', () => {
    cy.verifyLanguage(langData.spanyol)
  })
  it('7. Verify language of Italiano is visible', () => {
    cy.verifyLanguage(langData.itali)
  })
  it('8. Verify language of Chinese is visible', () => {
    cy.verifyLanguage(langData.china)
  })
  it('9. Verify language of Farsi is visible', () => {
    cy.verifyLanguage(langData.farsi)
  })
  it('10. Verify language of Polish is visible', () => {
    cy.verifyLanguage(langData.polandia)
  })
})

describe('B. Featured language hyperlink', () => {
  it('1. Verify hyperlink of English Language Site', () => {
    cy.verifyLanguageHyperlink(langData.english)
  })
  it('2. Verify hyperlink of Rusia Language Site', () => {
    cy.verifyLanguageHyperlink(langData.rusia)
  })
  it('3. Verify hyperlink of Jepang Language Site', () => {
    cy.verifyLanguageHyperlink(langData.jepang)
  })
  it('4. Verify hyperlink of Deutch Language Site', () => {
    cy.verifyLanguageHyperlink(langData.belanda)
  })
  it('5. Verify hyperlink of Francais Language Site', () => {
    cy.verifyLanguageHyperlink(langData.prancis)
  })
  it('6. Verify hyperlink of Spanish Language Site', () => {
    cy.verifyLanguageHyperlink(langData.spanyol)
  })
  it('7. Verify hyperlink of Italia Language Site', () => {
    cy.verifyLanguageHyperlink(langData.itali)
  })
  it('8. Verify hyperlink of Chinese Language Site', () => {
    cy.verifyLanguageHyperlink(langData.china)
  })
  it('9. Verify hyperlink of Farsi Language Site', () => {
    cy.verifyLanguageHyperlink(langData.farsi)
  })
  it('10. Verify hyperlink of Polish Language Site', () => {
    cy.verifyLanguageHyperlink(langData.polandia)
  })
  
})