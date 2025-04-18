import React, { useState, useEffect } from 'react';
import './App.css';
import { usePrivy } from '@privy-io/react-auth';
import { motion } from 'framer-motion';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { login, authenticated } = usePrivy();

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const faqs = [
    {
      question: "What is NeonNode?",
      answer: "NeonNode is a Web3 gaming platform built on the Monad Testnet, offering a unique gaming experience with blockchain integration."
    },
    {
      question: "How do I get started?",
      answer: "Simply connect your wallet using the Connect button in the top right corner and start exploring our games."
    },
    {
      question: "What games are available?",
      answer: "We offer a variety of games, each with unique mechanics and rewards. Check out our Games section to see what's available."
    },
    {
      question: "How do I earn rewards?",
      answer: "Players can earn rewards through gameplay achievements, competitions, and special events. Rewards are distributed as tokens or NFTs."
    }
  ];

  const aboutContent = [
    "We're a group of four passionate college students on a mission to revolutionize the gaming space through blockchain technology. 🚀",
    "Our journey began with a shared love for gaming, tech, and innovation—and it led us to create a fully Web3-integrated blockchain gaming platform. Built on the Monad Testnet, our project explores the future of decentralized gaming where players truly own their assets and experiences.",
    "Whether it's NFTs, Play-to-Earn mechanics, or smart contracts, we're all about pushing boundaries and experimenting with what's next in the gaming world. Our site isn't just a project—it's a glimpse into the future of gaming, designed and developed entirely by students who believe in the power of Web3.",
    "Thanks for checking us out. Join us on this journey as we continue building, learning, and leveling up. 🎮🌐"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sections = ['home', 'games', 'faqs', 'about'];
      const currentPosition = scrollPosition + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <div className="fixed top-0 left-0 w-full h-24 bg-gradient-to-b from-black/80 to-transparent z-0"></div>
        <nav 
          className={`rounded-[2rem] z-1 w-[40rem] h-16 flex flex-col justify-center items-center fixed left-1/2 transform -translate-x-1/2 top-10 p-3 ${
            isScrolled 
              ? 'backdrop-blur-md bg-gray-800/30 border border-gray-700/50 shadow-lg' 
              : 'bg-gradient-to-tr from-gray-700 to-gray-500'
          }`}
        >
          <div className='flex flex-row justify-center items-center w-full'>
            <ul className='inline-flex space-x-20'>
              {['home', 'games', 'about', 'faqs'].map((section) => (
                <li
                  key={section}
                  className={`text-white hover:text-gray-300 cursor-pointer text-2xl ${activeSection === section ? 'text-blue-400' : ''}`}
                >
                  <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div 
          onClick={login}
          className='neon-button text-black bg-yellow-400 w-40 h-10 text-2xl font-bold rounded-xl absolute right-10 top-10 hover:bg-yellow-500 cursor-pointer shadow-[0_0_15px_rgba(234,179,8,0.5)] hover:shadow-[0_0_25px_rgba(234,179,8,0.8)] hover:shadow-[0_0_30px_rgba(234,179,8,0.8)] flex items-center justify-center'
        >
          {authenticated ? 'Connected' : 'Connect'}
        </div>
      </header>

      <main className="pt-32">
        <section id="home" className="min-h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center -mt-40">
            <div className="flex gap-8 mb-12">
              <button 
                className="neon-button bg-blue-500/20 text-blue-400 w-40 h-12 text-xl font-bold rounded-xl hover:bg-blue-500/30 cursor-pointer shadow-[0_0_15px_rgba(77,201,255,0.5)] hover:shadow-[0_0_25px_rgba(77,201,255,0.8)] flex items-center justify-center border border-blue-400"
              >
                Leaderboard
              </button>
              <a 
                href="#faqs" 
                className="neon-button bg-pink-500/20 text-pink-400 w-40 h-12 text-xl font-bold rounded-xl hover:bg-pink-500/30 cursor-pointer shadow-[0_0_15px_rgba(255,113,206,0.5)] hover:shadow-[0_0_25px_rgba(255,113,206,0.8)] flex items-center justify-center border border-pink-400"
              >
                How to Use
              </a>
            </div>
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-7xl font-black mb-8"
            >
              <motion.span 
                variants={fadeIn}
                className="neon-red"
              >CHAIN</motion.span>{' '}
              <motion.span 
                variants={fadeIn}
                className="neon-blue"
              >YOUR</motion.span>{' '}
              <motion.span 
                variants={fadeIn}
                className="neon-pink"
              >GAME</motion.span>
            </motion.h1>
            <div className="flex gap-20">
              <span className="subtitle neon-blue">COMPETE</span>
              <span className="subtitle neon-red">WIN</span>
              <span className="subtitle neon-pink">EARN</span>
            </div>
          </div>
        </section>

        <section id="games" className="min-h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-16 text-green-400"
            >Our Games</motion.h2>
            <div className="grid grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((game) => (
                <div
                  key={game}
                  className="bg-black/40 p-6 rounded-xl border-2 border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.5)] hover:shadow-[0_0_30px_rgba(74,222,128,0.8)] group"
                >
                  <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-black/50">
                    <img 
                      src={`/game${game}.jpg`} 
                      alt={`Game ${game}`} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 text-center mb-2">Game Title {game}</h3>
                  <p className="text-gray-300 text-center">Experience the thrill of adventure</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faqs" className="min-h-screen flex items-center justify-center py-20 relative">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-16 text-pink-400"
            >Frequently Asked Questions</motion.h2>
            <div className="grid gap-8 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-black/40 p-6 rounded-xl border border-pink-400 hover:shadow-[0_0_15px_rgba(255,113,206,0.5)]"
                >
                  <h3 className="text-2xl font-bold text-pink-400 mb-4">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 bg-[url('/icons/gamepad.svg')] bg-contain bg-no-repeat"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-[url('/icons/controller.svg')] bg-contain bg-no-repeat"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[url('/icons/joystick.svg')] bg-contain bg-no-repeat"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-black/40 p-8 rounded-2xl border-2 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]">
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-4xl font-bold text-center mb-8 text-blue-400"
              >About Us</motion.h2>
              <div className="space-y-6 text-gray-300">
                {aboutContent.map((paragraph, index) => (
                  <p key={index} className="text-xl">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
