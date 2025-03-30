import HyperOne from '/Users/ahmedbelghith/Desktop/my-por/src/components/customH1/HyperOne.jsx'
import SkillCard from '/Users/ahmedbelghith/Desktop/my-por/src/components/customSkills/skillsCard/SkillCard.jsx'
import { useState } from 'react'
import { skills } from '/Users/ahmedbelghith/Desktop/my-por/src/data.jsx'

const skillstext = `These are the essential tools, libraries, and frameworks that
          constitute my current tech stack, enabling me to develop robust and
          innovative applications.`

const Skills = () => {
  return (
    <section className="bg-transparent py-20" id="skills">
      <div className="flex flex-col items-center">
        <HyperOne value="My Skills" />
        <p className="lg:text-2xl lg:text-center text-xl p-4 text-justify">
          {skillstext}
        </p>

        <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-8">
          {skills.map((skill) => {
            return <SkillCard key={skill.id} {...skill} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
