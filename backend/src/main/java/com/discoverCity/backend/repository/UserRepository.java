package com.discoverCity.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.discoverCity.backend.model.Establishment;
import com.discoverCity.backend.model.User;


public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
    
    @Query(value="SELECT e FROM Establishment e JOIN e.reviews r WHERE r.user.id = :id AND r.favorite = true")
    public List<Establishment> favorites(Long id);
}
