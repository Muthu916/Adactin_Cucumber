package com.sd;


import org.openqa.selenium.WebDriver;
import com.Adactin_Cucumber.Adactin1_Runner;
import com.Adactinhelper.AdactinPOManager;
import com.Base_class.Base_Class;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Definition extends Base_Class
{
	public static WebDriver driver = Adactin1_Runner.driver;//invoke the Adactin_runner driver // So it changed to runner class driver from NULL
	public static AdactinPOManager pom1 = new AdactinPOManager(driver);
	public static String path="C:\\Users\\Muthu\\eclipse-workspace\\Adactin_Cucumber\\Test Case - Adactin Hotel - Final.xlsx";
	
	@Before
	public static void before_Hooks(Scenario s) 
	{
		String name = s.getName();//it retrieve all the scenario names 
		System.out.println("Scenario name: " +name);

	}
	
	@After
	public static void after_Hooks(Scenario s) throws Exception 
	{
		if(s.isFailed())
		{
		takeScreenshot("C:\\Users\\Muthu\\eclipse-workspace\\Adactin_Cucumber\\Screenshot\\failed.png"); //it takes the screenshot the failed scenarios
		
		}
		
		String status = s.getStatus();// it give the status of all scenarios
		System.out.println("Scenario Status:" +status);

	}
	
	@Given("^user Launch the Application$")
	public void user_Launch_the_Application() throws Throwable 
	{
		getUrl("https://adactinhotelapp.com/");
	   
	}
	
	@When("^user Enter The \"([^\"]*)\" In Username Field$")
	public void user_Enter_The_In_Username_Field(String username) throws Throwable 
	{
		inputValueElement(pom1.getInstance_Log().getUser(), username);
	}

	@When("^user Enter the \"([^\"]*)\" In Password Field$")
	public void user_Enter_the_In_Password_Field(String password) throws Throwable 
	{
		inputValueElement(pom1.getInstance_Log().getPass(), password);
	}


	@Then("^user Click On the Login Button And It Navigates To The Search Hotel Page$")
	public void user_Click_On_the_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page() throws Throwable 
	{
		clickonElement(pom1.getInstance_Log().getLogin());
	   
	}
	
	@When("^user Enter The Hotel \"([^\"]*)\"$")
	public void user_Enter_The_Hotel(String location) throws Throwable 
	{
		inputValueElement(pom1.getInstance_Search().getLocation(), location);
	}



	@When("^user Select The Hotel$")
	public void user_Select_The_Hotel() throws Throwable 
	{
		inputValueElement(pom1.getInstance_Search().getHotels(), adactin_Particular_Cell_Data(path, 4, 5));  
	   
	}

	@When("^user Select The Room Type$")
	public void user_Select_The_Room_Type() throws Throwable 
	{
		inputValueElement(pom1.getInstance_Search().getRoomtype(), adactin_Particular_Cell_Data(path, 5, 5));  
	  
	}

	@When("^user Select The Number Of Rooms$")
	public void user_Select_The_Number_Of_Rooms() throws Throwable 
	{
	   
		inputValueElement(pom1.getInstance_Search().getRoomno(), "5 - Five");
	}

	@When("^user Fill The Check-In Date$")
	public void user_Fill_The_Check_In_Date() throws Throwable 
	{
		inputValueElement(pom1.getInstance_Search().getDatepickin(), "03/03/2022");
	
	}

	@When("^user Fill The Check-Out Date$")
	public void user_Fill_The_Check_Out_Date() throws Throwable 
	{
		inputValueElement(pom1.getInstance_Search().getDatepick_out(), "05/03/2022");   
	}

	@When("^user Select How Many Adults In Per Room$")
	public void user_Select_How_Many_Adults_In_Per_Room() throws Throwable 
	{
		inputValueElement(pom1.getInstance_Search().getAdultroom(), "2 - Two");   
	}

	@When("^user Select How Many Children In Per Room$")
	public void user_Select_How_Many_Children_In_Per_Room() throws Throwable 
	{
	    
		inputValueElement(pom1.getInstance_Search().getChildroom(), "2 - Two");
	}

	@Then("^user Click On the Search Button And It Navigates To The Select Hotel Page$")
	public void user_Click_On_the_Search_Button_And_It_Navigates_To_The_Select_Hotel_Page() throws Throwable 
	{
		clickonElement(pom1.getInstance_Search().getSubmit());

	}

	@When("^user Click The Radio Button For Selected Hotel$")
	public void user_Click_The_Radio_Button_For_Selected_Hotel() throws Throwable 
	{
	
		clickonElement(pom1.getInstance_Sel().getRadio());
	}

	@Then("^user Click On the Continue Button And It Navigates To The Book Hotel Page$")
	public void user_Click_On_the_Continue_Button_And_It_Navigates_To_The_Book_Hotel_Page() throws Throwable 
	{
		clickonElement(pom1.getInstance_Sel().getCon());

	}

	@When("^user Enter The First Name$")
	public void user_Enter_The_First_Name() throws Throwable 
	{
		inputValueElement(pom1.getInstance_Book().getFname(), adactin_Particular_Cell_Data(path, 14, 5));

	}

	@When("^user Enter The Last Name$")
	public void user_Enter_The_Last_Name() throws Throwable 
	{
		inputValueElement(pom1.getInstance_Book().getLname(), adactin_Particular_Cell_Data(path, 15, 5));
	 
	}

	@When("^user Enter The Billing Address$")
	public void user_Enter_The_Billing_Address() throws Throwable 
	{
		inputValueElement(pom1.getInstance_Book().getAddress(), adactin_Particular_Cell_Data(path, 16, 5)); 
	  
	}

	@When("^user Enter The Credit Card Number$")
	public void user_Enter_The_Credit_Card_Number() throws Throwable 
	{
		inputValueElement(pom1.getInstance_Book().getCcnum(), "1234567891111110");
	
	}

	@When("^user Select The Credit Card Type$")
	public void user_Select_The_Credit_Card_Type() throws Throwable 
	{
		inputValueElement(pom1.getInstance_Book().getCctype(), adactin_Particular_Cell_Data(path, 18, 5));
	  
	}

	@When("^user Select The Month And Year In Expiry Date$")
	public void user_Select_The_Month_And_Year_In_Expiry_Date() throws Throwable 
	{
		inputValueElement(pom1.getInstance_Book().getCcmonth(), adactin_Particular_Cell_Data(path, 19, 5));
		inputValueElement(pom1.getInstance_Book().getCcyear(), adactin_Particular_Cell_Data(path, 19, 9));  

	}

	@When("^user Select The CVV Number$")
	public void user_Select_The_CVV_Number() throws Throwable 
	{

		inputValueElement(pom1.getInstance_Book().getCvv(), adactin_Particular_Cell_Data(path, 20, 5));
	}

	@Then("^user Click On The Book Now Button And It Navigates To The Booking Confirmation Page$")
	public void user_Click_On_The_Book_Now_Button_And_It_Navigates_To_The_Booking_Confirmation_Page() throws Throwable 
	{
		clickonElement(pom1.getInstance_Book().getBook());
		Thread.sleep(5000);
	    
	 }

	
	@When("^user Click The My Itinerary Button And It Navigates To The Booked Itinerary Page$")
	public void user_Click_The_My_Itinerary_Button_And_It_Navigates_To_The_Booked_Itinerary_Page() throws Throwable 
	{
	
	    clickonElement(pom1.getInstance_Itin().getIti());
		Thread.sleep(5000);
	}

	@When("^user Click The Logout Button And It Navigates To The Logout Page$")
	public void user_Click_The_Logout_Button_And_It_Navigates_To_The_Logout_Page() throws Throwable 
	{
			//  Thread.sleep(3000);
			clickonElement(pom1.getInstance_Out().getLogout()); 
	    
	}

}
