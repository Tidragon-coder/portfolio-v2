import React from 'react';

type SkillCardProps = {
  icon: string;         
  title: string;
  description: string;
};

const SkillCard = ({ icon, title, description }: SkillCardProps) => {
  return (
    <div className="flex flex-col items-center bg-primary p-5 rounded-[10px] w-[150px] shadow-md transition-transform duration-300 ease-in-out cursor-pointer hover:scale-110 hover:bg-primary-light group">
    <div dangerouslySetInnerHTML={{ __html: icon }}  />
    <span className="mt-2 text-lg font-bold text-light-color">{title}</span>
    <p className="text-sm text-light-color mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {description}
    </p>
    </div>
  );
};

export default SkillCard;
