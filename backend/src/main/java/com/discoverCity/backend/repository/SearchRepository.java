package com.discoverCity.backend.repository;

import com.discoverCity.backend.model.Establishment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SearchRepository extends JpaRepository<Establishment, Long> {
    List<Establishment> findByNome(String nome);
    List<Establishment> findByNomeContaining(String nome);
}
