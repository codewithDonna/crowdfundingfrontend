import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { useState } from "react";

import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";




function HomePage() {
  
  const { projects, isLoading, error } = useProjects();
  const navigate = useNavigate();

  

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  
  return (
    <div>
      <div id="project-list">
        {projects.map((projectData, index) => (
          <ProjectCard key={index} projectData={projectData} />
        ))}
      </div>
      
    </div>
  );
}

export default HomePage;
