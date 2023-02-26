# Setup 
1. Clone repository
2. Make sure your machine has installed node.js
3. Install the dependecy with this command
   > npm install
4. Run the test with this command
   > npm run test
5. Check the report on folder /cypress/results/mochawesome.html

# Test Structure
1. Test file on folder /cypress/e2e/wikipedia.cy.js
2. There are 2 test group
   - Featured language appearance
   - Featured language hyperlink
3. There are 2 custom command function
   - verifyLanguage()
   - verifyLanguageHyperlink()