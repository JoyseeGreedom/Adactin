package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookItiernerery {
	
	public static WebDriver driver;
	
	public BookItiernerery(WebDriver driver2) {
		this.driver=driver2;
		PageFactory.initElements(driver2, this);
	}
	@FindBy(xpath="//a[@href='BookedItinerary.php']")
	private WebElement itinerary;
	
	
	public WebDriver getDriver() {
		return driver;
	}

	public WebElement getItinerary() {
		return itinerary;
	}
}
