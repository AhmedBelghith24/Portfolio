import aboutSvg from '../assets/IMG_4129.png'
import SectionTitle from './SectionTitle.jsx'
import HyperOne from '/Users/ahmedbelghith/Desktop/my-por/src/components/customH1/HyperOne.jsx'
import programmerGif from '/Users/ahmedbelghith/Desktop/my-por/src/assets/graduation.png'
const About = () => {
  return (
    <section className="bg-transparent py-20" id="about">
      <HyperOne value={'About Me 👨🏻'} />
      <div className="grid md:grid-cols-2 gap-16">
        <img
          src={programmerGif}
          alt="Animated programmer icon"
          className="w-full h-96 rounded-xl object-cover shadow-lg"
        />
        <div className="flex flex-col justify-center">
          <p className="text-slate-600 text-lg leading-loose">
            Hi, I'm Ahmed Belghith 👋, a passionate and detail-oriented Full
            Stack Developer 💻 with expertise in building dynamic, responsive,
            and user-friendly web applications. Proficient in React ⚛️, Redux
            🔄, Node.js 🟩, Express 🚀, MongoDB 🍃, and Mongoose, I specialize
            in crafting seamless full-stack solutions. My skill set also
            includes modern front-end technologies like Tailwind CSS 🌬️,
            JavaScript 💡, HTML 📄, and CSS 🎨, ensuring visually appealing and
            efficient designs.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
