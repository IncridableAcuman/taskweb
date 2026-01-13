package com.backend.web.dto;

import lombok.*;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class ErrorResponse {
    private int status;
    private String error;
    private String message;
    private String path;
    private LocalDateTime dateTime;
}
