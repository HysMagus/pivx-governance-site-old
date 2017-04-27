Feature: As a voter I want to be able to view list of proposals that are up for vote in this cycle

  Scenario: view proposals
    Given I navigated to the site
    When I select the view proposals option
    Then I should see all the proposals that are up for vote