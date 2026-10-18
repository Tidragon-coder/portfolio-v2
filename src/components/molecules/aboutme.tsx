// src/components/ui/molecules/AboutMe.tsx
import rocketImg from '../../assets/img/rocket.png';
import { buttonClasses } from '../atoms/Button';
import SectionTitle from '../atoms/SectionTitle';
import useScrollAppear from '../../hooks/useScrollAppear';

import CV_Theo from '../../assets/pdf/Theo_Spetebroot_CV.pdf';

const facts = [
  { label: 'Poste', value: 'Développeur Full-Stack en alternance chez Yuccan' },
  { label: 'Formation', value: 'MBA Développeur Full Stack, MyDigital School Paris' },
  { label: 'Localisation', value: 'Seine-et-Marne (77)' },
  { label: 'Langues', value: 'Français natif · Anglais B1' },
];

const interests = ['Intelligence artificielle & LLM', 'Nouvelles technologies', 'Astronomie', 'Aviation'];

const AboutMe = () => {
  const sectionRef = useScrollAppear();

  return (
    <section ref={sectionRef} id="aproposdemoi" className="scroll-mt-24 py-20 px-6 appear">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="À propos" />

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-white/80">
            <p>
              Je suis <span className="text-highlight">développeur full-stack</span> en alternance chez <span className="text-highlight">Yuccan</span>,
              où je gère les tickets de bout en bout, du <span className="text-highlight">COPIL</span> à la <span className="text-highlight">livraison</span>,
              avec une attention particulière aux <span className="text-highlight">tests</span> et à la <span className="text-highlight">revue de code</span>.
            </p>
            <p>
              Ma stack principale est <span className="text-highlight">Python / Django</span>, et je suis à l’aise en <span className="text-highlight">React / TypeScript</span>.
              En parallèle, je poursuis un <span className="text-highlight">MBA Développeur Full Stack</span> à MyDigital School Paris.
            </p>
            <p>
              Passionné par l’<span className="text-highlight">intelligence artificielle</span>, je fais tourner des <span className="text-highlight">LLM open source</span> en
              local et vise une <span className="text-highlight">certification IA</span>.
            </p>

            <ul className="flex flex-wrap gap-3 pt-2">
              {interests.map((interest) => (
                <li key={interest} className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80">
                  {interest}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 relative rounded-2xl border border-white/10 bg-surface/80 backdrop-blur p-8">
            <img
              src={rocketImg}
              alt=""
              className="absolute -top-10 -right-4 w-20 animate-floatingX"
            />
            <dl className="space-y-5">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs uppercase tracking-widest text-highlight">{fact.label}</dt>
                  <dd className="mt-1 text-white">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <a
              href={CV_Theo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonClasses('primary')} w-full mt-8`}
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
