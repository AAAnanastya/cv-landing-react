import JSIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CSSIcon from '@/assets/icons/css3.svg';
import TailwindIcon from '@/assets/icons/tailwind-css.svg';
import FMIcon from '@/assets/icons/framer-motion.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ReduxIcon from '@/assets/icons/redux.svg';
import TSIcon from '@/assets/icons/square-ts.svg';

import { TechIcon } from '@/components/TechIcon';

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

export const Toolbox = () => {
  return (
    <div className="flex flex-row w-max gap-4 mt-4">
      {toolboxItems.map((item) => (
        <div key={item.title} className="inline-flex items-center gap-3 py-1 px-5 outline outline-2 outline-white/10 rounded-lg">
          <TechIcon component={item.icon} />
          <span className="font-semibold">{item.title}</span>
        </div>
      ))}
    </div>
  );
};
