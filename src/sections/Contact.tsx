import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { Card } from '@/components/Card';

export const ContactSection = () => {
  return (
    <section className="sm:mt-10 md:mt-12 lg:mt-20 mb:20">
      <div className="container">
        <Card className="bg-gradient-to-r from-emerald-300/70 to-sky-400/70 md:inline-flex md:items-center md:gap-12 md:px-8 lg:px-10">
          <div className="flex flex-col sm:gap-4 md:gap-3 lg:gap-6 sm:mb-6 md:mb-0 sm:text-center md:text-left">
            <h2 className="sm:text-3xl md:text-4xl lg:text-[36.5px] font-bold tracking-wide text-gray-950/90">
              Давайте создадим нечто выдающееся вместе
            </h2>
            <p className="sm:text-[16px] md:text-lg lg:text-xl text-gray-950/70 sm:px-3 md:px-0">
              Готова воплощать новые идеи в жизнь.
              <br className="sm:block md:hidden" />
              Хотела бы поработать в крутой команде, готовой поделиться своим опытом.&nbsp;
              <br className="sm:block lg:hidden" />
              <b className="md:text-[20px]">Давайте свяжемся и обсудим возможности.</b> 😉
            </p>
          </div>

          <div className="flex flex-col items-center md:justify-between gap-2 text-[18px]">
            <button className="button-link">
              <span>Скачать CV PDF</span>
              <ArrowUpRightIcon />
            </button>
            <button className="button-link">
              <span>E-mail</span>
              <ArrowUpRightIcon />
            </button>
            <button className="button-link">
              <span>Telegram</span>
              <ArrowUpRightIcon />
            </button>
          </div>
        </Card>
      </div>
    </section>
  );
};
