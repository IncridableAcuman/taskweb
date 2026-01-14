package com.backend.web.dto;

import com.backend.web.enums.TaskPriority;
import com.backend.web.enums.TaskStatus;

import java.time.LocalDate;
import java.util.List;

public record TaskResponse(
        String id,
        String title,
        String description,
        String userId,
        TaskStatus status,
        TaskPriority priority,
        LocalDate dueDate,
        List<String> assignedTo,
        List<String> subtasks,
        LocalDate createdAt,
        LocalDate updatedAt
) {
}
