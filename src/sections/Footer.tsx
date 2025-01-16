import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-24 relative overflow-x-clip pointer-events-auto">
      <div className="absolute sm:h-[300px] -z-10 md:h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm text-white/50 flex flex-col items-center text-center gap-2">
          <span>
            Created using React, Next.js, Tailwind CSS, <br className="md:hidden" />
            CSS Animation and Framer Motion
          </span>
          <span>
            <a
              href="https://www.figma.com/community/file/1297484254996536416"
              className="inline-flex items-center gap-1 z-10 hover:text-white/80 transition duration-300">
              <span>Design template by Shashi K. and Sunal Sood</span>
              <ArrowUpRightIcon className="size-3" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
