import React from 'react';

interface NesLogoProps {
  size?: number;
  className?: string;
}

export const NesLogo: React.FC<NesLogoProps> = ({ size = 4, className = '' }) => {
  const logoColors = ['#3e3634', '#c3c3c3', '#787973', '#bf1710'];
  
  const logo = [
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 2, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 2, 1, 1, 3, 3, 3, 1, 4, 1, 4, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  ];

  const width = logo[0].length;
  const height = logo.length;

  const getColor = (value: number): string => {
    if (value === 0) return 'transparent';
    return logoColors[value - 1];
  };

  return (
    <div
      className={`nes-logo ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        width: size * width,
        height: size * height,
        backgroundColor: 'bg-secondary-background',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -size,
          left: -size,
          display: 'grid',
          gridTemplateColumns: `repeat(${width}, ${size}px)`,
          gridTemplateRows: `repeat(${height}, ${size}px)`,
          gap: 0,
        }}
      >
        {logo.map((row, rowIndex) =>
          row.map((pixel, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                width: size,
                height: size,
                backgroundColor: getColor(pixel),
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NesLogo;