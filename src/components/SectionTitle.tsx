import { FC } from 'react';

interface TitleProps {
  eyebrow: string;
  title: string;
  description: string;
}

export const SectionTitle: FC<TitleProps> = ({ eyebrow, title, description }) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase text-sm font-semibold traking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          {eyebrow}
        </p>
      </div>

      <h2 className="font-serif text-5xl md:text-6xl text-center mt-5">{title}</h2>

      <div className="flex justify-center px-4">
        <p className="text-center text-sm md:text-base md:max-w-[360px] text-white/60 mt-4">{description}</p>
      </div>
    </>
  );
};
