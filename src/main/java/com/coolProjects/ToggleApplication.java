package com.coolProjects;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.coolProjects.controller.HomeController;

@SpringBootApplication
@ComponentScan(basePackageClasses = HomeController.class)
public class ToggleApplication {

	public static void main(String[] args) {
		SpringApplication.run(ToggleApplication.class, args);
	}
}
