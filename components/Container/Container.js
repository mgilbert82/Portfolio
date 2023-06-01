import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";

export default function Container(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
