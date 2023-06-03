package com.discoverCity.backend.repository;

import com.discoverCity.backend.model.Establishment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;
import java.util.List;

public interface SearchRepository extends JpaRepository<Establishment, Long> {
    List<Establishment> findByNomeContaining(String nome);
    List<Establishment> findByCategoria_CategoriaIn(List<String> categoria);
}
