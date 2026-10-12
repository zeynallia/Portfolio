package com.portfolio.backend.config;

import com.portfolio.backend.model.Project;
import com.portfolio.backend.repository.ProjectRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(ProjectRepository repository) {
        return args -> {
            if(repository.count() == 0) {
                Project p1 = new Project(null, "The Daily Grind",
                        "A solo Unreal Engine 5 life-simulation game centered on the gig economy. Features a C++ data-driven architecture, custom UMG smartphone app UIs, World Partition map grids, and building-integrated parking spot mechanics.",
                        "https://github.com/oumel7/the-daily-grind", null, true,
                        List.of("Unreal Engine 5", "C++", "Chaos Vehicles", "UMG"));

                Project p2 = new Project(null, "ECS 2D Game Engine",
                        "A custom Entity-Component-System (ECS) 2D game engine built from scratch. Implements AABB collision resolution, config-driven entity parsing, and live debug inspection tools.",
                        "https://github.com/zeynallia/ecs-engine", null, true,
                        List.of("C++", "Raylib", "ImGui"));

                Project p3 = new Project(null, "Parallel Computing Algorithms",
                        "Implementation of parallel computing algorithms for matrix-vector multiplication, prime number searching, and Mandelbrot set rendering.",
                        "https://github.com/zeynallia/parallel-computing", null, false,
                        List.of("C++", "OpenMP", "MPI"));

                repository.saveAll(List.of(p1, p2, p3));
                System.out.println("Database seeded with portfolio projects.");
            }
        };
    }
}
