package com.discoverCity.backend.repository;

import com.discoverCity.backend.model.Establishment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;
import java.util.List;

public interface SearchRepository extends JpaRepository<Establishment, Long> {
    List<Establishment> findByNameContaining(String name);
    List<Establishment> findByCategory_CategoryIn(List<String> category);
}
