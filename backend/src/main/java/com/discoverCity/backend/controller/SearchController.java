package com.discoverCity.backend.controller;

import com.discoverCity.backend.model.Establishment;
import com.discoverCity.backend.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/search")
public class SearchController {

    private final SearchRepository searchRepository;

    @Autowired
    public SearchController(SearchRepository searchRepository) {
        this.searchRepository = searchRepository;
    }

    @GetMapping("/establishments")
    public List<Establishment> searchEstablishmentsByName(@RequestParam("name") String name) {
        return searchRepository.findByNomeContaining(name);
    }

    @GetMapping("/establishmentsByCategories")
    public List<Establishment> searchEstablishmentsByCategories(@RequestParam("categories") List<String> categories) {
        return searchRepository.findByCategoria_CategoriaIn(categories);
    }
}
