import { FC } from 'react';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';

interface StarProps {
  sparkle?: boolean;
  orbit: number;
  spinSpeed?: number;
  position: number;
  size: number;
}

export const Star: FC<StarProps> = ({ sparkle, orbit, spinSpeed, position, size }) => {
  const rotationAngle = position * -1;
  const iconStyles = {
    width: `${size}px`,
    height: `${size}px`,
    animationDuration: `${spinSpeed}s`,
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
      <div className="animate-spin" style={{ animationDuration: `${spinSpeed}s` }}>
        <div style={{ width: `${orbit}px`, height: `${orbit}px`, transform: `rotate(${position}deg)` }}>
          <div className="inline-flex" style={{ transform: `rotate(${rotationAngle}deg)` }}>
            {sparkle ? (
              <SparkleIcon className="text-emerald-300 opacity-20 animate-spin" style={iconStyles} />
            ) : (
              <StarIcon className="text-emerald-300 animate-spin" style={iconStyles} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
