import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { projectsData } from "../data/projectsData"

const ProjectsSection = styled.section`
  margin-bottom: ${rhythm(2)};
`

const ProjectsTitle = styled.h2`
  color: var(--textTitle);
  margin-bottom: ${rhythm(1)};
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${rhythm(1.5)};
  margin-bottom: ${rhythm(2)};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${rhythm(1)};
  }
`

const ProjectCard = styled.a`
  display: block;
  background: var(--bg);
  border: 2px solid var(--secondary);
  border-radius: 12px;
  padding: ${rhythm(1.25)};
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 280px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(29, 7, 54, 0.2);
    border-color: var(--accent);
  }

  &:focus {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: ${rhythm(0.5)};
`

const ProjectTitle = styled.h3`
  color: var(--textTitle);
  margin: 0 0 ${rhythm(0.5)} 0;
  font-size: ${rhythm(0.8)};
  font-weight: 600;
  line-height: 1.3;
  font-family: 'Roboto', sans-serif;
`

const ProjectDescription = styled.p`
  color: var(--textNormal);
  margin: 0 0 ${rhythm(0.75)} 0;
  font-size: ${rhythm(0.6)};
  line-height: 1.6;
  flex-grow: 1;
  font-weight: 400;
  letter-spacing: 0.01em;
  font-family: 'Roboto', sans-serif;
`

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${rhythm(0.3)};
  margin-bottom: ${rhythm(0.75)};
`

const TechTag = styled.span`
  background: var(--accent);
  color: var(--text);
  padding: ${rhythm(0.25)} ${rhythm(0.5)};
  border-radius: 8px;
  font-size: ${rhythm(0.5)};
  font-weight: 600;
  letter-spacing: 0.03em;
  font-family: 'Roboto', sans-serif;
  border: 2px solid var(--text);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  text-transform: uppercase;
  min-height: 24px;
  display: inline-flex;
  align-items: center;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
    border-color: var(--primary);
  }
`

const ProjectLinks = styled.div`
  display: flex;
  gap: ${rhythm(0.5)};
  margin-top: auto;
`

const ProjectLink = styled.span`
  color: var(--textLink);
  font-size: ${rhythm(0.5)};
  font-weight: 600;
  letter-spacing: 0.02em;
  font-family: 'Roboto', sans-serif;

  ${ProjectCard}:hover & {
    color: var(--accent);
  }
`

// Sample projects data - you can move this to a separate file or fetch from a CMS
// Now using external data file - see src/data/projectsData.js

const Projects = () => {
  // Filter for featured projects or show all
  const featuredProjects = projectsData.filter(project => project.featured !== false).slice(0, 6);

  return (
    <ProjectsSection>
      <ProjectsTitle>Featured Projects</ProjectsTitle>
      <ProjectsGrid>
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <ProjectImage
              src={project.image}
              alt={`${project.title} preview`}
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                e.target.src = `data:image/svg+xml;base64,${btoa(`
                  <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#dbe4ee"/>
                    <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#054a91" text-anchor="middle" dy=".3em">
                      ${project.title}
                    </text>
                  </svg>
                `)}`
              }}
            /> */}
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTech>
              {project.technologies.map((tech, index) => (
                <TechTag key={index}>{tech}</TechTag>
              ))}
            </ProjectTech>
            <ProjectLinks>
              <ProjectLink>View Project →</ProjectLink>
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  )
}

export default Projects
