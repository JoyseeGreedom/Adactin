$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Testing hotel booking and cancellation functionalities in adactin application",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Checking the valid username and password for login function",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enter \"\u003cUsername\u003e\" the valid username",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enter \"\u003cPassword\u003e\" the valid password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter in the login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "It lands to the homepage succesfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 15,
      "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function;;1"
    },
    {
      "cells": [
        "Arun",
        "1a1a1a"
      ],
      "line": 16,
      "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function;;2"
    },
    {
      "cells": [
        "Bala",
        "2a2a2a"
      ],
      "line": 17,
      "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function;;3"
    },
    {
      "cells": [
        "PavithraN",
        "Pavi@2426"
      ],
      "line": 18,
      "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 410401,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_is_logged_in()"
});
formatter.result({
  "duration": 432954100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 97599,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Checking the valid username and password for login function",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enter \"Arun\" the valid username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enter \"1a1a1a\" the valid password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter in the login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "It lands to the homepage succesfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_adactin_application()"
});
formatter.result({
  "duration": 6033388800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arun",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 3195722500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1a1a1a",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 3109039799,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_in_the_login_button()"
});
formatter.result({
  "duration": 2855185500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.it_lands_to_the_homepage_succesfully()"
});
formatter.result({
  "duration": 166900,
  "status": "passed"
});
formatter.after({
  "duration": 377001,
  "status": "passed"
});
formatter.before({
  "duration": 179800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_is_logged_in()"
});
formatter.result({
  "duration": 100500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 72801,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Checking the valid username and password for login function",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enter \"Bala\" the valid username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enter \"2a2a2a\" the valid password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter in the login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "It lands to the homepage succesfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_adactin_application()"
});
formatter.result({
  "duration": 1430988699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bala",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 3144226500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2a2a2a",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 3098374200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_in_the_login_button()"
});
formatter.result({
  "duration": 3413814900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.it_lands_to_the_homepage_succesfully()"
});
formatter.result({
  "duration": 160700,
  "status": "passed"
});
formatter.after({
  "duration": 196800,
  "status": "passed"
});
formatter.before({
  "duration": 241100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_is_logged_in()"
});
formatter.result({
  "duration": 146800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 96499,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Checking the valid username and password for login function",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enter \"PavithraN\" the valid username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enter \"Pavi@2426\" the valid password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter in the login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "It lands to the homepage succesfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_adactin_application()"
});
formatter.result({
  "duration": 1011613599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PavithraN",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 3162727601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pavi@2426",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 3116193300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_in_the_login_button()"
});
formatter.result({
  "duration": 10486931999,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.it_lands_to_the_homepage_succesfully()"
});
formatter.result({
  "duration": 156800,
  "status": "passed"
});
formatter.after({
  "duration": 480900,
  "status": "passed"
});
formatter.before({
  "duration": 220400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_is_logged_in()"
});
formatter.result({
  "duration": 115300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 149000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User search the hotel in application",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;user-search-the-hotel-in-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@searchhotel"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User select the location from options",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User select the hotel from the options",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User select the room of type from options",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User select the no of rooms from otpions",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User select the adult room from options",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User select the childroom from the options",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User enter the submite button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enter the radio button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User enter the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "It lands to the bookpage successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_select_the_location_from_options()"
});
formatter.result({
  "duration": 121751300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_select_the_hotel_from_the_options()"
});
formatter.result({
  "duration": 74091400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_select_the_room_of_type_from_options()"
});
formatter.result({
  "duration": 64692200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_select_the_no_of_rooms_from_otpions()"
});
formatter.result({
  "duration": 53657600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_select_the_adult_room_from_options()"
});
formatter.result({
  "duration": 46720001,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_select_the_childroom_from_the_options()"
});
formatter.result({
  "duration": 59598500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_the_submite_button()"
});
formatter.result({
  "duration": 1826891899,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_the_radio_button()"
});
formatter.result({
  "duration": 80220600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_the_continue_button()"
});
formatter.result({
  "duration": 2637088400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.it_lands_to_the_bookpage_successfully()"
});
formatter.result({
  "duration": 118101,
  "status": "passed"
});
formatter.after({
  "duration": 112399,
  "status": "passed"
});
formatter.before({
  "duration": 115400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_is_logged_in()"
});
formatter.result({
  "duration": 90600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 126799,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User booking the hotel in application",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;user-booking-the-hotel-in-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@bookinghotel"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "User enter his first name",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "User enter his last name",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User enter his address",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User enter his card number",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User enter his cardtype",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enter his card expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User enter his card expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User enter his card ccv",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User enter the booknow button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "It lands bookitiernerary page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enter_his_first_name()"
});
formatter.result({
  "duration": 3324893101,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_his_last_name()"
});
formatter.result({
  "duration": 3119233701,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_his_address()"
});
formatter.result({
  "duration": 3223424401,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_his_card_number()"
});
formatter.result({
  "duration": 3202591499,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_his_cardtype()"
});
formatter.result({
  "duration": 55211400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_his_card_expiry_month()"
});
formatter.result({
  "duration": 58858400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_his_card_expiry_year()"
});
formatter.result({
  "duration": 50874500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_his_card_ccv()"
});
formatter.result({
  "duration": 3121130900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_the_booknow_button()"
});
formatter.result({
  "duration": 97117401,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.it_lands_bookitiernerary_page_successfully()"
});
formatter.result({
  "duration": 31999,
  "status": "passed"
});
formatter.after({
  "duration": 103300,
  "status": "passed"
});
formatter.before({
  "duration": 250500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_is_logged_in()"
});
formatter.result({
  "duration": 86300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 106300,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "User enter the bookitiernerary page to confirm",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;user-enter-the-bookitiernerary-page-to-confirm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@confirmpage"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "User enter the iternery page",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "It lands bookiternary page succesfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enter_the_iternery_page()"
});
formatter.result({
  "duration": 12239614001,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.it_lands_bookiternary_page_succesfully()"
});
formatter.result({
  "duration": 128499,
  "status": "passed"
});
formatter.after({
  "duration": 93500,
  "status": "passed"
});
formatter.before({
  "duration": 202599,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_is_logged_in()"
});
formatter.result({
  "duration": 122800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 70700,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "cancelling the booking",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;cancelling-the-booking",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@cancellingthebooking"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "click the checkbox button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User clicks cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User User click ok for the confirm alert",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "It cancelled the booking successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.click_the_checkbox_button()"
});
formatter.result({
  "duration": 203577900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_cancel_button()"
});
formatter.result({
  "duration": 162540900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_User_click_ok_for_the_confirm_alert()"
});
formatter.result({
  "duration": 27926199,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.it_cancelled_the_booking_successfully()"
});
formatter.result({
  "duration": 28799,
  "status": "passed"
});
formatter.after({
  "duration": 174601,
  "status": "passed"
});
formatter.before({
  "duration": 490801,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_is_logged_in()"
});
formatter.result({
  "duration": 89401,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 91100,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "User logging out the application",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;user-logging-out-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 59,
      "name": "@logout"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "User click the logout button",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "User successfully logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_the_logout_button()"
});
formatter.result({
  "duration": 8605129300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_successfully_logged_out()"
});
formatter.result({
  "duration": 28600,
  "status": "passed"
});
formatter.after({
  "duration": 109001,
  "status": "passed"
});
});