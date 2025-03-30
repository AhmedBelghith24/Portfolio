import ProjectsCard from './ProjectsCard'
import { projects } from '../data'
import HyperOne from './customH1/HyperOne'

const Projects = () => {
  return (
    <section className="py-20" id="projects">
      <div className="text-center mb-12">
        <HyperOne value={'Web Creations'} />
      </div>
      <div className="flex flex-col gap-12 items-center mx-auto max-w-5xl w-full px-4">
        {projects.map((project) => (
          <ProjectsCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
