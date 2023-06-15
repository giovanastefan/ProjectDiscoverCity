package com.discoverCity.backend.controller;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.discoverCity.backend.exception.UnauthorizedException;
import com.discoverCity.backend.model.User;
import com.discoverCity.backend.repository.UserRepository;

import jakarta.validation.Valid;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String newUser(@Valid @RequestBody User newUser, BindingResult error) {
        if(error.hasErrors()) {
        	return "Invalid fields";
        }
        else {
        	User user = userRepository.findByEmail(newUser.getEmail());
        	if(Objects.isNull(user)) {
        		userRepository.save(newUser);
            	return "Successfully registered user";
        	}
        	else {
        		return "User already registered";
        	}
        	
        }  
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public User findById(@PathVariable Long id) {
    	Optional<User> userOptional = userRepository.findById(id);
    	User user = userOptional.get();
    	
    	return user;
    }

    @PostMapping("/login")
    public User login(@RequestBody User loginRequest) {
        String username = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        User user = userRepository.findByEmail(username);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        } else {
            throw new UnauthorizedException("Invalid login credentials");
        }
    }
}
