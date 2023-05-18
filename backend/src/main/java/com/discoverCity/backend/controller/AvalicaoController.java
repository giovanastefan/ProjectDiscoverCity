package com.discoverCity.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.discoverCity.backend.model.Avaliacao;
import com.discoverCity.backend.model.Category;
import com.discoverCity.backend.repository.AvaliacaoRepository;

@RestController
@RequestMapping(value = "/avaliacoes")
public class AvalicaoController {
	
	@Autowired
	private AvaliacaoRepository avaliacaoRepository;
	
	@GetMapping
	public List<Avaliacao> findAll(){		
		List<Avaliacao> list = avaliacaoRepository.findAll();		
		return list;
		
	}
	

}
