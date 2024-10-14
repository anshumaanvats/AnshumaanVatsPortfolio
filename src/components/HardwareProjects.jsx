import { HARDWARE_PROJECTS } from "../constants";
import { motion } from "framer-motion";

const HardwareProjects = () => {
  // Function to handle the image click and open video in a new tab
  const handleImageClick = (video) => {
    const videoPlayerUrl = `/videoPlayer.html?video=${encodeURIComponent(video)}`; // Create URL with video query parameter
    window.open(videoPlayerUrl, "_blank"); // Open video in a new tab
  };

  return (
    <div id="hardware-projects" className="border-b border-neutral-900 pt-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Hardware Projects
      </motion.h1>
      <div>
        {HARDWARE_PROJECTS.map((hardware_projects, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={hardware_projects.image}
                width={150}
                height={150}
                alt={hardware_projects.title}
                className="mb-6 rounded hover:scale-110 hover:shadow-[0px_0px_20px_5px_rgba(128,90,213,0.7)] transition-transform duration-300 ease-in-out"
                onClick={() => handleImageClick(hardware_projects.video)} // Add click event to open video in new tab
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{hardware_projects.title}</h6>
              <p className="mb-4 text-neutral-400 tracking-tighter text-justify">
                {hardware_projects.description}
              </p>
              {hardware_projects.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HardwareProjects;
