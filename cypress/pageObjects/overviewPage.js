class OverviewPage {
  getUserTableDataValue(tdValue) {
    return cy.get("tr").contains("td", tdValue);
  }
  getUserTableRow() {
    return cy.get("tbody").find("tr");
  }

  getUserTable(){
    return cy.get("table");
  }

  getNavLink(link) {
    return cy.contains(link);
  }

  getEditButton(){
    return cy.get('.end-xs > .-primary');
  }

  getDeleteButton() {
    return cy.get(".end-xs > .-secondary");
  }

  getConfirmationDialogOption(confirmation) {
    return cy.contains(confirmation);
  }

  getNoRegistrationAvailableText() {
    return cy.contains("No registration available");
  }
}
export default OverviewPage;
