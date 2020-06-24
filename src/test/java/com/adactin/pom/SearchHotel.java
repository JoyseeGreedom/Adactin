package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotel {

	public static WebDriver driver;
	
	@FindBy(xpath="//option[@value='Sydney']")
	private WebElement location;

	public SearchHotel(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver2, this);

	}

	public WebDriver getDriver() {
		return driver;
	}

	public WebElement getLocation() {
		return location;
	}
	
	@FindBy(xpath="//option[@value='Hotel Creek']")
	private WebElement hotel;
	
	@FindBy(xpath="//option[@value='Standard']")
	private WebElement roomtype;
	
	@FindBy(xpath="(//option[@value='2'])[1]")
	private WebElement Noofrooms;
	
	@FindBy(xpath="(//option[@value='4'])[2]")
	private WebElement adultroom;
	
	@FindBy(xpath="(//option[@value='1'])[3]")
	private WebElement childroom;	
	
	@FindBy(id="Submit")
	private WebElement submit1;

	public WebElement getHotel() {
		return hotel;
	}

	public WebElement getRoomtype() {
		return roomtype;
	}

	public WebElement getNoofrooms() {
		return Noofrooms;
	}

	public WebElement getAdultroom() {
		return adultroom;
	}

	public WebElement getChildroom() {
		return childroom;
	}

	public WebElement getSubmit1() {
		return submit1;
	}
	
	@FindBy(id="radiobutton_0")
	private WebElement radio;
	
	@FindBy(id="continue")
	private WebElement continu;

	public WebElement getRadio() {
		return radio;
	}

	public WebElement getContinu() {
		return continu;
	}	
}
