import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Container(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
