package com.backend.web.service;

import com.backend.web.dto.RegisterRequest;
import com.backend.web.entity.User;
import com.backend.web.exception.BadRequestException;
import com.backend.web.exception.NotFoundException;
import com.backend.web.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public User create(RegisterRequest request){
        if (userRepository.findByEmail(request.getEmail()).isPresent()){
            throw new BadRequestException("User already exist");
        }
        User user = new User();
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        return saveUser(user);
    }

    @Transactional
    public User saveUser(User user){
        return userRepository.save(user);
    }

    @Transactional
    public User findByEmail(String email){
        return userRepository.findByEmail(email).orElseThrow(()->new NotFoundException("User not found"));
    }
}
