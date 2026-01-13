package com.backend.web.service;

import com.backend.web.entity.Token;
import com.backend.web.repository.TokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class TokenService {
    private final TokenRepository tokenRepository;

    @Transactional
    public void create(String userId, String refreshToken){
        Token token = new Token();
        token.setRefreshToken(refreshToken);
        token.setUserId(userId);
        token.setExpiryDate(LocalDateTime.now().plusDays(7));
        tokenRepository.save(token);
    }
    @Transactional
    public void regenerateToken(String userId,String refreshToken){

    }
}
