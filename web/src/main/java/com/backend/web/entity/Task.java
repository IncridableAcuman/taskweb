package com.backend.web.entity;

import com.backend.web.enums.TaskPriority;
import com.backend.web.enums.TaskStatus;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "tasks")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Task {
    @Id
    private String id;

    private String title;

    private String description;

    private TaskStatus status;

    private TaskPriority priority;

    private List<String> assignedTo;

    private LocalDateTime dueDate;

    private String userId;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
