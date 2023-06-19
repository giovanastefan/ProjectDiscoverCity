package com.discoverCity.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.discoverCity.backend.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {

}
