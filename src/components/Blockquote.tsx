import React from 'react';

interface BlockquoteProps {
  children: React.ReactNode;
  className?: string;
}

export const Blockquote: React.FC<BlockquoteProps> = ({ 
  children, 
  className = '' 
}) => {
  const baseClasses = 'font-mono italic text-gray-700 leading-relaxed border-l-4 border-stone-400 pl-4 py-2';
  const combinedClasses = `${baseClasses} ${className}`.trim();
  
  return (
    <blockquote className={combinedClasses}>
      {children}
    </blockquote>
  );
};

export default Blockquote;