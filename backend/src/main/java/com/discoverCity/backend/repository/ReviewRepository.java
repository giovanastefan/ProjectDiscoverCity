package com.discoverCity.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.discoverCity.backend.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {
	

}
