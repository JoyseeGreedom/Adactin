package com.adactin.utility;

import org.openqa.selenium.WebDriver;

import com.adactin.pom.BookItiernerery;
import com.adactin.pom.BookingHotel;
import com.adactin.pom.LoginPage;
import com.adactin.pom.SearchHotel;

public class PageObjectManager {
	
	public static WebDriver driver;
	
	private BookingHotel bh;
	private BookItiernerery bi;
	private LoginPage lp;
	
	public PageObjectManager(WebDriver ldriver) {
		this.driver=ldriver;
	}
	
	
	public BookingHotel getBh() {
		bh=new BookingHotel(driver);
		return bh;
	}
	public BookItiernerery getBi() {
		bi= new BookItiernerery(driver);
		return bi;
	}
	public LoginPage getlp() {
		lp=new LoginPage(driver);
		return lp;
	}
	

}
