package com.backend.web.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ResetPasswordRequest {

    @NotBlank(message = "Token must be required")
    private String token;

    @NotBlank(message = "Password must be required")
    @Size(min = 8,max = 255,message = "Password must be between 8 & 255 character")
    private String password;
}
