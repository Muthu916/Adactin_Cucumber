$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/AdactinFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login_Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Adactin1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"\u003cusername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter the \"\u003cpassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On the Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "hotel-booking-in-adactin-application;login-page;;1"
    },
    {
      "cells": [
        "muthu",
        "muthu123"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-application;login-page;;2"
    },
    {
      "cells": [
        "rathidhana20",
        "rathidhana20"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactin-application;login-page;;3"
    },
    {
      "cells": [
        "Aravindsekar1996",
        "89V726"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-application;login-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2790200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login_Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Adactin1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"muthu\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter the \"muthu123\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On the Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_the_Application()"
});
formatter.result({
  "duration": 15799304601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "muthu",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 1291154500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "muthu123",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_the_In_Password_Field(String)"
});
formatter.result({
  "duration": 401996901,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_the_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1991272501,
  "status": "passed"
});
formatter.after({
  "duration": 408700,
  "status": "passed"
});
formatter.before({
  "duration": 207500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login_Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Adactin1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"rathidhana20\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter the \"rathidhana20\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On the Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_the_Application()"
});
formatter.result({
  "duration": 678366101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rathidhana20",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 658874000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rathidhana20",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_the_In_Password_Field(String)"
});
formatter.result({
  "duration": 414742801,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_the_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 2414907499,
  "status": "passed"
});
formatter.after({
  "duration": 249901,
  "status": "passed"
});
formatter.before({
  "duration": 230600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login_Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Adactin1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"Aravindsekar1996\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter the \"89V726\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On the Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_the_Application()"
});
formatter.result({
  "duration": 810479400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aravindsekar1996",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 673580399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "89V726",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_the_In_Password_Field(String)"
});
formatter.result({
  "duration": 374339599,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_the_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 2169249000,
  "status": "passed"
});
formatter.after({
  "duration": 216199,
  "status": "passed"
});
formatter.before({
  "duration": 201500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Adactin1"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user Enter The Hotel \"Sydney\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user Select The Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Select The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Fill The Check-In Date",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Fill The Check-Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Select How Many Adults In Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Select How Many Children In Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Click On the Search Button And It Navigates To The Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 22
    }
  ],
  "location": "Step_Definition.user_Enter_The_Hotel(String)"
});
formatter.result({
  "duration": 318086101,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Hotel()"
});
formatter.result({
  "duration": 4695555500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 756839400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 329819801,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Fill_The_Check_In_Date()"
});
formatter.result({
  "duration": 332924000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Fill_The_Check_Out_Date()"
});
formatter.result({
  "duration": 373230201,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_How_Many_Adults_In_Per_Room()"
});
formatter.result({
  "duration": 312485700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_How_Many_Children_In_Per_Room()"
});
formatter.result({
  "duration": 354052401,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_the_Search_Button_And_It_Navigates_To_The_Select_Hotel_Page()"
});
formatter.result({
  "duration": 1713589000,
  "status": "passed"
});
formatter.after({
  "duration": 182201,
  "status": "passed"
});
formatter.before({
  "duration": 174299,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Select Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@Adactin2"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "user Click The Radio Button For Selected Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user Click On the Continue Button And It Navigates To The Book Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Radio_Button_For_Selected_Hotel()"
});
formatter.result({
  "duration": 427168500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_the_Continue_Button_And_It_Navigates_To_The_Book_Hotel_Page()"
});
formatter.result({
  "duration": 1779022399,
  "status": "passed"
});
formatter.after({
  "duration": 186400,
  "status": "passed"
});
formatter.before({
  "duration": 210499,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Book Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;book-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@Adactin2"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "user Enter The First Name",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user Enter The Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Enter The Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Enter The Credit Card Number",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user Select The Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user Select The Month And Year In Expiry Date",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user Select The CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user Click On The Book Now Button And It Navigates To The Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_First_Name()"
});
formatter.result({
  "duration": 1100482800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Last_Name()"
});
formatter.result({
  "duration": 878359399,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Billing_Address()"
});
formatter.result({
  "duration": 671897100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Credit_Card_Number()"
});
formatter.result({
  "duration": 381167001,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Credit_Card_Type()"
});
formatter.result({
  "duration": 664537000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Month_And_Year_In_Expiry_Date()"
});
formatter.result({
  "duration": 1159638000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_CVV_Number()"
});
formatter.result({
  "duration": 634166900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Book_Now_Button_And_It_Navigates_To_The_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 5288545100,
  "status": "passed"
});
formatter.after({
  "duration": 233200,
  "status": "passed"
});
formatter.before({
  "duration": 186501,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Hotel Booking Confirmation Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;hotel-booking-confirmation-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@Adactin3"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "user Click The My Itinerary Button And It Navigates To The Booked Itinerary Page",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definition.user_Click_The_My_Itinerary_Button_And_It_Navigates_To_The_Booked_Itinerary_Page()"
});
formatter.result({
  "duration": 12606467200,
  "status": "passed"
});
formatter.after({
  "duration": 192501,
  "status": "passed"
});
});