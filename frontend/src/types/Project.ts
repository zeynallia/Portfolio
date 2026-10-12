export interface Project {
    id: number;
    title: string;
    description: string;
    githubUrl: string | null;
    liveUrl: string | null;
    featured: boolean;
    techStack: string[];
}