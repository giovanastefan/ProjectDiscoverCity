package com.discoverCity.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.discoverCity.backend.model.Establishment;
import com.discoverCity.backend.repository.EstablishmentRepository;

@RestController
@RequestMapping(value="/estabelecimentos")
public class EstablishmentController {	
	
	@Autowired
	private EstablishmentRepository establishmentRepository;
	
	@GetMapping
	public List<Establishment> findAll(){		
		List<Establishment> list = establishmentRepository.findAll();		
		return list;
		
	}

}
