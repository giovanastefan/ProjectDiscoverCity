package com.discoverCity.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.discoverCity.backend.model.Establishment;
import com.discoverCity.backend.repository.SearchCustomRepository;
import com.discoverCity.backend.repository.SearchRepository;

@RestController
@RequestMapping("/search")
public class SearchController {

    private final SearchRepository searchRepository;
    private final SearchCustomRepository searchCustomRepository;

    @Autowired
    public SearchController(SearchRepository searchRepository, SearchCustomRepository searchCustomRepository) {
        this.searchRepository = searchRepository;
        this.searchCustomRepository = searchCustomRepository;
    }

    @GetMapping("/establishments")
    public List<Establishment> searchEstablishmentsByName(@RequestParam("name") String name) {
        return searchRepository.findByNameContaining(name);
    }

    @GetMapping("/establishmentsByCategories")
    public List<Establishment> searchEstablishmentsByCategories(@RequestParam("categories") List<String> categories) {
        return searchRepository.findByCategory_CategoryIn(categories);
    }
    
    @GetMapping("/custom")
    public List<Establishment> findByFilters(
    		@RequestParam(value = "name", required = false) String name,
    		@RequestParam(value = "category", required = false) String category,
    		@RequestParam(value = "city", required = false) String city,
    		@RequestParam(value = "rating", required = false) Double rating
    		){
    	return searchCustomRepository.find(name, category, city, rating);
    	
    }
}
