package com.discoverCity.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.discoverCity.backend.model.Address;
import com.discoverCity.backend.model.Establishment;
import com.discoverCity.backend.model.EstablishmentRequest;
import com.discoverCity.backend.model.Review;
import com.discoverCity.backend.repository.AddressRepository;
import com.discoverCity.backend.repository.EstablishmentRepository;
import com.discoverCity.backend.repository.ReviewRepository;

@RestController
@RequestMapping(value = "/establishments")
public class EstablishmentController {

	@Autowired
	private EstablishmentRepository establishmentRepository;
	
	@Autowired AddressRepository addressRepository;

	@Autowired
	private ReviewRepository reviewRepository;

	@GetMapping
	public List<Establishment> findAll() {
		List<Establishment> list = establishmentRepository.findAll();
		return list;
	}

	@GetMapping("/{id}")
	public Optional<Establishment> findById(@PathVariable Long id) {
		return establishmentRepository.findById(id);
	}
	@GetMapping(value = "/city")
	public List<Establishment> findByCity(@RequestParam("city") String city) {
		List<Establishment> list = establishmentRepository.findByCity(city);
		return list;
	}
	
	//Endpoint para retornar os 10 estabelecimentos mais bem avaliados
	@GetMapping("/bests")
	public List<Establishment> bestRated(){
		List<Establishment> list = establishmentRepository.bestRated();		
		List<Establishment> bests = list.subList(0, 9);
		
		return bests;
	}
	
	@PostMapping("/register")
	public Establishment insert(@RequestBody EstablishmentRequest request) {
		
			Establishment establishment = request.getEstablishment();			
			Address address = request.getAddress();
			address.setEstablishment(establishment);
			
			Establishment obj = establishmentRepository.save(establishment);
			Address adr = addressRepository.save(address);
			
			return obj;
	}

	@PostMapping("/{establishmentId}/addReview")
	public String addReviewToEstablishment(@PathVariable Long establishmentId, @RequestBody Review review) {
		
		try {
			Optional<Establishment> establishmentOptional = establishmentRepository.findById(establishmentId);
			
			if(establishmentOptional.isPresent()) {
				Establishment establishment = establishmentOptional.get();
				review.setEstablishment(establishment);
				
				establishmentRepository.save(establishment);
				reviewRepository.save(review);	
				return "Review cadastrado com sucesso";
			}
			else {
				return "Estabelecimento não encontrado";
			}
		}
		catch(Exception e){
			return "Erro ao cadastrar review";
		}
		
		
	}

}
