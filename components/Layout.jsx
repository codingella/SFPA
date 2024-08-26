import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from 'framer-motion'


const Layout = ({children}) => {

  const router = useRouter();
  const [prevPath, setPrevPath] = useState('');

  useEffect(() => {
    const handleRouteChange = (url) => {
      setPrevPath(router.pathname);
    };

    // Listen to route changes
    router.events.on('routeChangeStart', handleRouteChange);

    // Clean up the event listener when the component unmounts
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.pathname, router.events]);

  const showIntro = prevPath !== '/impressum';

  const variants = {
    hidden: { 
      opacity: 0, 
      x: router.pathname === '/impressum' ? 100 : -100, // If on "/impressum", slide in from left, otherwise slide in from right
      y: 0 
    },
    enter: { 
      opacity: 1, 
      x: 0, 
      y: 0 
    },
    exit: { 
      opacity: 0, 
      x: router.pathname === '/impressum' ? 100 : -100, // If on "/impressum", slide out to right, otherwise slide out to left
      y: 0 
    },
  };
  
    return (
        <>
          {/*showHeader && 
            <Menu/>
          */}
            <main>
             <AnimatePresence
                mode="wait"
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
              >
                <motion.div
                  variants={variants} // Pass the variant object into Framer Motion 

                  initial="hidden" // Set the initial state to variants.hidden
                  animate="enter" // Animated state to variants.enter
                  exit="exit" // Exit state (used later) to variants.exit

                  transition={{ type: 'ease', duration: 0.4, delay: 0}} // Set the transition to linear
                  key={router.asPath}
                >
                  {React.cloneElement(children, { showIntro })}
                </motion.div>
              </AnimatePresence>
            </main>       
        </>
    );
  };
  
  export default Layout;