package com.backend.web.controller;

import com.backend.web.dto.TaskRequest;
import com.backend.web.dto.TaskResponse;
import com.backend.web.service.TaskService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskController {
    private final TaskService taskService;

    @PostMapping
    public ResponseEntity<TaskResponse> createTask(@Valid @RequestBody TaskRequest request){
        return ResponseEntity.ok(taskService.createTask(request));
    }
    @GetMapping
    public ResponseEntity<List<TaskResponse>> getTaskList(){
        return ResponseEntity.ok(taskService.getTaskList());
    }
    @GetMapping("/{id}")
    public ResponseEntity<TaskResponse> getTask(@PathVariable String id){
        return ResponseEntity.ok(taskService.getTask(id));
    }
    @PatchMapping("/{id}")
    public ResponseEntity<TaskResponse> editTask(@PathVariable String id,@Valid @RequestBody TaskRequest request){
        return ResponseEntity.ok(taskService.editTask(id,request));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> removeTask(@PathVariable String id){
        taskService.removeTask(id);
        return ResponseEntity.ok("Task deleted successfully.");
    }
}
