package com.backend.web.dto;

import com.backend.web.enums.TaskPriority;
import com.backend.web.enums.TaskStatus;

import java.time.LocalDateTime;
import java.util.List;

public record TaskResponse(
        String id,
        String title,
        String description,
        String userId,
        TaskStatus status,
        TaskPriority priority,
        LocalDateTime dueDate,
        List<String> assignedTo,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
}
