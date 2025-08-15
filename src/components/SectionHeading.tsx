import React from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface SectionHeadingProps {
  level: HeadingLevel;
  children: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  level, 
  children, 
  className = '' 
}) => {
  const baseClasses = 'font-normal mb-4 text-gray-900';
  const levelClasses: Record<HeadingLevel, string> = {
    1: 'text-6xl mb-8',
    2: 'text-3xl',
    3: 'text-lg',
    4: 'text-base',
    5: 'text-sm',
    6: 'text-xs'
  };
  
  const combinedClasses = `${baseClasses} ${levelClasses[level]} ${className}`.trim();
  
  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  return <Component className={combinedClasses}>{children}</Component>;
};

export default SectionHeading;