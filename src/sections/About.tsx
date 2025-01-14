import { Card } from '@/components/Card';
import { SectionTitle } from '@/components/SectionTitle';
import { CardHeader } from '@/components/CardHeader';
import { JobsItem } from '@/components/JobsItem';
import Image from 'next/image';

import mapImage from '@/assets/images/Spb_map.jpeg';
import LocPointer from '@/assets/icons/location-pointer.svg';
import { Toolbox } from '@/components/Toolbox';

const hobbies = [
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '5%',
    top: '0%',
  },
  {
    title: 'Traveling',
    emoji: '✈️',
    left: '55%',
    top: '3%',
  },
  {
    title: 'Cosplay',
    emoji: '🧝‍♀️',
    left: '40%',
    top: '25%',
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♀️',
    left: '13%',
    top: '33%',
  },
  {
    title: 'Crafting',
    emoji: '🔱',
    left: '66%',
    top: '40%',
  },
  {
    title: 'Sewing',
    emoji: '🪡',
    left: '30%',
    top: '57%',
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionTitle
          eyebrow="Познакомимся ближе"
          title="Обо мне"
          description="Узнайте больше о том, кто я есть, мой рабочий стек, чем я занимаюсь помимо кодинга, и что меня вдохновляет."
        />

        <div className="mt-12 sm:flex sm:flex-col sm:gap-5">
          <div className="grid gap-6 md:grid-cols-5 md:grid-rows-5">
            <Card className="md:col-start-4 md:col-span-2 md:row-start-1 md:row-span-2">
              <CardHeader title="Стек Технологий">Технологии и инструменты, используемые в работе.</CardHeader>
              <Toolbox />
              <Toolbox />
            </Card>

            <Card className="md:col-start-1 md:col-span-3 md:row-start-1 md:row-span-3 md:h-full">
              <CardHeader title="Опыт Работы">
                Предыдущие годы я работала в IT на других позициях, где получила опыт и навыки, позволяющие понимать задачи бизнеса и то,
                как строится работа в командах для их выполнения.
              </CardHeader>

              <JobsItem position="Рекрутер" company="Aspirity" period="Ноябрь, 2021 - Март, 2024" />
              <JobsItem position="Менеджер по лидогенерации" company="Aspirity" period="Май, 2021 - Декабрь, 2021" />
              <JobsItem position="Менеджер по лидогенерации" company="Sibedge" period="Февраль, 2019 - Январь, 2021" />
            </Card>

            <Card className="sm:h-[260px] md:h-full p-0 flex flex-col md:col-start-1 md:col-span-3 md:row-start-4 md:row-span-2">
              <CardHeader title="Вне разработки" className="p-6">
                Мои интересы и хобби.
              </CardHeader>
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}>
                    <span className="text-[15px] font-semibold tracking-wide text-gray-950/70">{hobby.title}</span>
                    <span className="text-lg">{hobby.emoji}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-center tracking-widest mb-2 text-emerald-300/30">*Drag and drop</p>
            </Card>

            <Card className="relative p-0 sm:h-[300px] md:h-[400px] md:col-start-4 md:col-span-2 md:row-start-3 md:row-span-3 md:h-full">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-1">
                <LocPointer className="size-16" />
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full pt-0.5 px-2 border border-[1.5px] border-gray-950">
                  <h2 className="font-serif font-bold text-sm text-gray-950/70">Saint-Petesberg</h2>
                </div>
              </div>
              <Image
                src={mapImage}
                alt="Saint-Petesberg map"
                className="absolute z-0 sm:-translate-y-12 md:-translate-y-4 md:size-[550px] md:object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
