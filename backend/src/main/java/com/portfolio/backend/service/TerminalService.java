package com.portfolio.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TerminalService {
    private final ProjectService projectService;

    public String executeCommand(String input) {
        if (input == null || input.trim().isEmpty()) {
            return "";
        }

        // Extract the base command (e.g., if user types "projects --all", we just grab "projects")
        String[] parts = input.trim().toLowerCase().split("\\s+");
        String command = parts[0];

        return switch (command) {
            case "help" -> getHelpText();
            case "whoami" -> "Amil Zeynalli - Full Stack Software Engineer.\nB.S. Computer Science, Wentworth Institute of Technology.";
            case "skills" -> "Languages: Java, C++, C, Go, TypeScript, SQL\nInfra: AWS, Docker, PostgreSQL\nFrameworks: Spring Boot, React, Unreal Engine 5";
            case "experience" -> getExperienceText();
            case "projects" -> getProjectsText();
            case "clear" -> "";
            default -> "Command not found: " + command + ". Type 'help' for a list of commands.";
        };
    }

    private String getHelpText() {
        return """
            Available commands:
              whoami      - Display short bio
              skills      - List technical skills
              experience  - Show work experience
              projects    - List portfolio projects dynamically from the database
              clear       - Clear the terminal screen
              help        - Show this help message
            """;
    }

    private String getExperienceText() {
        return """
            1. Tripadvisor - Software Engineer Intern (Sep 2025 - Nov 2025)
               Modernized datacenter jobs to AWS EC2 & S3, 
               built React UI components.
               
            2. Logic Robotics - Software Engineer Intern (May 2025 - Aug 2025)
               Architected Go & React exception logging system, 
               built real-time UI.
               
            3. Tripadvisor - Software Engineer Intern (Jun 2024 - Aug 2024)
               Migrated legacy filesystem to AWS S3 using Java.
            """;
    }

    private String getProjectsText() {
        String dbProjects = projectService.getAllProjects().stream()
                .map(p -> "- " + p.getTitle() + " | Stack: " + String.join(", ", p.getTechStack()))
                .collect(Collectors.joining("\n"));

        return "Loaded from PostgreSQL:\n" + dbProjects;
    }
}
