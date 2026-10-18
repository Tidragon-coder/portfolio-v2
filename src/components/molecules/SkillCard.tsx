import React from 'react';

type SkillCardProps = {
  icon: string;
  title: string;
  description: string;
};

// Étiquette compacte : icône + nom, la description s'affiche en infobulle
const SkillCard = ({ icon, title, description }: SkillCardProps) => {
  const modifiedIcon = icon.replace('<svg', '<svg width="28" height="28"');

  return (
    <li
      title={description}
      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 transition duration-300 hover:border-secondary hover:bg-secondary/15"
    >
      <span className="w-7 h-7 shrink-0" dangerouslySetInnerHTML={{ __html: modifiedIcon }} />
      <span className="text-sm font-medium text-white">{title}</span>
    </li>
  );
};


export default SkillCard;
