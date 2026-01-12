package com.backend.web.dto;

import com.backend.web.enums.Role;

public record AuthResponse(
        String id,
        String email,
        Role role,
        String accessToken
) {
}
