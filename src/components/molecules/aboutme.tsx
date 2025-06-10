// src/components/ui/molecules/AboutMe.tsx
import { useState } from 'react';
import rocketImg from '../../assets/img/rocket.png';
import Button from '../atoms/Button';
import useScrollAppear from '../../hooks/useScrollAppear';

const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);
  const sectionRef = useScrollAppear();
  const imgRef = useScrollAppear();
  const textRef = useScrollAppear();

  return (
<section ref={sectionRef} id="aproposdemoi" className="py-12 px-6 appear">
  <div className="max-w-5xl mx-16">
    <h2 className="text-4xl text-accent font-bold mb-20 ml-[50px] ">À propos de moi</h2>
    
    <div className="flex flex-col md:flex-row items-start gap-[30px]">
      
      <div ref={imgRef} className="md:w-1/3 flex justify-center appear">
        <img
          src={rocketImg}
          alt="Fusée"
          className="w-32 md:w-40 animate-floatingX"
        />
      </div>

      <div ref={textRef} className="md:w-2/3 text-accent text-xl space-y-4 ml-[60px] appear">
        <p>
          “J’ai <span className="text-secondary">20 ans</span> et je suis passionné par l’<span className="text-secondary">espace</span>,
          la <span className="text-secondary">science</span> et les <span className="text-secondary">nouvelles technologies</span>.”
        </p>
        <p>
          Curieux et toujours à la recherche de <span className="text-secondary">nouvelles découvertes</span>, j’aime comprendre
          le fonctionnement des choses, que ce soit à travers l’<span className="text-secondary">astronomie</span>, la <span className="text-secondary">physique</span> ou le <span className="text-secondary">développement informatique</span>.
        </p>
        {showMore && (
          <p>
            Développeur web, j’apprécie particulièrement la <span className="text-secondary">création de systèmes</span>. J’aime
            concevoir des interfaces et travailler avec des <span className="text-secondary">bases de données</span> pour donner vie
            à des projets interactifs, que ce soit lors de mes stages passés ou à travers mon apprentissage en <span className="text-secondary">autodidacte</span>.”
          </p>
        )}
        <Button size='xs' onClick={() => setShowMore(!showMore)} className=' text-[12px] px-4 py-2'>
          {showMore ? 'Voir moins' : 'Voir plus'}
        </Button>
      </div>

    </div>

    <div className="mt-12 flex justify-center">
      <a href="assets/images/pdf/Theo_Spetebroot_CV.pdf" target="_blank" rel="noopener noreferrer">
        <Button>
          Mon CV en PDF
        </Button>
      </a>
    </div>
    
  </div>
</section>

  );
};

export default AboutMe;
