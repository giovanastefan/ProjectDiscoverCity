package com.discoverCity.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.discoverCity.backend.model.Establishment;
import com.discoverCity.backend.repository.HomeRepository;

@RestController
@RequestMapping("/home")
public class HomeController {
	@Autowired
	private HomeRepository homeRepository;
	

    @GetMapping("/{id}")
    public List<Establishment> recommendedToTheUser(@PathVariable Long id){
    	List<Establishment> recommended = homeRepository.recommendedToTheUser(id);
    	return recommended;
    }

   
}
