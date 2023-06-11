package com.discoverCity.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.discoverCity.backend.model.Review;

public interface AvaliacaoRepository extends JpaRepository<Review, Long> {

}
