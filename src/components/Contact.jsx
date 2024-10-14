import frontImage from "../assets/front.png";
import backImage from "../assets/back.png";
import "../index.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div id="contact" className="card-container mb-20">
        <div className="card">
          <div className="card-front">
            <img src={frontImage} alt="Front" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="card-back">
            <img src={backImage} alt="Back" className="w-full h-full object-cover rounded-lg" />
            <a 
              href="tel:+1234567890" 
              className="absolute top-10 left-0 w-full h-1/3"
              style={{ display: 'block' }}
            ></a>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Panipat, Haryana")}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="absolute top-1/3 left-0 w-full h-1/3"
              style={{ display: 'block' }}
            ></a>
            <a 
              href="mailto:anshumaanvats100@gmail.com" 
              className="absolute top-2/3 left-0 w-full h-1/3"
              style={{ display: 'block' }}
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
