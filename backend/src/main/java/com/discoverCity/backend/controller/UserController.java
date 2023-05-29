package com.discoverCity.backend.controller;

import com.discoverCity.backend.exception.UnauthorizedException;
import com.discoverCity.backend.model.User;
import com.discoverCity.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/usuario")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/usuarios")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @PostMapping("/login")
    public String login(@RequestBody User loginRequest) {
        String username = loginRequest.getEmail();
        String password = loginRequest.getSenha();

        User user = userRepository.findByEmail(username);
        if (user != null && user.getSenha().equals(password)) {
            return "Login successful";
        } else {
            throw new UnauthorizedException("Invalid login credentials");
        }
    }
}
