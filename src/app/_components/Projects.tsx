import ProjectCard from "./ProjectCard";
import Container from "./ui/container";

type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;
  title: string | null;
  description: string | null;
  image_url: string | null;
  git_url: string | null;
  demo_url: string | null;
};

const Projects = (props: { projects: Project[] }) => {
  return (
    <Container>
      <h1>Projects</h1>
      {props.projects.length === 0 && <p>Oop! No projects available.</p>}
      {props.projects.length > 0 && (
        <div>
          {props.projects.length === 0 && <p>no projects available</p>}
          {props.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Projects;