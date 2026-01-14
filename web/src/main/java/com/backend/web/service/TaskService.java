package com.backend.web.service;

import com.backend.web.dto.TaskRequest;
import com.backend.web.dto.TaskResponse;
import com.backend.web.entity.Task;
import com.backend.web.entity.User;
import com.backend.web.exception.BadRequestException;
import com.backend.web.exception.NotFoundException;
import com.backend.web.exception.UnAuthorizationException;
import com.backend.web.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskResponse taskResponse(Task task){
        return new TaskResponse(
                task.getId(),
                task.getTitle(),
                task.getDescription(),
                task.getUserId(),
                task.getStatus(),
                task.getPriority(),
                task.getDueDate(),
                task.getAssignedTo(),
                task.getSubtasks(),
                task.getCreatedAt(),
                task.getUpdatedAt()
        );
    }
    @Transactional
    public TaskResponse createTask(TaskRequest request){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !(authentication.getPrincipal() instanceof User user)){
            throw new UnAuthorizationException("Unauthorized!");
        }
        Task task = new Task();
        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        task.setStatus(request.getStatus());
        task.setPriority(request.getPriority());
        task.setUserId(user.getId());
        task.setDueDate(request.getDueDate());
        task.setAssignedTo(request.getAssignedTo());
        task.setCreatedAt(LocalDate.now());
        task.setUpdatedAt(LocalDate.now());
        task.setSubtasks(request.getSubtasks());
        task = taskRepository.save(task);
        return taskResponse(task);
    }
    public List<TaskResponse> getTaskList(){
      Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
      if (authentication == null || !(authentication.getPrincipal() instanceof User user)){
          throw new UnAuthorizationException("Unauthorized!");
      }
      List<Task> tasks = taskRepository.findByUserId(user.getId());
      return tasks.stream().map(this::taskResponse).toList();
    }
    public TaskResponse getTask(String id){
        Task task = taskRepository.findById(id).orElseThrow(()-> new NotFoundException("Task not found!"));
        return taskResponse(task);
    }

    @Transactional
    public TaskResponse editTask(String id,TaskRequest request){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !(authentication.getPrincipal() instanceof User user)){
            throw new UnAuthorizationException("Unauthorized!");
        }
        Task task = taskRepository.findById(id).orElseThrow(()->new NotFoundException("Task not found"));
        if (!task.getUserId().equals(user.getId())){
            throw new BadRequestException("Only author can edit this task!");
        }
        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        task.setStatus(request.getStatus());
        task.setUserId(user.getId());
        task.setPriority(request.getPriority());
        task.setDueDate(request.getDueDate());
        task.setAssignedTo(request.getAssignedTo());
        task.setSubtasks(request.getSubtasks());
        task.setUpdatedAt(LocalDate.now());
        taskRepository.save(task);
        return taskResponse(task);
    }

    @Transactional
    public void removeTask(String id){
        Task task = taskRepository.findById(id).orElseThrow(()->new NotFoundException("Task not found"));
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !(authentication.getPrincipal() instanceof User user)){
            throw new UnAuthorizationException("Unauthorized!");
        }
         user = (User) authentication.getPrincipal();
        if (!user.getId().equals(task.getUserId())){
            throw new BadRequestException("Only author can delete this task!");
        }
        taskRepository.delete(task);
    }
}
