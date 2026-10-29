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
            repository.deleteAll();

            Project p1 = new Project(null, "The Daily Grind",
                    "A solo Unreal Engine 5 life-simulation game centered on the gig economy. Features a C++ data-driven architecture, custom UMG smartphone app UIs, World Partition map grids, and building-integrated parking spot mechanics.",
                    "https://github.com/oumel7/TheDailyGrind", null, true,
                    List.of("Unreal Engine 5", "C++", "Chaos Vehicles", "UMG"));

            Project p2 = new Project(null, "Bushido",
                    "2D action-platformer built in C++ with a custom Entity-Component-System (ECS) engine.",
                    "https://github.com/zeynallia/Bushido", null, true,
                    List.of("C++", "Raylib", "ImGui"));

            Project p3 = new Project(null, "NotMario",
                    "A 2D side-scrolling platformer engine built from scratch in C++ using raylib. Features custom AABB collision physics, variable jump mechanics, dynamic entity management, grid-based level parsing, and animated sprite sheets.",
                    "https://github.com/zeynallia/NotMario", null, false,
                    List.of("C++", "Raylib", "ImGui"));

            repository.saveAll(List.of(p1, p2, p3));
            System.out.println("Database seeded with portfolio projects.");
        };
    }
}
