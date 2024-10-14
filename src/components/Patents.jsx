import { PATENTS } from "../constants"
import { motion } from "framer-motion"

const Patents = () => {
  return (
    <div id="patents" className="border-b border-neutral-900 pt-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">Published Patents</motion.h1>
      <div>
        {PATENTS.map((patent, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
              
              {/* Added hover effect for glowing text on applicationno */}
              <a href={patent.pdf} target="_blank" rel="noopener noreferrer">
                <p className="mb-2 text-sm text-neutral-400 hover:scale-110 hover:text-purple-300 hover:text-shadow-lg transition-transform duration-300 ease-in-out">
                  {patent.applicationno}
                </p>
              </a>
              
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
              
              <h6 className="mb-2 font-semibold">
                {patent.name} - <span className="text-sm text-purple-100">{patent.year}</span>
              </h6>
              <p className="mb-4 text-neutral-400 tracking-tighter text-justify">
                {patent.description}
              </p>
              {patent.technologies.map((tech, index) => (
                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Patents;
