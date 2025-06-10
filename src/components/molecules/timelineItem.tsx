import React from 'react';
import useScrollAppear from '../../hooks/useScrollAppear';

type TimelineItemProps = {
  title: string;
  date?: string;
  description?: string;
  missions?: string[];
};

const TimelineItem = ({ title, date, description, missions }: TimelineItemProps) => {
  const itemRef = useScrollAppear();
  
  return (
    <div ref={itemRef} className="relative bg-primary p-4 rounded-lg shadow-md ml-[-30px] appear">
    <div className="absolute w-4 h-4 bg-white opacity-70 rounded-full top-2 left-2 z-10" />

    <h3 className="text-lg font-semibold ml-2">{title}</h3>
    {date && <p className="text-sm opacity-80 ml-2">{date}</p>}
    {description && <p className="text-sm mt-2 ml-2">{description}</p>}
    {missions && (
      <ul className="list-disc ml-6 mt-2 space-y-1">
        {missions.map((item, i) => (
          <li key={i} className="text-sm">{item}</li>
        ))}
      </ul>
    )}
    </div>
  );
};


export default TimelineItem;
