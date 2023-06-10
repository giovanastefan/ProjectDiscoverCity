package com.discoverCity.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
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

    @PostMapping("/usuario")
    public String newUser(@Valid @RequestBody User newUser, BindingResult error) {
        if(error.hasErrors()) {
        	return "Invalid fields";
        }
        else {
        	userRepository.save(newUser);
        	return "Successfully registered user";
        }  
    }

    @GetMapping("/usuarios")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @PostMapping("/login")
    public User login(@RequestBody User loginRequest) {
        String username = loginRequest.getEmail();
        String password = loginRequest.getSenha();

        User user = userRepository.findByEmail(username);
        if (user != null && user.getSenha().equals(password)) {
            return user;
        } else {
            throw new UnauthorizedException("Invalid login credentials");
        }
    }
}
