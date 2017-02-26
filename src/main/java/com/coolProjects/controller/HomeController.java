/**
 * 
 */
package com.coolProjects.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


/**
 * @author RCK935
 *
 */

@Controller
public class HomeController {

    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }

    
    @RequestMapping("/")
    public String index() {
       //has to be without blank spaces
       return "forward:index.html";
    }
    

}