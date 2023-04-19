import React from "react";
import ProjectList from "../components/ProjectList";

const projects = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://source.unsplash.com/random/400x400",
    sourceCodeUrl: "https://github.com/user/project-1",
  },
  {
    title: "Project 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://source.unsplash.com/random/400x400",
    sourceCodeUrl: "https://github.com/user/project-2",
  },
  {
    title: "Project 3",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://source.unsplash.com/random/400x400",
    sourceCodeUrl: "https://github.com/user/project-3",
  },
];

const ProjectsPage = () => (
  <div className="container mx-auto py-12">
    <h1 className="text-3xl font-bold mb-6">Projects</h1>
    <ProjectList projects={projects} />
  </div>
);

export default ProjectsPage;