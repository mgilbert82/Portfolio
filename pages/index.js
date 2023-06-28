import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Presentation from '../components/Presentation/Presentation';
import Title from '../components/Title/Title';
import Skills from '../components/Skills/Skills';
import Footer from '../components/Footer/Footer';
import { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from '@react-spring/web';

export default function Home() {
  const [toggleTxt, setToggleTxt] = useState(false);

  const animation = useSpring({
    opacity: toggleTxt ? 1 : 0,
    transform: toggleTxt ? 'translateX(0)' : 'translateX(-30%)',
  });
  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <title>Treblig | Welcome </title>
      </Head>
      <div className={styles.container}>
        {/* Header */}
        <Title />

        {/* Presentation */}
        <Presentation />
        {/* Skills */}
        <Waypoint
          bottomOffset='50%'
          onEnter={() => {
            if (!toggleTxt) {
              setToggleTxt(true);
            }
          }}
        />
        <animated.div style={animation}>
          <Skills />
        </animated.div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
