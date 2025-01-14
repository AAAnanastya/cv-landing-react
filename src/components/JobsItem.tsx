import { FC } from 'react';

interface JobsItems {
  position: string;
  company: string;
  period: string;
}

export const JobsItem: FC<JobsItems> = ({ position, company, period }) => {
  return (
    <>
      <hr className="sm:my-3  md:my-4 bg-white/10 h-[1px] border-0" />
      <div className="flex sm:text-lg md:text-xl md:mb-1">
        <span>{position} в</span>
        &nbsp;
        <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">{company}</span>
      </div>
      <p className="text-[13px] text-white/60">{period}</p>
    </>
  );
};
