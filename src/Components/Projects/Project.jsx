import React from 'react'
import Projects from '../../Data/Projects.json'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

const Project = () => {
  return (
    <section id='projects'>
    <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {Projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>

    </section>
  )
}
export default Project
