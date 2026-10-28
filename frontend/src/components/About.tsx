import React from 'react';
import './About.css';

export const About: React.FC = () => {
    return (
        <div className="about-container">
            {/* Intro Section */}
            <section className="about-intro">
                <h2 className="section-title">Engineering Philosophy</h2>
                <p>
                    I am a Full Stack Software Engineer with a first-principles, systems-level approach to development.
                    Whether I am modernizing legacy datacenter workflows for AWS cloud migration, designing robust
                    RESTful APIs in Spring Boot,
                    or engineering custom game architectures in C++, I prioritize clean object-oriented design,
                    performance optimization, and scalable infrastructure.
                </p>
            </section>

            {/* Experience Section */}
            <section className="about-experience">
                <h2 className="section-title">Professional Experience</h2>
                <div className="experience-grid">

                    <article className="experience-card">
                        <div className="exp-header">
                            <div className="exp-title-group">
                                <h3>Software Engineer Intern</h3>
                                <span className="exp-company">Tripadvisor</span>
                            </div>
                            <span className="exp-date">Sep 2025 - Nov 2025</span>
                        </div>
                        <ul className="exp-details">
                            <li>Slashed manual review time by 50% by designing and implementing a new React-based UI
                                component for on-call engineers.
                            </li>
                            <li>Reduced offline job execution time by 10-15% by modernizing legacy Bash scripts into
                                scalable Java classes for AWS migration.
                            </li>
                            <li>Engineered a SQL database schema to reliably track execution, manual review, and
                                approval statuses for internal jobs.
                            </li>
                            <li>Addressed SecOps vulnerabilities by enabling IMDSv2 in IaC launch templates of an EC2 in
                                AWS CDK.
                            </li>
                        </ul>
                    </article>

                    <article className="experience-card">
                        <div className="exp-header">
                            <div className="exp-title-group">
                                <h3>Software Engineer Intern</h3>
                                <span className="exp-company">Logic Robotics</span>
                            </div>
                            <span className="exp-date">May 2025 - Aug 2025</span>
                        </div>
                        <ul className="exp-details">
                            <li>Accelerated developer debugging workflows by building a real-time React/TypeScript UI
                                that visualizes robot paths and rotations via streaming data.
                            </li>
                            <li>Architected a full stack Go and React exception logging system for single-click
                                exception tracking and resolution.
                            </li>
                            <li>Optimized robot animation rendering in TypeScript to ensure smooth, accurate playback of
                                position updates.
                            </li>
                        </ul>
                    </article>

                    <article className="experience-card">
                        <div className="exp-header">
                            <div className="exp-title-group">
                                <h3>Software Engineer Intern</h3>
                                <span className="exp-company">Tripadvisor</span>
                            </div>
                            <span className="exp-date">Jun 2024 - Aug 2024</span>
                        </div>
                        <ul className="exp-details">
                            <li>Migrated data assets from a deprecated legacy filesystem to AWS S3 using Java, reducing
                                tech support costs.
                            </li>
                            <li>Implemented pre-signed URLs in Java to allow secure, temporary access to restricted
                                reports.
                            </li>
                        </ul>
                    </article>

                </div>
            </section>

            {/* Skills Section */}
            <section className="about-skills">
                <h2 className="section-title">Technical Knowledge</h2>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h4>Languages</h4>
                        <div className="skill-tags">
                            {['Java', 'C++', 'C', 'C#', 'Go', 'Python', 'TypeScript', 'JavaScript', 'SQL'].map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h4>Infrastructure & Tools</h4>
                        <div className="skill-tags">
                            {['AWS (EC2, S3, CDK)', 'Docker', 'PostgreSQL', 'Snowflake', 'Prometheus', 'Grafana', 'Git'].map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h4>Frameworks & Software</h4>
                        <div className="skill-tags">
                            {['Spring Boot', 'React.js', 'Node.js', 'Unreal Engine 5', 'Unity', 'JavaFX', 'WPF'].map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="about-education">
                <h2 className="section-title">Education</h2>
                <div className="education-card">
                    <div className="exp-header">
                        <div className="exp-title-group">
                            <h3>Wentworth Institute of Technology</h3>
                            <span className="exp-company">B.S. in Computer Science</span>
                        </div>
                        <span className="exp-date">Graduated Aug 2026</span>
                    </div>
                    <p style={{margin: '0 0 0.5rem 0', color: 'var(--text)'}}>
                        <strong>Minor:</strong> Game Development & Design | <strong>GPA:</strong> 3.9/4.0
                    </p>
                    <p style={{margin: 0, color: 'var(--text)', fontSize: '0.95rem', lineHeight: '1.5'}}>
                        <strong>Core Coursework:</strong> Algorithms, Operating Systems, Game Development, Database
                        Management Systems, Network Programming, Systems Programming with C, Software Engineering,
                        Probability Theory and Mathematical Statistics.
                    </p>
                </div>
            </section>
        </div>
    );
};