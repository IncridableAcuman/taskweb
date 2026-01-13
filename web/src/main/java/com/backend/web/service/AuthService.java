package com.backend.web.service;

import com.backend.web.dto.*;
import com.backend.web.entity.User;
import com.backend.web.exception.BadRequestException;
import com.backend.web.util.CookieUtil;
import com.backend.web.util.JwtUtil;
import com.backend.web.util.MailUtil;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
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
    private final MailUtil mailUtil;
    private final PasswordEncoder passwordEncoder;

    public AuthResponse authResponse(User user,String accessToken){
        return new AuthResponse(user.getId(),user.getEmail(),user.getRole(),accessToken);
    }
    public AuthResponse partSection(User user,HttpServletResponse response){
        Map<String,String> tokens = jwtUtil.getTokens(user);
        String accessToken = tokens.get("accessToken");
        String refreshToken = tokens.get("refreshToken");
        tokenService.saveToken(user.getId(), refreshToken);
        cookieUtil.addCookie(refreshToken,response);
        return authResponse(user,accessToken);
    }

    @Transactional
    public AuthResponse register(RegisterRequest request, HttpServletResponse response){
        User user = userService.create(request);
        return partSection(user,response);
    }
    @Transactional
    public AuthResponse login(LoginRequest request,HttpServletResponse response){
        User user = userService.findByEmail(request.getEmail());
        if (!passwordEncoder.matches(user.getPassword(), request.getPassword())){
            throw new BadRequestException("Incorrect password!");
        }
        return partSection(user,response);
    }
    @Transactional
    public AuthResponse refresh(String refreshToken,HttpServletResponse response){
        if (refreshToken == null || !jwtUtil.validateToken(refreshToken)){
            throw new BadRequestException("Invalid token or expired!");
        }
        String email = jwtUtil.extractEmail(refreshToken);
        User user = userService.findByEmail(email);
        return partSection(user,response);
    }
    @Transactional
    public void forgotPassword(ForgotPasswordRequest request){
        User user = userService.findByEmail(request.getEmail());
        Map<String,String> tokens = jwtUtil.getTokens(user);
        String token = tokens.get("accessToken");
        String url = "http://localhost:5173/reset-password?token="+token;
        mailUtil.sendMail(user.getEmail(),"Forgot Password",url);
    }
    @Transactional
    public void resetPassword(ResetPasswordRequest request){
        if (request.getToken() == null || !jwtUtil.validateToken(request.getToken())){
            throw new BadRequestException("Invalid token or expired!");
        }
        String email = jwtUtil.extractEmail(request.getToken());
        User user = userService.findByEmail(email);
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        userService.saveUser(user);
    }
}
