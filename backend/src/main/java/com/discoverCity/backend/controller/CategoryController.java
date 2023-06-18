package com.discoverCity.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.discoverCity.backend.model.Category;
import com.discoverCity.backend.repository.CategoryRepository;

@RestController
@RequestMapping(value = "/categories")
public class CategoryController {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@GetMapping
	public List<Category> findAll(){		
		List<Category> list = categoryRepository.findAll();		
		return list;		
	}
	
	@GetMapping(value="/{id}")
	public Optional<Category> findById(@PathVariable Long id) {
		Optional<Category> obj = categoryRepository.findById(id);
		return obj;
	}

}
