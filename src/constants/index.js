import softwareproject1 from "../assets/projects/softwareproject-1.jpg";
import softwareproject2 from "../assets/projects/softwareproject-2.jpg";
import softwareproject3 from "../assets/projects/softwareproject-3.jpg";
import hardwareproject1 from "../assets/projects/hardwareproject-1.jpg";
import hardwareproject2 from "../assets/projects/hardwareproject-2.jpg";
import hardwareproject3 from "../assets/projects/hardwareproject-3.jpg";
import hardwareproject4 from "../assets/projects/hardwareproject-4.jpg";
import hardwareproject5 from "../assets/projects/hardwareproject-5.jpg";
import hardwareproject6 from "../assets/projects/hardwareproject-6.jpg";
import hardwareproject7 from "../assets/projects/hardwareproject-7.jpg";
import company1 from "../assets/projects/company-1.jpg";
import company2 from "../assets/projects/company-2.jpg";
import patent5 from "../assets/documents/202411041958.pdf";
import patent4 from "../assets/documents/202311063488.pdf";
import patent3 from "../assets/documents/202311063214.pdf";
import patent2 from "../assets/documents/202311064317.pdf";
import patent1 from "../assets/documents/202311063490.pdf";
import video7 from "/videos/WHEEL CHAIR.mp4";
import video6 from "/videos/SERVING ROBOT.mp4";
import video5 from "/videos/SMART SPEAKER.mp4";
import video4 from "/videos/PARKING SYSTEM.mp4";
import video3 from "/videos/BRAINY.mp4";
import video2 from "/videos/TRUCK OVERLOADING.mp4";
import video1 from "/videos/AUTOMATED FAN.mp4";

export const HERO_CONTENT = `I am a passionate Software Engineer with 3 years of hands-on experience in building advanced, integrated solutions. I specialize in designing scalable web applications, automating business processes using tools like UiPath and Automation Anywhere, and developing intelligent robotic systems that integrate IoT, sensors, and embedded technologies. My goal is to create innovative solutions that enhance automation, improve efficiency, and drive technological advancements across industries.`;

