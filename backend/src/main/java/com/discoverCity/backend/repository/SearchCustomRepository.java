package com.discoverCity.backend.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.discoverCity.backend.model.Establishment;

import jakarta.persistence.EntityManager;

@Repository
public class SearchCustomRepository {
	
	private final EntityManager entityManager;
	
	public SearchCustomRepository(EntityManager entityManager) {
		this.entityManager = entityManager;
	}
	
	public List<Establishment> find(String name, String category, String city, Double rating){
		
		String query = "SELECT e FROM Establishment e ";
		String condition = " WHERE ";
		
		if(name != null) {
			query += condition + "e.name = :name";
			condition = " AND ";			
		}
		
		if(category != null) {
			query += condition + "JOIN e.category c WHERE c.category = :category";
			condition = " AND ";
		}
		
		if(city != null) {
			query += condition + "JOIN e.adress ad WHERE ad.city = :city";
			condition = " AND ";
		}
		
		if(rating != null) {
			query += condition + "e.averageRating >= :rating"; 			
		}
		
		var q = entityManager.createQuery(query, Establishment.class);
		
		if(name != null) {
			q.setParameter("name", name);			
		}
		
		if(category != null) {
			q.setParameter("category", category);	
		}
		
		if(city != null) {
			q.setParameter("city", city);	
		}
		
		if(rating != null) {
			q.setParameter("rating", rating);			
		}
		
		return q.getResultList();
		
	}

}



