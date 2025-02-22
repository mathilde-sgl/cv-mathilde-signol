import React from 'react';
import '../app/globals.css';
import TopBar from '../components/topBar';
import { useRouter } from 'next/router';
import ProjectCard from '../components/project-card';
import BottomBar from '../components/bottomBar';
import Head from 'next/head';

export default function Experiences() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
        <title> Expériences - Mathilde Signol </title>
      </Head>
      
      {/* TOP BAR */}
      <TopBar />

      {/* MAIN CONTENT */}
      <div className="custom-container pt-[var(--spacing-2xl)] space-y-[var(--spacing-3xl)]">
        
        {/* TITLE */}
        <section id="title"><h1 className="h1">Mes expériences</h1></section>

        {/* LIST */}
        <section className="w-full max-w-[1200px] space-y-[var(--spacing-3xl)] pb-[var(--spacing-4xl)]">

          {/* Projet MESR */}
          <ProjectCard
            title='Cofolio'
            id = "mesr"
            href = "/experiences/cofolio"
            image = "/images/project-cofolio.png"
            typeText = 'Saas ・ B2C'
            badges = {[{text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}]}>
          </ProjectCard>

          {/* Projet Acteur Bancaire */}
          <ProjectCard
            title='Marketplace'
            id = "marketplace"
            href = "/experiences/marketplace"
            image = "/images/project-marketplace.png"
            typeText = 'Saas ・ B2E'
            badges = {[{text: "Lead"}, {text: "Branding"}, {text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}, {text: "Product Management"},]}>
          </ProjectCard>

          {/* Projet CPF */}
          <ProjectCard
            title='Mon Compte Formation'
            id = "cpf"
            href = "/experiences/moncompteformation"
            image = "/images/project-cpf.png"
            typeText = 'Site web ・ App ・ B2C'
            badges = {[{text: "Branding"}, {text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}, {text: "Product Management"},]}>
          </ProjectCard>

          {/* Projet Welcome Studio */}
          <ProjectCard
            title='Welcome Studio'
            id = "welcome-studio"
            href = "/experiences/welcomestudio"
            image = "/images/project-welcomestudio.png"
            typeText = 'Prototype Figma'
            badges = {[{text: "UX Design"}, {text: "UI Design"}, {text: "Graphisme"}]}>
          </ProjectCard>

          {/* Projet CERTIF */}
          <ProjectCard
            title='Certificateurs'
            id = "certificateurs"
            href = "/experiences/certificateurs"
            image = "/images/project-certificateurs.png"
            typeText = 'SaaS ・ B2B'
            badges = {[{text: "Branding"}, {text: "UX Design"}, {text: "UI Design"}]}>
          </ProjectCard>

          {/* Projet Soltea */}
          {/* <ProjectCard
            title='Soltéa'
            id = "soltea"
            image = "/images/project-soltea.png"
            typeText = 'SaaS ・ B2B'
            badges = {[{text: "Branding"}, {text: "UX Design"}]}>
          </ProjectCard> */}

          {/* Projet Imagine */}
          <ProjectCard
            title='Imagine'
            id = "imagine"
            href = "/experiences/imagine"
            image = "/images/project-imagine.png"
            typeText = 'Agence de Design'
            badges = {[{text: "Lead"}, {text: "Branding"}, {text: "Graphisme"}]}>
          </ProjectCard>

        </section>
        
      </div>
      <BottomBar></BottomBar>
    </div>
  );
}
