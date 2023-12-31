import { useState } from "react";
import Header from "../Componants/Header/Header";
import SignBoard from "../Componants/SignBoard/SignBoard";
import Contact from "../Componants/Contact/Contact";
import Footer from "../Componants/Footer/Footer";
function ContactsPage() {
  return (
    <>
        <Header />
        <SignBoard headLine={'Contact'}/>
        <Contact/>
        <Footer/>
    </>
  );
}

export default ContactsPage;