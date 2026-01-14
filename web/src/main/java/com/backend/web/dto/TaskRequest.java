package com.backend.web.dto;

import com.backend.web.enums.TaskPriority;
import com.backend.web.enums.TaskStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class TaskRequest {
    @NotBlank(message = "Title must be required!")
    @Size(min = 3,max = 50,message = "Title must be between 3 & 50 character!")
    private String title;
    @NotBlank(message = "Description must be required!")
    @Size(min = 5,max = 150,message = "Description must be between 5 & 150 character!")
    private String description;
    @NotNull(message = "Status must be required!")
    private TaskStatus status;
    @NotNull(message = "Priority must be required!")
    private TaskPriority priority;
    @NotNull(message = "DueDate must be required!")
    private LocalDate dueDate;
    @NotNull(message = "Assigned To must be required!")
    private List<String> assignedTo;
    @NotNull(message = "Subtasks To must be required!")
    private List<String> subtasks;
}
