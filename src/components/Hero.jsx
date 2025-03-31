import heroImg from '../assets/boh.png'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'
const Hero = () => {
  return (
    <div className="py-10" id="home">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-8 text-center">
        <article>
          <h2 className="text-3xl text-sky-700">Hi 👋🏻, I am</h2>
          <h1 className="text-8xl font-bold tracking-wider text-sky-700">
            Ahmed Belghith
          </h1>
          <p className="mt-4 text-3xl text-sky-600 capitalize tracking-wide">
            <Typewriter
              words={['Full Stack Developer 💻 !', 'React JS Developer ⚛️']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100} // slower typing
              deleteSpeed={70} // slower deleting
              delaySpeed={2500} // wait 2.5s before deleting
            />
          </p>
          <p className="mt-2 text-lg text-sky-700 capitalize tracking-wide">
            Turning ideas into interactive reality
          </p>
          <div className="flex justify-center gap-x-4 mt-4">
            <a href="https://github.com/AhmedBelghith24">
              <FaGithubSquare className="h-8 w-8 text-sky-700 hover:text-sky-700 duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-belghith-aab119349/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-8 w-8 text-sky-700 hover:text-sky-700 duration-300" />
            </a>
            {/* If you want to add a Twitter link, you can uncomment this:
            <a 
              href="https://twitter.com/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaTwitterSquare className="h-8 w-8 text-rose-500 hover:text-rose-700 duration-300" />
            </a>
            */}
          </div>
        </article>
        <article className="hidden md:block">
          <div className="mx-auto h-[600px] w-[600px] overflow-hidden">
            <img
              src={heroImg}
              className="h-full w-full object-cover" // Adjust this property as needed
              alt="Hero"
            />
          </div>
        </article>
      </div>
    </div>
  )
}

export default Hero
