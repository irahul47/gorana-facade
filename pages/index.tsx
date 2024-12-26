import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutSection from "@/views/landing-page/AboutSection";
import ContactSection from "@/views/landing-page/ContactSection";
import HeroSection from "@/views/landing-page/HeroSection";
import KeyFiguresSection from "@/views/landing-page/KeyFiguresSection";
import OurClientsSection from "@/views/landing-page/OurClientsSection";
import ProductsSection from "@/views/landing-page/ProductsSection";
import ProjectsSection from "@/views/landing-page/ProjectsSection";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Facade Solution Company in Surat & India | Gorana Facade Solutions
        </title>
      </Head>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ProjectsSection />
        <KeyFiguresSection />
        <OurClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
