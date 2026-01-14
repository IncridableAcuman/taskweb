package com.backend.web.entity;

import com.backend.web.enums.TaskPriority;
import com.backend.web.enums.TaskStatus;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
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

    private List<String> subtasks;

    @CreatedDate
    private LocalDate dueDate;

    @LastModifiedDate
    private String userId;

    private LocalDate createdAt;
    private LocalDate updatedAt;
}
