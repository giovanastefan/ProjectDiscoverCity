package com.discoverCity.backend.repository;

import java.util.List;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.discoverCity.backend.model.Establishment;

import jakarta.persistence.EntityManager;

@Repository
public class HomeRepository {

	private final EntityManager entityManager;

	public HomeRepository(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	public List<Establishment> recommendedToTheUser(Long userId) {
		String jpql = "SELECT e FROM Establishment e " + "WHERE e.category IN "
				+ "(SELECT DISTINCT r.establishment.category FROM Review r WHERE r.user.id = :userId) "
				+ "AND e.averageRating >= " + "(SELECT AVG(r.rating) FROM Review r WHERE r.user.id = :userId) "
				+ "AND NOT EXISTS " + "(SELECT 1 FROM Review r2 WHERE r2.user.id = :userId AND r2.establishment = e)";

		var q = entityManager.createQuery(jpql, Establishment.class);
		q.setParameter("userId", userId);

		return q.getResultList();
	}

}
