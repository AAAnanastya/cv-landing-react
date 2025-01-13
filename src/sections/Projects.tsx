import ToDoPreview from '@/assets/images/projects/todo_preview.jpeg';
import RnMWikiPreview from '@/assets/images/projects/P&M_wiki_preview.jpeg';
import FormPreview from '@/assets/images/projects/muiti_step_form_preview.jpeg';
import SpaceTravelPreview from '@/assets/images/projects/Space_travel_preview.jpeg';
import Image from 'next/image';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

const portfolioProjects = [
  {
    title: 'Todo app',
    description: 'ToDo приложение с простым интерфейсом для организации задач с возможностью сортировки.',
    link: 'https://github.com/AAAnanastya/todo-app/tree/main',
    image: ToDoPreview,
  },
  {
    title: 'Rick and Morty WIKI',
    description: 'Веб-приложение, использующее API для отображения данных о персонажах, эпизодах и мирах с фильтрацией и поиском.',
    link: 'https://github.com/AAAnanastya/rick-and-morty-app',
    image: RnMWikiPreview,
  },
  {
    title: 'Multi-Step Form',
    description: 'Многошаговая форма для оформления заказа на услуги, собирающая информацию о пользователе и услугах с удобной навигацией.',
    link: 'https://github.com/AAAnanastya/multi-step-form',
    image: FormPreview,
  },
  {
    title: 'Space Travel Website',
    description: 'Вебсайт о космических путешествиях с информацией о миссиях и маршрутах для будущих космических туристов.',
    link: 'https://github.com/AAAnanastya/space-travel-website',
    image: SpaceTravelPreview,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 md:pb-20">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase text-sm font-semibold traking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Практика пет-проектов
          </p>
        </div>

        <h2 className="font-serif text-5xl md:text-6xl text-center mt-5">Портфолио</h2>
        <div className="flex justify-center">
          <p className="text-center text-sm md:text-base md:max-w-[360px] text-white/60 mt-4">
            Подборка проектов, отражающих мой опыт в разработке интерактивных и адаптивных пользовательских интерфейсов.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-20 mt-10 md:pt-12">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-emerald-900/5 rounded-3xl overflow-hidden relative z-0 
              after:z-10 after:content-[''] after:absolute after:inset-0 after:rounded-3xl px-8 md:px-12 pt-8 md:pt-12 lg:p-14
              after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:pointer-events-none">
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}></div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pr-5">
                  <h3
                    className="uppercase font-bold text-2xl md:text-3xl lg:text-4xl tracking-widest sm:text-center lg:text-left
                bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <p className="text-sm md:text-lg text-white/50 mt-4 sm:text-center lg:text-left">{project.description}</p>

                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full lg:w-auto px-4 rounded-xl font-semibold inline-flex justify-center items-center gap-2 mt-8">
                      <span>Перейти в репозиторий</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-r from-emerald-300/50 to-sky-400/50 bg-clip-border-box rounded-xl h-max lg:w-[540px] lg:h-auto lg:absolute lg:p-[1px]">
                    <Image src={project.image} alt={project.title} className="mt-8 -mb-2 rounded-xl p-[1px] lg:-mt-0 lg:mb-0" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
