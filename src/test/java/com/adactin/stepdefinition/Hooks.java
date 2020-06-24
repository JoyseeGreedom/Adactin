package com.adactin.stepdefinition;

import java.io.IOException;

import com.adactin.baseclass.BaseClass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseClass {

	@Before
	public void beforeHooks(Scenario scenario) {
		System.out.println(scenario.getName());
		System.out.println(" Started:");
	}
	
	
	/*public void afterHooks(Scenario scenario) throws IOException {
		System.out.println("    Status: "+scenario.getStatus());
		if (scenario.isFailed()) {
			screenshot(scenario.getId());
			System.out.println("Screenshot taken");*/
		
	@After
		public void afterHooks(Scenario scenario) {
		System.out.println(scenario.getId());
		System.out.println(" Completed:");
	}
}
