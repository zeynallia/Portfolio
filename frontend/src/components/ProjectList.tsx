import {useEffect, useState} from "react";
import type {Project} from "../types/Project.ts";
import {ProjectCard} from "./ProjectCard.tsx";

export const ProjectList: React.FC = () => {
    const[projects, setProjects] = useState<Project[]>([]);
    const[loading, setLoading] = useState<boolean>(true);
    const[error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/projects')
            .then(response => {
                if (!response.ok) throw new Error('Failed to fetch projects');
                return response.json();
            })
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching data: ", err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if(loading) return <div>Loading Projects...</div>;
    if(error) return <div style={{ color: 'red' }}>Error: {error}</div>;

    return (
        <div className="project-list">
            <h2>My Projects</h2>
            {projects.length === 0 ? (
                <p>No Projects Found.</p>
            ) : (
                projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))
            )}
        </div>
    )
}