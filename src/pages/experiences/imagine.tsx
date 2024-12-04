import React from 'react';
import TopBar from '@/components/topBar';
import { useRouter } from 'next/router';
import Badges from '@/components/badge';
import ButtonsList from '@/components/buttons-list';
import BottomBar from '@/components/bottomBar';

const sectionProps = "w-full space-y-[var(--spacing-ml)] pb-[var(--spacing-xl)] sm:pb-[var(--spacing-2xl)]"

export default function Imagine() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      {/* TOP BAR */}
      <TopBar />

      {/* MAIN CONTENT */}
      <div className="custom-container pt-[var(--spacing-2xl)]">
        
        {/* TITLE */}
        <section id="title" className='pb-[var(--spacing-xl)]'>
            <h1 className="h1">Imagine</h1>
        </section>

        {/* INTRODUCTION */}
        <section id="introduction" className={sectionProps}>
            <Badges badges = {[{text: "Branding"}, {text: "UX Design"}, {text: "UI Design"}]}></Badges>
            <p className='text1 max-w-[720px] pb-[var(--spacing-sm)]'>
            Création de visuels à destination de l'agence de design de mc2i : Imagine.
            </p>
            <img src="/images/imagine-intro.png" alt="maquettes montrant l'interface graphique"></img>
        </section>

        {/* LOGOS */}
        <section id="logos" className={sectionProps}>
            <h2 className='h2'>Logos</h2>
            <img src="/images/imagine-logos.png" alt="maquettes de la page d'accueil, en version mobile & desktop"></img>
        </section>

        {/* VISUELS */}
        <section id="visuels" className={sectionProps}>
            <h2 className='h2'>Visuels</h2>
            <img src="/images/imagine-visuels1.png" alt="photos retravaillées lot 1" className='pb-[var(--spacing-xl)]'></img>
            <img src="/images/imagine-visuels2.png" alt="photos retravaillées lot 2"></img>
        </section>

        <div id="main-actions" className='flex flex-col-reverse gap-[var(--spacing-ml)] sm:flex-row justify-between pt-[var(--spacing-xl)] pb-[var(--spacing-4xl)]'>
            <ButtonsList
              size="large"
              tertiaryAction={{text: "Projet précédent", onClick: () => router.push('/experiences/certificateurs'), leadingIcon: "arrow-back",}}             
            /> 
            <ButtonsList
              size="large"
              secondaryAction={{text: "Projet suivant", onClick: () => router.push('/experiences/mesr'), leadingIcon: "arrow-next",}}             
            />        
        </div>
      </div>
      <BottomBar></BottomBar>
    </div>
  );
}
