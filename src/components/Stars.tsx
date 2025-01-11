import { FC } from 'react';
import StarIcon from '@/assets/icons/star.svg';
import SparlkeIcon from '@/assets/icons/sparkle.svg';

interface StarProps {
  orbit: number;
  position: number;
  size: number;
}

export const Star: FC<StarProps> = ({ orbit, position, size }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div style={{ width: `${orbit}px`, height: `${orbit}px`, transform: `rotate(${position}deg)` }}>
        <div className="inline-flex">
          <StarIcon
            className="text-emerald-300"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: `rotate(${position * -1}deg)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const Sparkle: FC<StarProps> = ({ orbit, position, size }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div style={{ width: `${orbit}px`, height: `${orbit}px`, transform: `rotate(${position}deg)` }}>
        <div className="inline-flex">
          <SparlkeIcon
            className="text-emerald-300 opacity-20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: `rotate(${position * -1}deg)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};
