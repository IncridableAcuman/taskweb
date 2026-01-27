package com.backend.web.dto;

import com.backend.web.enums.Role;

import java.time.LocalDateTime;
import java.util.List;

public record UserResponse(
        String id,
        String firstName,
        String lastName,
        String username,
        String email,
        Role role,
        LocalDateTime createdAt,
        LocalDateTime updatedAt,
        List<TaskDto> tasks
) {
}
