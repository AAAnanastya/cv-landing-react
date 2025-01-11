import memojiIcon from '@/assets/images/mymemoji.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import { Sparkle, Star } from '@/components/Stars';

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip max-h-[100%]">
      <div className="absolute inset-0" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 80%, transparent)' }}>
        <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }} />
        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring opacity-90" />
        <div className="size-[1020px] hero-ring opacity-70" />
        <div className="size-[1220px] hero-ring opacity-50" />
        <div className="size-[1420px] hero-ring opacity-30" />
        <div className="size-[1620px] hero-ring opacity-15" />

        <Star orbit={800} position={-75} size={112} />
        <Star orbit={630} position={125} size={35} />
        <Star orbit={500} position={15} size={50} />

        <Sparkle orbit={320} position={-30} size={20} />
        <Sparkle orbit={390} position={85} size={28} />
        <Sparkle orbit={510} position={185} size={40} />
        <Sparkle orbit={560} position={-15} size={12} />
        <Sparkle orbit={800} position={155} size={50} />
        <Sparkle orbit={900} position={-60} size={25} />
        <Sparkle orbit={950} position={100} size={20} />
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiIcon} alt={'Memoji'} className="size-[80px] h-[auto]" />

          <div className="bg-gray-950 border border-white px-5 py-1 inline-flex items-center gap-4 rounded-2xl mt-[-3px]">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">Открыта для новых проектов</div>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wider text-center mt-8">Бастрыгина Анастасия</h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Привет! Я начинающая фронтенд-разработчица, увлеченная созданием современных и удобных веб-интерфейсов.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Ознакомиться с портфолио</span>
            <ArrowDown className="size-4" />
          </button>

          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Связаться со мной</span>
          </button>
        </div>
      </div>
    </div>
  );
};
