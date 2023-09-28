import React from 'react';

interface MenusFooterProps {
  title: string;
  items: string[];
}

function MenusFooter({ title, items }: MenusFooterProps) {
  return (
    <div className="flex flex-col items-start gap-6">
      <h3 className="text-white text-sm font-semibold font-sans">{title}</h3>
      {items.map((item, index) => (
        <div className="flex items-center gap-[10px]" key={index}>
          <p className="text-ventus-subtext text-opacity-30 font-sans hover:text-violet-50 transition text-sm font-normal">{item}</p>
        </div>
      ))}
    </div>
  );
}

export default MenusFooter;
