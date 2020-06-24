package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookingHotel {

	public static WebDriver driver;

	public BookingHotel(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver2, this);
}
	
	@FindBy(id="first_name")
	private WebElement firstname;
	
	@FindBy(id="last_name")
	private WebElement lastname;
	
	@FindBy(id="address")
	private WebElement address;
	
	@FindBy(id="cc_num")
	private WebElement cardnumber;
	
	@FindBy(xpath="//option[@value='VISA']")
	private WebElement cardtype;
	
	@FindBy(xpath="//option[@value='3']")
	private WebElement month;
	
	@FindBy(xpath="//option[@value='2022']")
	private WebElement year;
	
	@FindBy(id="cc_cvv")
	private WebElement ccv;
	
	@FindBy(id="book_now")
	private WebElement booknow;

	public WebDriver getDriver() {
		return driver;
	}

	public WebElement getFirstname() {
		return firstname;
	}

	public WebElement getLastname() {
		return lastname;
	}

	public WebElement getAddress() {
		return address;
	}

	public WebElement getCardnumber() {
		return cardnumber;
	}

	public WebElement getCardtype() {
		return cardtype;
	}

	public WebElement getMonth() {
		return month;
	}

	public WebElement getYear() {
		return year;
	}

	public WebElement getCcv() {
		return ccv;
	}

	public WebElement getBooknow() {
		return booknow;
	}
}
