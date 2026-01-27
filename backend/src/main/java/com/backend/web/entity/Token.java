package com.backend.web.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "tokens")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Token {
    @Id
    private String id;

    private String refreshToken;

    private String userId;

    private LocalDateTime expiryDate;
}
