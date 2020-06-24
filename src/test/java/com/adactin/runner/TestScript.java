package com.adactin.runner;


	import org.openqa.selenium.WebDriver;
	import org.testng.annotations.Test;

	import com.adactin.baseclass.BaseClass;
	import com.adactin.pom.BookItiernerery;
	import com.adactin.pom.BookingHotel;
	import com.adactin.pom.CancelHotel;
	import com.adactin.pom.LoginPage;
	import com.adactin.pom.Logout;
	import com.adactin.pom.SearchHotel;

	public class TestScript extends BaseClass {

		public static WebDriver driver;
		
		@Test
		public void adactin() throws InterruptedException {
		/*public static  main(String[] args) throws InterruptedException {*/
			
			driver = getDriver("chrome");
			getUrl("http://adactinhotelapp.com/");
			
			LoginPage Lp = new LoginPage(driver);
			inputValueElement(Lp.getUsername(), "PavithraN");
			inputValueElement(Lp.getPassword(), "Pavi@2426");
			clickOnElement(Lp.getLogin());
			
			SearchHotel sh=new SearchHotel(driver);
			clickOnElement(sh.getLocation());
			clickOnElement(sh.getHotel());
			clickOnElement(sh.getRoomtype());
			clickOnElement(sh.getNoofrooms());
			clickOnElement(sh.getAdultroom());
			clickOnElement(sh.getChildroom());
			clickOnElement(sh.getSubmit1());
			clickOnElement(sh.getRadio());
			clickOnElement(sh.getContinu());
			
			BookingHotel bh=new BookingHotel(driver);
			inputValueElement(bh.getFirstname(), "Joyce");
			inputValueElement(bh.getLastname(), "Greedom");
			inputValueElement(bh.getAddress(), "No 548 parima apt corna");
			inputValueElement(bh.getCardnumber(), "4578965478123654");
			clickOnElement(bh.getCardtype());
			clickOnElement(bh.getMonth());
			clickOnElement(bh.getYear());
			inputValueElement(bh.getCcv(), "457");
			clickOnElement(bh.getBooknow());
			
			BookItiernerery bt=new BookItiernerery(driver);
			clickOnElement(bt.getItinerary());

			CancelHotel ch=new CancelHotel(driver);
			clickOnElement(ch.getCheckbox());
			clickOnElement(ch.getCancelall());	
			
			confirmAlert("ok", null);
			
			Logout lo=new Logout(driver);
			clickOnElement(lo.getLogout());
		}
		
	}

