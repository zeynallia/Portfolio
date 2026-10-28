package com.portfolio.backend.service;

import com.portfolio.backend.model.Project;
import com.portfolio.backend.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository projectRepository;

    @Transactional(readOnly = true)
    public List<Project> getAllProjects()
    {
        return projectRepository.findAll();
    }

    @Transactional(readOnly = true)
    public List<Project> getFeaturedProjects()
    {
        return projectRepository.findByFeaturedTrue();
    }

    @Transactional
    public Project createProject(Project project)
    {
        return projectRepository.save(project);
    }
}
