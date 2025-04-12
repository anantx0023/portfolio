import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const skillsData = [
    { name: "C++", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "Python", level: 85, color: "from-yellow-500 to-yellow-300" },
    { name: "Java", level: 80, color: "from-red-500 to-orange-500" },
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-200" },
    { name: "Node.js", level: 85, color: "from-green-500 to-green-400" },
    { name: "React", level: 85, color: "from-blue-400 to-cyan-300" },
    { name: "MongoDB", level: 80, color: "from-green-600 to-green-500" },
    { name: "Express", level: 80, color: "from-gray-600 to-gray-500" },
  ];

  return (
    <div id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Bio Section */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Well versed in C++, Python, Java and JavaScript, with strong skills in backend development 
                technologies including Nodejs, Express, MongoDB and frontend development using React JS. 
                Enthusiast in Competitive Programming, holding a 2-star rating on CodeChef and a 5-star 
                rating on HackerRank in C++.
              </p>
              
            </div>
            
            <div className="md:col-span-2">
              <motion.div 
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-bold mb-4 text-center text-blue-400">Key Strengths</h3>
                <ul className="space-y-2">
                  {["Full Stack Development", "Competitive Programming", "Problem Solving", "Team Leadership", "Backend Architecture"].map((strength, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                    >
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {strength}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsData.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800/50 rounded-lg p-4"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;