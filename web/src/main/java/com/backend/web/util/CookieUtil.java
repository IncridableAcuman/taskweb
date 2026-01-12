package com.backend.web.util;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class CookieUtil {

    @Bean
    public void addCookie(String refreshToken, HttpServletResponse response){
        Cookie cookie = new Cookie("refreshToken",refreshToken);
        cookie.setHttpOnly(true);
        cookie.setValue(refreshToken);
        cookie.setMaxAge(604800000);
        cookie.setSecure(false);
        cookie.setPath("/");
        response.addCookie(cookie);
    }
    @Bean
    public void clearCooke(HttpServletResponse response){
        Cookie cookie = new Cookie("refreshToken","");
        cookie.setHttpOnly(true);
        cookie.setValue(null);
        cookie.setMaxAge(0);
        cookie.setSecure(false);
        cookie.setPath("/");
        response.addCookie(cookie);
    }
}
