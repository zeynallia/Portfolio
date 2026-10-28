package com.portfolio.backend.controller;

import com.portfolio.backend.model.Project;
import com.portfolio.backend.repository.ProjectRepository;
import com.portfolio.backend.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ProjectController {
    private final ProjectService projectService;

    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/featured")
    public List<Project> getFeaturedProjects() {
        return projectService.getFeaturedProjects();
    }

    @PostMapping
    public Project createProject(@RequestBody Project project) {
        return projectService.createProject(project);
    }
}
