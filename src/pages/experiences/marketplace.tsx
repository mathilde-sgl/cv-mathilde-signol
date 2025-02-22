import React from 'react';
import TopBar from '@/components/topBar';
import { useRouter } from 'next/router';
import Badges from '@/components/badge';
import ButtonsList from '@/components/buttons-list';
import BottomBar from '@/components/bottomBar';
import Head from 'next/head';

const sectionProps = "w-full space-y-[var(--spacing-ml)] pb-[var(--spacing-xl)] sm:pb-[var(--spacing-2xl)]"

export default function ExperienceActeurBancaire() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
        <title> Marketplace - Mathilde Signol </title>
      </Head>

      {/* TOP BAR */}
      <TopBar />

      {/* MAIN CONTENT */}
      <div className="custom-container pt-[var(--spacing-2xl)]">
        
        {/* TITLE */}
        <section id="title" className='pb-[var(--spacing-xl)]'>
            <h1 className="h1">Marketplace</h1>
        </section>

        {/* INTRODUCTION */}
        <section id="introduction" className={sectionProps}>
            <div className='flex flex-row items-center gap-[var(--spacing-l)]'>
              <p className='text2'>Saas ・ B2E</p>
              <div style={{width: "var(--dimension-3xs)", height: "var(--dimension-sm)", borderRadius: "var(--radius-2xs)", backgroundColor: "var(--color-divider)",}}/>
              <span className='text2'>2022-2023</span>
            </div>
            <Badges badges = {[{text: "Lead"}, {text: "Branding"}, {text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}, {text: "Product Management"},]}></Badges>
            <p className='text1 max-w-[720px] pb-[var(--spacing-sm)]'>
                Refonte UX & UI de la Marketplace, plateforme e-commerce des produits utilisés dans le cadre de leur travail les collaborateurs de cet acteur bancaire. <br />
            </p>
            <img src="/images/marketplace-intro.png" alt="maquettes montrant l'interface graphique"></img>
        </section>

        {/* PRÉSENTATION */}
        <section id="presentation" className={sectionProps}>
            <h2 className='h3 !text-[var(--color-symbol-primary)]'>Contexte</h2>
            <p className='text1 max-w-[720px] pb-[var(--spacing-sm)]'>
            Initialement créée pour des profils IT, l'équipe Marketplace a pour ambition de gérer 
            LA plateforme qui sera le compagnon quotidien des collaborateurs.
            </p>
            <h2 className='h3 !text-[var(--color-symbol-primary)]'>Enjeux</h2>
            <p className='text1 max-w-[720px] pb-[var(--spacing-sm)] flex flex-col gap-[var(--spacing-xs)]'>
              <span> → Définir une identité forte pour appuyer son rayonnement interne. </span>
              <span> → Refondre l'UX & l'UI afin d'inclure la diversité des collaborateurs 
              et de proposer des produits variés et complexes. </span>
              <span> → Organiser l'équipe en mettant en place un Design System. </span>
            </p>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className={sectionProps}>
            <h2 className='h2'>Timeline Projet</h2>
            <img src="/images/marketplace-timeline.png" alt="timeline du projet, de Novembre à Juin"></img>
        </section>

        {/* LOGOS */}
        <section id="logos" className={sectionProps}>
            <h2 className='h2'>Logos</h2>
            <img src="/images/marketplace-graphic-design.png" alt="déclinaisons des logos Marketplace"></img>
        </section>

        {/* DESIGN SYSTEM */}
        {/*<section id="design-system" className={sectionProps}>
            <h2 className='h2'>Design System</h2>
            <img src="/images/mesr-design-system.png" alt="design System de Cofolio"></img>
        </section>*/}

        {/* MAQUETTES */}
        <section id="maquettes" className={sectionProps}>
            <h2 className='h2'>Maquettes</h2>
            <img src="/images/marketplace-maquettes1.png" alt="maquettes de la page d'accueil, light mode & dark mode" className='pb-[var(--spacing-xl)]'></img>
            <img src="/images/marketplace-maquettes2.png" alt="maquettes affichant la liste des produits d'un Product Owner" className='pb-[var(--spacing-xl)]'></img>
            <img src="/images/marketplace-maquettes3.png" alt="maquettes affichant le cockpit d'un produit"></img>
        </section>

        <div id="main-actions" className='flex flex-col-reverse gap-[var(--spacing-ml)] sm:flex-row justify-between pt-[var(--spacing-xl)] pb-[var(--spacing-4xl)]'>
            <ButtonsList
              size="large"
              tertiaryAction={{text: "Projet précédent", onClick: () => router.push('/experiences/cofolio'), leadingIcon: "arrow-back",}}             
            /> 
            <ButtonsList
              size="large"
              secondaryAction={{text: "Projet suivant", onClick: () => router.push('/experiences/moncompteformation'), leadingIcon: "arrow-next",}}             
            />        
        </div>
      </div>
      <BottomBar></BottomBar>
    </div>
  );
}
