package com.backend.web.service;

import com.backend.web.dto.AuthResponse;
import com.backend.web.dto.LoginRequest;
import com.backend.web.dto.RegisterRequest;
import com.backend.web.entity.User;
import com.backend.web.util.CookieUtil;
import com.backend.web.util.JwtUtil;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserService userService;
    private final TokenService tokenService;
    private final CookieUtil cookieUtil;
    private final JwtUtil jwtUtil;

    public AuthResponse authResponse(User user,String accessToken){
        return new AuthResponse(user.getId(),user.getEmail(),user.getRole(),accessToken);
    }

    @Transactional
    public AuthResponse register(RegisterRequest request, HttpServletResponse response){
        User user = userService.create(request);
        Map<String,String> tokens = jwtUtil.getTokens(user);
        String accessToken = tokens.get("accessToken");
        String refreshToken = tokens.get("refreshToken");
        tokenService.create(user.getId(), refreshToken);
        cookieUtil.addCookie(refreshToken,response);
        return authResponse(user,accessToken);
    }
    @Transactional
    public AuthResponse login(LoginRequest request,HttpServletResponse response){
        User user =
    }
}
