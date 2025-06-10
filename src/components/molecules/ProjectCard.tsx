import React from 'react';
import Button from '../atoms/Button'; 
import useScrollAppear from '../../hooks/useScrollAppear';

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
};

const ProjectCard = ({ title, description, imageSrc, link }: ProjectCardProps) => {
  const cardRef = useScrollAppear();
  
  return (
        <div ref={cardRef} className="flex flex-col justify-between items-center bg-[#0B083F] rounded-xl p-5 w-[280px] h-[500px] shadow-lg transition-transform duration-300 hover:-translate-y-1 appear">
        <img
            src={imageSrc}
            alt={`Logo ${title}`}
            className="w-4/5 h-[180px] rounded-md self-center object-contain"
        />
        <h3 className="mt-3 text-secondary text-xl font-semibold text-center">{title}</h3>
        <p className="text-[#F0FBF7] text-base mt-2 text-center ">{description}</p>
        <div className="mt-auto pt-4">
            <a href={link}>
            <Button size="sm">Voir plus</Button>
            </a>
        </div>
        </div>
  );
};

export default ProjectCard;
