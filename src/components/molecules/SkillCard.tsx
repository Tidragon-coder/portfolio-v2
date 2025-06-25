import React from 'react';
import useScrollAppear from '../../hooks/useScrollAppear';

type SkillCardProps = {
  icon: string;
  title: string;
  description: string;
  marginTop?: string;
};

const SkillCard = ({ icon, title, description, marginTop }: SkillCardProps) => {
  const cardRef = useScrollAppear();


  const modifiedIcon = icon.replace('<svg', '<svg width="120" height="120" class="w-[100px] md:w-[120px]"');

  return (
    <div
      ref={cardRef}
      className={`flex flex-col items-center bg-primary p-5 rounded-[10px] w-[140px] md:w-[180px] shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:scale-110 hover:bg-[#151078] group appear ${marginTop ?? ''}`}
    >
      <div dangerouslySetInnerHTML={{ __html: modifiedIcon }} />
      <span className="mt-2 text-lg font-bold text-light-color">{title}</span>
      <p className="text-sm text-light-color mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-center text-center">
        {description}
      </p>
    </div>
  );
};


export default SkillCard;
