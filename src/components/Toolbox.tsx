import JSIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CSSIcon from '@/assets/icons/css3.svg';
import TailwindIcon from '@/assets/icons/tailwind-css.svg';
import FMIcon from '@/assets/icons/framer-motion.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ReduxIcon from '@/assets/icons/redux.svg';
import TSIcon from '@/assets/icons/square-ts.svg';

import { TechIcon } from '@/components/TechIcon';
import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

const toolboxItems = [
  {
    title: 'JavaScript',
    icon: JSIcon,
  },
  {
    title: 'HTML5',
    icon: HTMLIcon,
  },
  {
    title: 'CSS3',
    icon: CSSIcon,
  },
  {
    title: 'Tailwind CSS',
    icon: TailwindIcon,
  },
  {
    title: 'Framer Motion',
    icon: FMIcon,
  },
  {
    title: 'React',
    icon: ReactIcon,
  },
  {
    title: 'Redux',
    icon: ReduxIcon,
  },
  {
    title: 'TypeScript',
    icon: TSIcon,
  },
];

export const Toolbox = ({ className, animate }: { className?: string; animate?: string }) => {
  return (
    <div
      className={twMerge(
        'flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_50%,black,black,transparent)]',
        className
      )}>
      <div className={twMerge('inline-flex gap-4 mt-3 mb-1 whitespace-nowrap', animate)}>
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {toolboxItems.map((item) => (
              <div key={item.title} className="inline-flex items-center gap-3 py-1 px-5 outline outline-2 outline-white/10 rounded-lg">
                <TechIcon component={item.icon} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