export const ABOUT_TEXT = `I am a dedicated and versatile engineer with a passion for creating efficient and innovative robotic systems, as well as developing robust web applications and automating business processes. With 3 years of hands-on experience, I have worked with a variety of technologies, including IoT, sensors, embedded systems, C++, Python, Node.js, React. My journey in engineering began with a deep curiosity for how things work and has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments, enjoying the process of solving complex problems to deliver high-quality solutions. Outside of engineering, I am an RPA enthusiast, utilizing tools like UiPath and Automation Anywhere, and I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const INTERNSHIP = [
  {
    image: company1,
    year: "August 2024- September 2024",
    role: "Full Stack Developer & RPA Expert",
    company: "TATA Advanced Systems Limited",
    description: `I gained practical experience in full-stack development and worked on creating an RPA bot to streamline business processes. Additionally, I deepened my understanding of enterprise-level applications and automation technologies.`,
    technologies: ["Mendix", "CSS",  "Robotic Process Automation"],
    link: "https://www.tataadvancedsystems.com/"
  },
  {
    image: company2,
    year: "July 2023- August 2023",
    role: "Software & Hardware Developer", 
    company: "AICTE Idea Lab",
    description: `I worked as AICTE IdeaLab Ambassador for software development of various projects and also gained the knowledge of electronic components related with iot such as ESP32, NodeMCU and Mechanical software for designing such as catia,autocad.`,
    technologies: ["IoT", "ESP32", "NodeMCU", "Catia", "3D Printing", "ArduinoIDE"],
    link: "https://idealnet.aicte-india.org/"
  }
];
/*
export const EXPERIENCES = [
  {
    year: "August 2024- September 2024",
    role: "Full Stack Developer & RPA Expert",
    company: "TATA Advanced Systems Limited",
    description: `I gained practical experience in full-stack development and worked on creating an RPA bot to streamline business processes. Additionally, I deepened my understanding of enterprise-level applications and automation technologies.`,
    technologies: ["Mendix", "CSS",  "Robotic Process Automation"],
  },
  {
    year: "July 2023- August 2023",
    role: "Software & Hardware Developer", 
    company: "AICTE Idea Lab",
    description: `I worked as AICTE IdeaLab Ambassador for software development of various projects and also gained the knowledge of electronic components related with iot such as ESP32, NodeMCU and Mechanical software for designing such as catia,autocad.`,
    technologies: ["IoT", "ESP32", "NodeMCU", "Catia", "3D Printing", "ArduinoIDE"],
  }
];
*/
export const SOFTWARE_PROJECTS = [
  {
    title: "Portfolio Website",
    image: softwareproject1,
    description:
      "Developed a personal portfolio website to showcase professional accomplishments. The site features sections for projects, skills, patents, and contact information. Designed to provide a comprehensive overview of the individual's expertise and achievements in a user-friendly, accessible format.",
    technologies: ["HTML", "CSS", "React", "Node.js"],
  },
  {
    title: "Visitor Management System",
    image: softwareproject2,
    description:
      "Developed a comprehensive application for streamlining visitor management processes. Key features include visitor appointment scheduling, admin approval system, and visitor tracking. The system supports three user types: admin (with full oversight and employee management capabilities), regular users (for creating visitor appointments), and security personnel (for visitor verification and temporary ID issuance). Enhances security and efficiency in managing visitor access.",
    technologies: ["Mendix", "CSS", "Authentication", "MySQL"],
  },
  {
    title: "RPA Bots",
    image: softwareproject3,
    description:
      "Developed automation bots using Automation Anywhere (RPA technology) to streamline user management in organizational databases. These bots automate the processes of activating new user accounts and deactivating accounts for employees who have left the organization. This solution increases efficiency, reduces manual errors, and ensures timely updates to user access across the organization's systems.",
    technologies: ["Automation Anywhere", "UiPath", "Robotic Process Automation"],
  },
];

export const HARDWARE_PROJECTS = [
  {
    title: "Omni-Mate Wheel Chair",
    image: hardwareproject7,
    description:
      "Developed an innovative wheelchair with mecanum wheels for omnidirectional movement. Features include a 3-way joystick, PS2 remote, HTML phone IP interface, and voice assistance for medication management. Prioritizes user comfort, convenience, and safety while maintaining cost efficiency.",
    technologies: ["Mecanum Wheels", "Arduino Mega", "C++", "HTML", "Voice Assistance"],
    video: video7
  },
  {
    title: "Serving Robot",
    image: hardwareproject6,
    description:
      "Developed a smart serving robot controlled via a phone using NodeMCU. Features include matrix eyes that blink when detecting proximity, line-following capabilities for navigating to customers, and automated food serving. Ensures interactive dining experiences and enhances customer service efficiency.",
    technologies: ["Matrix Eyes", "NodeMCU", "Line Following Sensors", "Mobile App Control"],
    video: video6
  },
  {
    title: "Smart Speaker",
    image: hardwareproject5,
    description:
      "Developed a versatile boombox equipped with a wireless charger for compatible phones. Features include programmable lights with over 1000 patterns controlled via a mobile app, a powerful 20,000mAh battery for extended use, and low-cost design for an affordable home entertainment solution. Delivers a dynamic audio-visual experience.",
    technologies: ["Wireless Charging", "Programmable Lights", "NodeMCU", "Mobile App Control"],
    video: video5
  },
  {
    title: "Parking System",
    image: hardwareproject4,
    description:
      "Developed a comprehensive parking system with user and manager interfaces. Features include advance booking, IR sensors for slot detection, NodeMCU for real-time data transmission, automated slot allocation, and secure payment integration. Provides real-time updates and navigation assistance.",
    technologies: ["IR Sensors", "NodeMCU", "Real-time Data Transmission", "Cloud Integration"],
    video: video4
  },
  {
    title: "Robotic Personal Assistance System",
    image: hardwareproject3,
    description:
      "Developed an AI-powered robot for autonomous task execution. Incorporates WiFi for remote control, voice recognition for user interaction, and Raspberry Pi for processing. Features voice activation for commands. Innovation secured with a patent.",
    technologies: ["Robot Control", "Raspberry Pi", "Voice Recognition", "Voice Activation"],
    video: video3
  },
  {
    title: "Truck Overloading Detection System",
    image: hardwareproject2,
    description:
    "Developed a system with Load Cell Detection to measure truck loads, Relay Control to prevent overloaded trucks from moving, and NodeMCU for real-time reporting. Includes Data Logging and an Alert System. Ensures safety compliance, cost efficiency, and improved road safety.",
    technologies: ["Load Cell Detection", "Relay Control", "NodeMCU", "Real-time Reporting"],
    video: video2
  },
  {
    title: "Temperature Controlled Fan System",
    image: hardwareproject1,
    description:
      "Developed a system integrating DS18B20 temperature sensor, microcontroller, and PWM technology. Adjusts fan speed based on real-time temperature readings. Components integrated onto a single PCB for compact design and easy installation.",
    technologies: ["DS18B20 Temperature Sensor", "Pulse Width Modulation", "Printed Circuit Board"],
    video: video1
  },
];

export const PATENTS = [
  {
    applicationno: "Application No-202411041958",
    name: "Omni-Mate Wheel Chair",
    year: "2024",
    description: `Developed an innovative wheelchair with mecanum wheels for omnidirectional movement. Features include a 3-way joystick, PS2 remote, HTML phone IP interface, and voice assistance for medication management. Prioritizes user comfort, convenience, and safety while maintaining cost efficiency.`,
    technologies: ["Mecanum Wheels", "Arduino Mega", "C++", "HTML", "Voice Assistance"],
    pdf: patent5
  },
  {
    applicationno: "Application No-202311063488",
    name: "Parking System",
    year: "2023",
    description: `Developed a comprehensive parking system with user and manager interfaces. Features include advance booking, IR sensors for slot detection, NodeMCU for real-time data transmission, automated slot allocation, and secure payment integration. Provides real-time updates and navigation assistance.`,
    technologies: ["IR Sensors", "NodeMCU", "Real-time Data Transmission", "Cloud Integration"],
    pdf: patent4
  },
  {
    applicationno: "Application No-202311063214",
    name: "Robotic Personal Assistance System",
    year: "2023",
    description: `Developed an AI-powered robot for autonomous task execution. Incorporates WiFi for remote control, voice recognition for user interaction, and Raspberry Pi for processing. Features voice activation for commands. Innovation secured with a patent.`,
    technologies: ["Robot Control", "Raspberry Pi", "Voice Recognition", "Voice Activation"],
    pdf: patent3
  },
  {
    applicationno: "Application No-202311064317",
    name: "Truck Overloading Detection System",
    year: "2023",
    description: `Developed a system with Load Cell Detection to measure truck loads, Relay Control to prevent overloaded trucks from moving, and NodeMCU for real-time reporting. Includes Data Logging and an Alert System. Ensures safety compliance, cost efficiency, and improved road safety.`,
    technologies: ["Load Cell Detection", "Relay Control", "NodeMCU", "Real-time Reporting"],
    pdf: patent2
  },
  {
    applicationno: "Application No-202311063490",
    name: "Temperature Controlled Fan System",
    year: "2023",
    description: `Developed a system integrating DS18B20 temperature sensor, microcontroller, and PWM technology. Adjusts fan speed based on real-time temperature readings. Components integrated onto a single PCB for compact design and easy installation.`,
    technologies: ["DS18B20 Temperature Sensor", "Pulse Width Modulation", "Printed Circuit Board"],
    pdf: patent1
  },
];

export const CONTACT = {
  address: "Panipat, Haryana ",
  phoneNo: "+918570834889 ",
  email: "anshumaanvats100@gmail.com",
};
