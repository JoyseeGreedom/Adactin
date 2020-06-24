package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.pom.BookItiernerery;
import com.adactin.pom.BookingHotel;
import com.adactin.pom.CancelHotel;
import com.adactin.pom.LoginPage;
import com.adactin.pom.Logout;
import com.adactin.pom.SearchHotel;
import com.adactin.runner.Runner;
import com.adactin.utility.ConfigurationReader;
import com.adactin.utility.PageObjectManager;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class StepDefinition extends BaseClass {

	public static WebDriver driver=Runner.driver;
	PageObjectManager pom= new PageObjectManager(driver);
	
	@Given("^the user is logged in$")
	public void the_user_is_logged_in() throws Throwable {
		System.out.println("Logged in");
	}

	@Given("^goes to landing page$")
	public void goes_to_landing_page() throws Throwable {
		System.out.println("Successfully Landed in homepage");
	}

	@Given("^User launch the adactin application$")
	public void user_launch_the_adactin_application() throws Throwable {
		ConfigurationReader con= new ConfigurationReader();
		getUrl(con.getUrl());

	}

	/*@When("^user enter the valid username$")
	public void user_enter_the_valid_username() throws Throwable {
		//LoginPage Lp = new LoginPage(driver);
		inputValueElement(pom.getlp().getUsername(), "PavithraN");

	}

	@When("^User enter the valid password$")
	public void user_enter_the_valid_password() throws Throwable {
		//LoginPage Lp = new LoginPage(driver);
		inputValueElement(pom.getlp().getPassword(), "Pavi@2426");

	}*/
	
	@When("^user enter \"([^\"]*)\" the valid username$")
	public void user_enter_the_valid_username(String username) throws Throwable {
		inputValueElement(pom.getlp().getUsername(), username);

	}

	@When("^User enter \"([^\"]*)\" the valid password$")
	public void user_enter_the_valid_password(String password) throws Throwable {
		inputValueElement(pom.getlp().getPassword(), password);
	}


	@When("^User enter in the login button$")
	public void user_enter_in_the_login_button() throws Throwable {
		//LoginPage Lp = new LoginPage(driver);
		clickOnElement(pom.getlp().getLogin());

	}

	@Then("^It lands to the homepage succesfully$")
	public void it_lands_to_the_homepage_succesfully() throws Throwable {
		System.out.println("Succesfully navigates to Homepage");
		//Assert.assertEquals("S", "s");
	}

	@Given("^User select the location from options$")
	public void user_select_the_location_from_options() throws Throwable {
		SearchHotel sh = new SearchHotel(driver);
		clickOnElement(sh.getLocation());
	}

	@When("^User select the hotel from the options$")
	public void user_select_the_hotel_from_the_options() throws Throwable {
		SearchHotel sh = new SearchHotel(driver);
		clickOnElement(sh.getHotel());

	}

	@When("^User select the room of type from options$")
	public void user_select_the_room_of_type_from_options() throws Throwable {
		SearchHotel sh = new SearchHotel(driver);
		clickOnElement(sh.getRoomtype());

	}

	@When("^User select the no of rooms from otpions$")
	public void user_select_the_no_of_rooms_from_otpions() throws Throwable {
		SearchHotel sh = new SearchHotel(driver);
		clickOnElement(sh.getNoofrooms());

	}

	@When("^User select the adult room from options$")
	public void user_select_the_adult_room_from_options() throws Throwable {
		SearchHotel sh = new SearchHotel(driver);
		clickOnElement(sh.getAdultroom());
	}

	@When("^User select the childroom from the options$")
	public void user_select_the_childroom_from_the_options() throws Throwable {
		SearchHotel sh = new SearchHotel(driver);
		clickOnElement(sh.getChildroom());
	}

	@When("^User enter the submite button$")
	public void user_enter_the_submite_button() throws Throwable {
		SearchHotel sh = new SearchHotel(driver);
		clickOnElement(sh.getSubmit1());
	}

	@When("^User enter the radio button$")
	public void user_enter_the_radio_button() throws Throwable {
		SearchHotel sh = new SearchHotel(driver);
		clickOnElement(sh.getRadio());
	}

	@When("^User enter the continue button$")
	public void user_enter_the_continue_button() throws Throwable {
		SearchHotel sh = new SearchHotel(driver);
		clickOnElement(sh.getContinu());
	}

	@Then("^It lands to the bookpage successfully$")
	public void it_lands_to_the_bookpage_successfully() throws Throwable {
		/*System.out.println("Its lands to the bookpage succesfully");*/
	}

	@Given("^User enter his first name$")
	public void user_enter_his_first_name() throws Throwable {
		BookingHotel bh = new BookingHotel(driver);
		inputValueElement(bh.getFirstname(), "Joyce");
	}

	@When("^User enter his last name$")
	public void user_enter_his_last_name() throws Throwable {
		BookingHotel bh = new BookingHotel(driver);
		inputValueElement(bh.getLastname(), "Greedom");
	}

	@When("^User enter his address$")
	public void user_enter_his_address() throws Throwable {
		BookingHotel bh = new BookingHotel(driver);
		inputValueElement(bh.getAddress(), "No 548 parima apt corna");
	}

	@When("^User enter his card number$")
	public void user_enter_his_card_number() throws Throwable {
		BookingHotel bh = new BookingHotel(driver);
		inputValueElement(bh.getCardnumber(), "4578965478123654");
	}

	@When("^User enter his cardtype$")
	public void user_enter_his_cardtype() throws Throwable {
		BookingHotel bh = new BookingHotel(driver);
		clickOnElement(bh.getCardtype());
	}

	@When("^User enter his card expiry month$")
	public void user_enter_his_card_expiry_month() throws Throwable {
		BookingHotel bh = new BookingHotel(driver);
		clickOnElement(bh.getMonth());
	}

	@When("^User enter his card expiry year$")
	public void user_enter_his_card_expiry_year() throws Throwable {
		BookingHotel bh = new BookingHotel(driver);
		clickOnElement(bh.getYear());
	}

	@When("^User enter his card ccv$")
	public void user_enter_his_card_ccv() throws Throwable {
		BookingHotel bh = new BookingHotel(driver);
		inputValueElement(bh.getCcv(), "457");
	}

	@When("^User enter the booknow button$")
	public void user_enter_the_booknow_button() throws Throwable {
		BookingHotel bh = new BookingHotel(driver);
		clickOnElement(bh.getBooknow());
	}

	@Then("^It lands bookitiernerary page successfully$")
	public void it_lands_bookitiernerary_page_successfully() throws Throwable {
		/*System.out.println("It land book itenary page successfully");*/
	}

	@When("^User enter the iternery page$")
	public void user_enter_the_iternery_page() throws Throwable {
		BookItiernerery bt = new BookItiernerery(driver);
		clickOnElement(bt.getItinerary());
	}

	@Then("^It lands bookiternary page succesfully$")
	public void it_lands_bookiternary_page_succesfully() throws Throwable {
		/*System.out.println("its lans page successfully");*/
	}

	@Given("^click the checkbox button$")
	public void click_the_checkbox_button() throws Throwable {
		CancelHotel ch = new CancelHotel(driver);
		clickOnElement(ch.getCheckbox());
	}

	@Given("^User clicks cancel button$")
	public void user_clicks_cancel_button() throws Throwable {
		CancelHotel ch = new CancelHotel(driver);
		clickOnElement(ch.getCancelall());
	}

	@Given("^User User click ok for the confirm alert$")
	public void user_User_click_ok_for_the_confirm_alert() throws Throwable {
		confirmAlert("ok", null);
	}

	@Then("^It cancelled the booking successfully$")
	public void it_cancelled_the_booking_successfully() throws Throwable {
		/*System.out.println("It canccelled succesfully");*/
	}

	@When("^User click the logout button$")
	public void user_click_the_logout_button() throws Throwable {
		Logout lo = new Logout(driver);
		clickOnElement(lo.getLogout());
	}

	@Then("^User successfully logged out$")
	public void user_successfully_logged_out() throws Throwable {
		/*System.out.println("Its logged out succesfully");*/
	}

}
