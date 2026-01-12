package com.backend.web.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class LoginRequest {
    @NotBlank(message = "Username must be required")
    @Size(min = 3,max = 50,message = "Username must be between 3 & 50 character")
    private String username;

    @Email
    private String email;
}
