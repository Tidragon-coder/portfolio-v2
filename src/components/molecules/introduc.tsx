// src/components/ui/molecules/Introduct.tsx
import Button from '../atoms/Button';
import profileImage from '../../assets/img/img_Theo2.jpg';

const Introduct = () => {
  return (
    <section id="accueil" className="min-h-[90vh] flex items-center justify-center px-6 pt-0 mt-8">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl w-full">
        <div className="flex-1 text-left space-y-10 mt-10">
          <h1 className="text-4xl md:text-5xl font-bold">Salut,</h1>
            <h1 className="text-4xl md:text-5xl font-bold">
            Je m'appelle <span className="text-secondary">Théo Spetebroot</span>
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold">
            Je suis <span className="text-secondary">Développeur Web</span>
            <span className="inline-block ml-5 w-9 h-1.5 bg-white animate-pulse ml-1" />
            </h1>


          <div className="flex justify-start mt-6">
            <a href="#contact">
              <Button className='mt-4'>Me Contacter</Button>
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src={profileImage}
            alt="Théo Spetebroot"
            className="w-2/3 max-w-xs rounded-full animate-floating"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduct;
