import memojiIcon from '@/assets/images/mymemoji.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import { Star } from '@/components/Stars';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="py-32 md:py-48 lg:py-60 xl:py-80 xxl:py-[420px] relative z-0 overflow-x-clip max-h-[100%]">
      <div
        className="absolute inset-0 -z-10"
        style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 80%, transparent)' } as React.CSSProperties}>
        <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }} />
        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring opacity-90" />
        <div className="size-[1020px] hero-ring opacity-70" />
        <div className="size-[1220px] hero-ring opacity-50" />
        <div className="size-[1420px] hero-ring opacity-30" />
        <div className="size-[1620px] hero-ring opacity-15" />

        {/* Stars */}
        <Star orbit={800} spinSpeed={31} position={-75} size={112} />
        <Star orbit={630} spinSpeed={32} position={125} size={35} />
        <Star orbit={500} spinSpeed={34} position={15} size={50} />
        {/* Sparkles */}
        <Star sparkle orbit={320} spinSpeed={36} position={-30} size={20} />
        <Star sparkle orbit={390} spinSpeed={35} position={85} size={28} />
        <Star sparkle orbit={510} spinSpeed={34} position={185} size={40} />
        <Star sparkle orbit={570} spinSpeed={33} position={-15} size={12} />
        <Star sparkle orbit={670} spinSpeed={32} position={60} size={14} />
        <Star sparkle orbit={680} spinSpeed={32} position={-130} size={12} />
        <Star sparkle orbit={800} spinSpeed={31} position={155} size={50} />
        <Star sparkle orbit={830} spinSpeed={31} position={0} size={26} />
        <Star sparkle orbit={900} spinSpeed={30} position={-60} size={25} />
        <Star sparkle orbit={950} spinSpeed={30} position={100} size={20} />
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiIcon} alt={'Memoji'} className="size-[80px] h-[auto]" />

          <div className="bg-gray-950 border border-white px-5 py-1 inline-flex items-center gap-4 rounded-2xl mt-[-3px]">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 inset-0 rounded-full absolute animate-ping" />
            </div>
            <div className="text-sm font-medium">Открыта для новых проектов</div>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <h1 className="font-serif xs:text-2xl sm:text-3xl md:text-5xl tracking-wider text-center mt-8">Бастрыгина Анастасия</h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Привет! Я начинающая фронтенд-разработчица, увлеченная созданием современных и удобных веб-интерфейсов.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="#projects">
            <button
              type="button"
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:hover:bg-green-100/5 transition duration-300">
              <span className="font-semibold">Ознакомиться с портфолио</span>
              <ArrowDown className="size-4" />
            </button>
          </a>

          <a href="#contacts">
            <button
              type="button"
              className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl hover:hover:bg-green-100 transition duration-300">
              <span>👋</span>
              <span className="font-semibold">Связаться со мной</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
