package com.backend.web.service;

import com.backend.web.entity.Token;
import com.backend.web.entity.User;
import com.backend.web.exception.NotFoundException;
import com.backend.web.repository.TokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TokenService {
    private final TokenRepository tokenRepository;

    @Transactional
    public void saveToken(String userId,String refreshToken){
        Optional<Token> optional = findByUserId(userId);
        Token token = optional.orElseGet(Token::new);
        token.setRefreshToken(refreshToken);
        token.setUserId(userId);
        token.setExpiryDate(LocalDateTime.now().plusDays(7));
        saveToken(token);
    }
    @Transactional
    public void removeToken(User user){
        Token token = findByUserId(user.getId()).orElseThrow(()-> new NotFoundException("User not found"));
        tokenRepository.delete(token);
    }
    public Optional<Token> findByUserId(String userId){
        return tokenRepository.findByUserId(userId);
    }
    public void saveToken(Token token){
        tokenRepository.save(token);
    }
}
