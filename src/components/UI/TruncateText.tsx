import React, { ReactNode } from 'react';

interface ITruncate {
  children: ReactNode;
  maxLength?: number;
}

const TruncateText: React.FC<ITruncate> = ({ children, maxLength = 100 }) => {
  const truncate = (text: any) => {
    return text.length <= maxLength
      ? text
      : text.slice(0, maxLength) + '...';
  };

  return <span>{truncate(children)}</span>;
};

export default TruncateText;
