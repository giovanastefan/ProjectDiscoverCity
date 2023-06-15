package com.discoverCity.backend.repository;

import java.util.List;

import org.springframework.data.repository.query.Param;
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
		
		String query = "SELECT e FROM Establishment e JOIN e.category c LEFT JOIN e.address ad WHERE 2 = 2";
		
		if(name != null) {
			query += "AND e.name LIKE CONCAT('%', :name, '%')";		
		}
		
		if(category != null) {
			query += " AND c.category = :category";
		}
		
		if(city != null) {
			query += " AND ad.city = :city";
		}
		
		if(rating != null) {
			query += " AND e.averageRating >= :rating"; 			
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
