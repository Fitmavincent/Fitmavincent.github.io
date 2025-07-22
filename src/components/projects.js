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
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${rhythm(1)};
  margin-bottom: ${rhythm(2)};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ProjectCard = styled.a`
  display: block;
  background: var(--bg);
  border: 2px solid var(--vista-blue);
  border-radius: 12px;
  padding: ${rhythm(1)};
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(62, 124, 177, 0.2);
    border-color: var(--safety-orange);
  }

  &:focus {
    outline: 2px solid var(--safety-orange);
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
  margin: 0 0 ${rhythm(0.25)} 0;
  font-size: ${rhythm(0.75)};
`

const ProjectDescription = styled.p`
  color: var(--textNormal);
  margin: 0 0 ${rhythm(0.5)} 0;
  font-size: ${rhythm(0.5)};
  line-height: 1.5;
`

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${rhythm(0.25)};
  margin-bottom: ${rhythm(0.5)};
`

const TechTag = styled.span`
  background: var(--accent);
  color: white;
  padding: ${rhythm(0.1)} ${rhythm(0.25)};
  border-radius: 4px;
  font-size: ${rhythm(0.35)};
  font-weight: 500;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: ${rhythm(0.5)};
  margin-top: auto;
`

const ProjectLink = styled.span`
  color: var(--textLink);
  font-size: ${rhythm(0.4)};
  font-weight: 500;

  ${ProjectCard}:hover & {
    color: var(--safety-orange);
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
