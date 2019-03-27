onEvent("letsGetStartedButton", "click", function( ) {
  setScreen("MainGiftCardDesignSelectionScreen");
});
onEvent("goToSurveyButton", "click", function( ) {
  setScreen("SurveyScreen");
});
onEvent("resubmitFormButton", "click", function( ) {
  setScreen("SurveyScreen");
});
onEvent("goBackToGiftCardSelectionPageButton", "click", function( ) {
  setScreen("MainGiftCardDesignSelectionScreen");
});
onEvent("submitFormButton", "click", function( ) {
  createRecord("FormSubmissionTable", {name:(getText("nameTextField")), Feelings:(getText("feelingsDropDownList")), review:(getText("thougthsAndOpinionsTextField"))}, function(record) {
    
  });
  setScreen("ThankYouForSubmission!");
});
onEvent("happyBirthdayCardButton", "click", function( ) {
  setScreen("BirthdayGiftCardEditorScreen");
});
onEvent("createButton", "click", function( ) {
  setScreen("ResultOfCardScreen");
  setText("whoMadeTheCard", "By " + getText("yourNameTextField"));
  setText("nameOfThePersonHavingTheBirthday", getText("nameOfPersonThatHasTheBirthdayOrEvent"));
  setText("ageOfTheOtherPerson", getText("ageOfTheOtherPerson"));
  setText("aLittleQuoteTheyGave", getText("tryGivingAQuoteTextField"));
});
onEvent("okButton", "click", function(event) {
  setScreen("MainGiftCardDesignSelectionScreen");
});
onEvent("rateUsButton", "click", function(event) {
  setScreen("SurveyScreen");
});
