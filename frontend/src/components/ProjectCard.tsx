import React from "react";
import type {Project} from "../types/Project.ts";
import './ProjectCard.css'

interface ProjectCardProps {
    project: Project
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return(
        <div className="project-card">
            <div className="project-card-header">
                <h3>{project.title}</h3>
                {project.featured && <span className="badge featured-badge">Featured</span>}
            </div>

            <p className="project-description">{project.description}</p>

            <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                    <span key={index} className="badge tech-badge">{tech}</span>
                ))}
            </div>

            <div className="project-links">
                {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        Github
                    </a>
                )}
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    )
}