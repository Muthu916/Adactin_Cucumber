package com.Adactin_Cucumber;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.Base_class.Base_Class;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\com\\AdactinFeature.feature", glue = "com.sd", monochrome = true, dryRun = false, strict = false, tags = ("~@Adactin4"),
plugin = {
		"html:Cucumber_Reports", 
		"json:Cucumber_Reports/jsonrep.json", 
		"pretty", "com.cucumber.listener.ExtentCucumberFormatter:Cucumber_Reports/Extent_Report.html",
		 "junit:Cucumber_Reports/Cucumberj.xml"})


public class Adactin1_Runner 
{
	public static WebDriver driver;
	
	@BeforeClass
	public static void set_Up() 
	{
		driver = Base_Class.browser_Configuration("chrome");
	}
	
	@AfterClass
	public static void tear_Down() 
	{
		driver.close();

	}

}
