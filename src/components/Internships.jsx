import { INTERNSHIP } from "../constants"
import { motion } from "framer-motion"

const Internship = () => {
 return (
    <div className="border-b border-neutral-900 pb-4">
     <motion.h1 
     whileInView={{ opacity: 1, y: 0 }}
     initial={{ opacity: 0, y: -100 }}
     transition={{ duration: 0.5 }}
     className="my-20 text-center text-4xl">Internships</motion.h1>
      <div>{INTERNSHIP.map((internship, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
         <motion.div
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration: 1 }}
         className="w-full lg:w-1/4">
        {/* Added dynamic link based on the internship data */}
        <a href={internship.link} target="_blank" rel="noopener noreferrer">
          <img 
            src={internship.image} 
            width={150} 
            height={150} 
            alt={internship.title} 
            className="mb-6 rounded hover:scale-110 hover:shadow-[0px_0px_20px_5px_rgba(128,90,213,0.7)] transition-transform duration-300 ease-in-out"
           />
        </a> 
        </motion.div>
        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="w-full max-w-xl lg:w-3/4">
        <h6 className="mb-2 font-semibold">{internship.role} - <span className="text-sm text-purple-100">{internship.company}</span></h6>
        <p className="mb-2 text-sm text-neutral-400">{internship.year}</p>
        <p className="mb-4 text-neutral-400">{internship.description}</p>
        {internship.technologies.map((tech, index) => (
             <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
        ))}
        </motion.div>
        </div>
      ))}
      </div>
    </div>
 )
}

export default Internship
