import React, { useState, useEffect } from 'react';
import './App.css';
import { usePrivy } from '@privy-io/react-auth';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { login, authenticated } = usePrivy();

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section
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
        <nav className={`transition-all duration-300 rounded-4xl z-1 w-150 h-15 flex flex-col justify-center items-center fixed left-83 top-10 p-2 ${
          isScrolled 
            ? 'backdrop-blur-md bg-gray-800/30 border border-gray-700/50 shadow-lg' 
            : 'bg-gradient-to-tr from-gray-700 to-gray-500'
        }`}>
          <div className='flex flex-row justify-center items-center w-100'>
            <ul className='inline-flex space-x-15'>
              <li className={`text-white hover:text-gray-300 cursor-pointer text-xl ${activeSection === 'home' ? 'text-blue-400' : ''}`}>
                <a href="#home">Home</a>
              </li>
              <li className={`text-white hover:text-gray-300 ease-in-out cursor-pointer text-xl ${activeSection === 'games' ? 'text-blue-400' : ''}`}>
                <a href="#games">Games</a>
              </li>
              <li className={`text-white hover:text-gray-300 ease-in-out cursor-pointer text-xl ${activeSection === 'about' ? 'text-blue-400' : ''}`}>
                <a href="#about">About</a>
              </li>
              <li className={`text-white hover:text-gray-300 ease-in-out cursor-pointer text-xl ${activeSection === 'faqs' ? 'text-blue-400' : ''}`}>
                <a href="#faqs">FAQs</a>
              </li>
            </ul>
          </div>
        </nav>
        <div 
          onClick={login}
          className='neon-button text-black bg-yellow-400 w-40 h-10 text-2xl font-bold rounded-xl relative left-250 top-6 hover:bg-yellow-500 transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(234,179,8,0.5)] hover:shadow-[0_0_25px_rgba(234,179,8,0.8)] hover:shadow-[0_0_30px_rgba(234,179,8,0.8)] flex items-center justify-center'
        >
          {authenticated ? 'Connected' : 'Connect'}
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="pt-32">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center -mt-40">
            <div className="flex gap-8 mb-12 fade-in">
              <button className="neon-button bg-blue-500/20 text-blue-400 w-40 h-12 text-xl font-bold rounded-xl hover:bg-blue-500/30 transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(77,201,255,0.5)] hover:shadow-[0_0_25px_rgba(77,201,255,0.8)] flex items-center justify-center border border-blue-400">
                Leaderboard
              </button>
              <a href="#faqs" className="neon-button bg-pink-500/20 text-pink-400 w-40 h-12 text-xl font-bold rounded-xl hover:bg-pink-500/30 transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(255,113,206,0.5)] hover:shadow-[0_0_25px_rgba(255,113,206,0.8)] flex items-center justify-center border border-pink-400">
                How to Use
              </a>
            </div>
            <h1 className="game-title text-7xl font-black mb-8 typing-effect">
              <span className="neon-red">CHAIN</span>{' '}
              <span className="neon-blue">YOUR</span>{' '}
              <span className="neon-pink">GAME</span>
            </h1>
            <div className="flex gap-20">
              <span className="subtitle neon-blue fade-in-delay-1">COMPETE</span>
              <span className="subtitle neon-red fade-in-delay-2">WIN</span>
              <span className="subtitle neon-pink fade-in-delay-3">EARN</span>
            </div>
          </div>
        </section>

        <section id="games" className="min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-green-400 game-title typing-effect">Our Games</h2>
            <div className="grid grid-cols-2 gap-8">
              {/* Game Card 1 */}
              <div className="game-card game-card-animate bg-black/40 p-6 rounded-xl border-2 border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.5)] hover:shadow-[0_0_30px_rgba(74,222,128,0.8)] transition-all duration-300 group">
                <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-black/50">
                  <img 
                    src="/game1.jpg" 
                    alt="Game 1" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-green-400 text-center mb-2">Game Title 1</h3>
                <p className="text-gray-300 text-center">Experience the thrill of adventure</p>
              </div>

              {/* Game Card 2 */}
              <div className="game-card game-card-animate bg-black/40 p-6 rounded-xl border-2 border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.5)] hover:shadow-[0_0_30px_rgba(74,222,128,0.8)] transition-all duration-300 group">
                <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-black/50">
                  <img 
                    src="/game2.jpg" 
                    alt="Game 2" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-green-400 text-center mb-2">Game Title 2</h3>
                <p className="text-gray-300 text-center">Master the art of strategy</p>
              </div>

              {/* Game Card 3 */}
              <div className="game-card game-card-animate bg-black/40 p-6 rounded-xl border-2 border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.5)] hover:shadow-[0_0_30px_rgba(74,222,128,0.8)] transition-all duration-300 group">
                <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-black/50">
                  <img 
                    src="/game3.jpg" 
                    alt="Game 3" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-green-400 text-center mb-2">Game Title 3</h3>
                <p className="text-gray-300 text-center">Challenge your skills</p>
              </div>

              {/* Game Card 4 */}
              <div className="game-card game-card-animate bg-black/40 p-6 rounded-xl border-2 border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.5)] hover:shadow-[0_0_30px_rgba(74,222,128,0.8)] transition-all duration-300 group">
                <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-black/50">
                  <img 
                    src="/game4.jpg" 
                    alt="Game 4" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-green-400 text-center mb-2">Game Title 4</h3>
                <p className="text-gray-300 text-center">Explore new worlds</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faqs" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-pink-400 game-title neon-pink">Frequently Asked Questions</h2>
            <div className="grid gap-8 max-w-4xl mx-auto">
              {/* FAQ Item 1 */}
              <div className="bg-black/40 p-6 rounded-xl border border-pink-400 hover:shadow-[0_0_15px_rgba(255,113,206,0.5)] transition-all duration-300">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">What is NeonNode Gaming?</h3>
                <p className="text-gray-300">NeonNode is a revolutionary gaming platform that combines traditional gaming with blockchain technology. We offer competitive gaming experiences where players can compete, win, and earn rewards in a secure and transparent environment.</p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-black/40 p-6 rounded-xl border border-pink-400 hover:shadow-[0_0_15px_rgba(255,113,206,0.5)] transition-all duration-300">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">How do I start playing?</h3>
                <p className="text-gray-300">Getting started is easy:</p>
                <ol className="list-decimal list-inside text-gray-300 mt-2 space-y-2">
                  <li>Click the "Connect" button to connect your wallet</li>
                  <li>Choose your favorite game from our selection</li>
                  <li>Start playing and competing with other players</li>
                  <li>Earn rewards based on your performance</li>
                </ol>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-black/40 p-6 rounded-xl border border-pink-400 hover:shadow-[0_0_15px_rgba(255,113,206,0.5)] transition-all duration-300">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">What types of rewards can I earn?</h3>
                <p className="text-gray-300">Players can earn various rewards including:</p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                  <li>Cryptocurrency tokens</li>
                  <li>Exclusive NFTs</li>
                  <li>Special in-game items</li>
                  <li>Tournament prizes</li>
                </ul>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-black/40 p-6 rounded-xl border border-pink-400 hover:shadow-[0_0_15px_rgba(255,113,206,0.5)] transition-all duration-300">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Is it safe to play on NeonNode?</h3>
                <p className="text-gray-300">Yes, absolutely! We prioritize security and transparency:</p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                  <li>All transactions are secured by blockchain technology</li>
                  <li>Smart contracts are audited by leading security firms</li>
                  <li>Your wallet connection is protected by Privy authentication</li>
                  <li>24/7 support team for any concerns</li>
                </ul>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-black/40 p-6 rounded-xl border border-pink-400 hover:shadow-[0_0_15px_rgba(255,113,206,0.5)] transition-all duration-300">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">How do tournaments work?</h3>
                <p className="text-gray-300">Tournaments are competitive events where players can showcase their skills and win prizes:</p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                  <li>Regular tournaments with varying prize pools</li>
                  <li>Different skill levels and game modes</li>
                  <li>Real-time leaderboards</li>
                  <li>Instant prize distribution after tournament completion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center">About Us</h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
