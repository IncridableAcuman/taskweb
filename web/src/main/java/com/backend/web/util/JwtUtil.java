package com.backend.web.util;

import com.backend.web.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtil {
    @Value("${jwt.secret}")
    private String secret;
    @Value("${jwt.access_time}")
    private int accessTime;
    @Value("${jwt.refresh_time}")
    private int refreshTime;


    private Key key;

    @PostConstruct
    public void init(){
        this.key = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
    }

    public String generateToken(User user,int time){
        return Jwts
                .builder()
                .setSubject(user.getEmail())
                .claim("id",user.getId())
                .claim("role",user.getRole())
                .signWith(key, SignatureAlgorithm.HS256)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + time))
                .compact();
    }
    public Map<String,String> getTokens(User user){
        Map<String,String> tokens = new HashMap<>();
        String accessToken = generateToken(user,accessTime);
        String refreshToken = generateToken(user,refreshTime);
        tokens.put("accessToken",accessToken);
        tokens.put("refreshToken",refreshToken);
        return tokens;
    }
    public Claims extractClaims(String token){
        return Jwts
                .parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
    public String extractEmail(String token){
        return extractClaims(token).getSubject();
    }
    public Date extractExpirationDate(String token){
        return extractClaims(token).getExpiration();
    }
    public boolean validateToken(String token){
        try {
            return extractExpirationDate(token).before(new Date());
        } catch (Exception e) {
            return false;
        }
    }
}
