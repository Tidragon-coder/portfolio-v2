import React from 'react';
import useScrollAppear from '../../hooks/useScrollAppear';

type TimelineItemProps = {
  title: string;
  organization?: string;
  date?: string;
  description?: string;
  missions?: string[];
  current?: boolean;
};

const TimelineItem = ({ title, organization, date, description, missions, current }: TimelineItemProps) => {
  const itemRef = useScrollAppear<HTMLLIElement>();

  return (
    <li ref={itemRef} className="relative pl-8 appear">
      {/* Pastille posée sur la ligne de la timeline */}
      <span
        className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-highlight ${
          current ? 'bg-highlight shadow-[0_0_12px_rgba(156,195,220,0.8)]' : 'bg-primary'
        }`}
      />

      {date && <p className="text-xs uppercase tracking-widest text-highlight">{date}</p>}
      <h3 className="mt-1 text-lg font-semibold text-white">{title}</h3>
      {organization && <p className="text-white/60">{organization}</p>}
      {description && <p className="mt-3 text-sm leading-relaxed text-white/75">{description}</p>}
      {missions && (
        <ul className="mt-3 space-y-2">
          {missions.map((item, i) => (
            <li key={i} className="relative pl-4 text-sm leading-relaxed text-white/75 before:content-['▹'] before:absolute before:left-0 before:text-highlight">
              {item}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};


export default TimelineItem;
