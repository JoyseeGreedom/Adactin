Feature: Testing hotel booking and cancellation functionalities in adactin application 

Background:
    Given the user is logged in
    And goes to landing page

@login
Scenario Outline: Checking the valid username and password for login function 
	Given User launch the adactin application 
	When user enter "<Username>" the valid username 
	And User enter "<Password>" the valid password 
	And User enter in the login button 
	Then It lands to the homepage succesfully 
Examples:
|Username|Password|	
|Arun|1a1a1a|
|Bala|2a2a2a|
|PavithraN|Pavi@2426|
	
	
@searchhotel	
Scenario: User search the hotel in application 
	Given User select the location from options 
	When User select the hotel from the options 
	And User select the room of type from options 
	And User select the no of rooms from otpions 
	And User select the adult room from options 
	And User select the childroom from the options 
	And User enter the submite button 
	And User enter the radio button 
	And User enter the continue button 
	Then It lands to the bookpage successfully 

@bookinghotel	
Scenario: User booking the hotel in application 
	Given User enter his first name 
	When User enter his last name 
	And User enter his address 
	And User enter his card number 
	And User enter his cardtype 
	And User enter his card expiry month 
	And User enter his card expiry year 
	And User enter his card ccv 
	And User enter the booknow button 
	Then It lands bookitiernerary page successfully 

@confirmpage
Scenario: User enter the bookitiernerary page to confirm 
	When User enter the iternery page 
	Then It lands bookiternary page succesfully 

@cancellingthebooking
Scenario: cancelling the booking 
	And click the checkbox button 
	And User clicks cancel button 
	And User User click ok for the confirm alert 
	Then It cancelled the booking successfully 
	
@logout
Scenario: User logging out the application 
	When User click the logout button 
	Then User successfully logged out 
	
	
	
	
	
