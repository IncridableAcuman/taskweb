package com.backend.web.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegisterRequest {
    @NotBlank(message = "Firstname must be required")
    @Size(min = 3,max = 50,message = "Firstname must be between 3 & 50 character")
    private String firstName;

    @NotBlank(message = "Lastname must be required")
    @Size(min = 3,max = 50,message = "Lastname must be between 3 & 50 character")
    private String lastName;

    @NotBlank(message = "Username must be required")
    @Size(min = 3,max = 50,message = "Username must be between 3 & 50 character")
    private String username;

    @Email
    private String email;

    @NotBlank(message = "Password must be required")
    @Size(min = 8,max = 255,message = "Password must be between 8 & 255 character")
    private String password;
}
