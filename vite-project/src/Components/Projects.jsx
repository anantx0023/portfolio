
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Map from "../assets/map2.webp";
import Hostel from "../assets/hostel.jpg";
import Hospital from "../assets/hospital.webp";

const Projects = () => {
  // Animation controls for scroll-triggered animations
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Project data array - easy to add new projects in the future
  const [projects] = useState([
    {
      id: 1,
      title: "REAL-TIME TRACKING SYSTEM",
      technologies: "JavaScript & Socket.io",
      description: "A JavaScript-based project that tracks and displays your real-time location using WebSockets. It fetches GPS coordinates continuously and updates them on a live map with Socket.io for seamless communication. Built with Node.js, Express, and Leaflet.js, it's ideal for location sharing, tracking, and safety applications.",
      image: Map, // Add your image path here
      github: "#", // Add your GitHub link
      demo: "#", // Add your demo link if available
    },
    {
      id: 2,
      title: "HOSTEL-ERP",
      technologies: "MERN Stack",
      description: "Hostel ERP is a MERN-based real-life project designed to efficiently manage hostel operations by storing hosteler data and handling attendance, grievances, notices, leave applications, and approvals. With a user-friendly interface, it streamlines hostel management. My college is considering it for implementation, and it will be applied soon to enhance efficiency.",
      image: Hostel, // Add your image path here
      github: "#", // Add your GitHub link
      demo: "#", // Add your demo link if available
    },
    {
      id: 3,
      title: "HOSPITAL MANAGEMENT SYSTEM",
      technologies: "MERN Stack",
      description: "Developed a web application on a client's request to automate his hospital's operations and reduce paperwork. The system streamlines tasks like generating IPD/OPD forms, managing bed availability, and handling patient records efficiently. By digitizing essential workflows, it enhances hospital management, ensuring accuracy, efficiency, and a seamless experience for both staff and patients.",
      image: Hospital, // Add your image path here
      github: "#", // Add your GitHub link
      demo: "#", // Add your demo link if available
    },
  ]);

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  // Animation variants for individual projects
  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Background elements similar to Homepage */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: 0
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1], 
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={projectVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                My Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700"
                variants={projectVariants}
                whileHover="hover"
              >
                <div className="relative">
                  <img 
                    src={project.image || "https://via.placeholder.com/400x250"} 
                    alt={project.title} 
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                   <a 
                     href={project.github} 
                     className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30"
                     target="_blank" 
                     rel="noopener noreferrer"
                    >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                      Code
                   </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{project.title}</h3>
                  <p className="text-sm font-medium text-blue-400 mb-3">{project.technologies}</p>
                  <p className="text-gray-300 text-sm line-clamp-4 mb-4">{project.description}</p>
                  
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
