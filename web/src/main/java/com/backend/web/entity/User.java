package com.backend.web.entity;

import com.backend.web.enums.Role;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "users")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class User {
    @Id
    private String id;

    private String firstName;
    private String lastName;

    private String username;

    private String email;

    private String password;

    private Role role;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}
