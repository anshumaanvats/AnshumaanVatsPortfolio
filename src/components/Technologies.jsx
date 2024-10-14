import { GiRobotGolem } from "react-icons/gi";
import iotLogo from '../assets/iot-Logo.png';
import rosLogo from '../assets/ros-Logo.png';
import raspberrypiLogo from '../assets/raspberrypi-Logo.png';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNodejs } from "react-icons/tb";
import rpaLogo from '../assets/rpa-logo.png';
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    },
  },
});

const Technologies = () => {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-36 pt-12">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
        style={{ scrollMarginTop: '100px' }} // Adjust this value as needed
      >
        Technologies
      </motion.h1>

      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-8 items-center justify-center"
      >
        {[
          { icon: <GiRobotGolem className="text-4xl sm:text-7xl text-mintcream-400" />, label: "Robotics", variants: iconVariants(2.5) },
          { icon: <img src={iotLogo} alt="IoT Logo" className="w-12 sm:w-20 h-12 sm:h-20" />, label: "IoT", variants: iconVariants(6) },
          { icon: <img src={rosLogo} alt="ROS Logo" className="w-12 sm:w-20 h-12 sm:h-20" />, label: "ROS", variants: iconVariants(4) },
          { icon: <img src={raspberrypiLogo} alt="Raspberry Pi Logo" className="w-12 sm:w-20 h-12 sm:h-20" />, label: "RPi", variants: iconVariants(2) },
          { icon: <img src={rpaLogo} alt="Python Logo" className="w-20 sm:w-28 h-20 sm:h-28" />, label: "RPA", variants: iconVariants(5) },
          { icon: <RiReactjsLine className="text-4xl sm:text-7xl text-cyan-400" />, label: "React", variants: iconVariants(3) },
          { icon: <TbBrandNodejs className="text-4xl sm:text-7xl text-green-400" />, label: "Node.js", variants: iconVariants(1) },
          { icon: <BiLogoPostgresql className="text-4xl sm:text-7xl text-cyan-400" />, label: "MySQL", variants: iconVariants(4) },
        ].map((tech, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <motion.div
              variants={tech.variants}
              initial="initial"
              animate="animate"
              className="tech-icon flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-2 sm:p-4 w-20 sm:w-32 h-20 sm:h-32"
            >
              {tech.icon}
            </motion.div>
            <div className="text-xl sm:text-xl mt-1 sm:mt-2">{tech.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
