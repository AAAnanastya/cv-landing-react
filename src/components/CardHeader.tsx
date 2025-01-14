import { PropsWithChildren } from 'react';
import StarIcon from '@/assets/icons/star.svg';

export const CardHeader = ({ title, className, children }: PropsWithChildren<{ title: string; className?: string }>) => {
  return (
    <div className={className}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="uppercase font-bold text-xl tracking-widest">{title}</h3>
      </div>
      <p className="text-white/60 text-sm mt-1">{children}</p>
    </div>
  );
};
