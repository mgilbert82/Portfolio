import styles from "../styles/Home.module.css";
import Head from "next/head";
import Presentation from "../components/Presentation/Presentation";
import Title from "../components/Title/Title";
import Skills from "../components/Skills/Skills";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Treblig | Welcome </title>
      </Head>
      <div className={styles.container}>
        {/* Header */}
        <Title />
        {/* Presentation */}
        <Presentation />
        {/* Skills */}
        <Skills />
        {/* Contact Form */}
        <Form />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
