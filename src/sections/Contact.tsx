import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { Card } from '@/components/Card';

export const ContactSection: React.FC = () => {
  return (
    <section id="contacts" className="sm:mt-10 md:mt-12 lg:mt-20">
      <div className="container">
        <Card className="bg-gradient-to-r from-emerald-300/70 to-sky-400/70 md:inline-flex md:items-center md:gap-12 md:px-8 lg:px-10">
          <div className="flex flex-col xs:gap-2 sm:gap-4 md:gap-3 lg:gap-6 xs:mb-4 sm:mb-6 md:mb-0 xs:text-center md:text-left">
            <h2 className="xs:text-[23px] sm:text-3xl md:text-4xl lg:text-[36.5px] font-bold tracking-wide text-gray-950/90">
              Давайте создадим нечто выдающееся вместе
            </h2>
            <p className="xs:text-[13px] sm:text-[16px] md:text-lg lg:text-xl text-gray-950/70 sm:px-3 md:px-0">
              Готова воплощать новые идеи в жизнь.
              <br className="sm:block md:hidden" />
              Хотела бы поработать в крутой команде, готовой поделиться своим опытом.&nbsp;
              <br className="sm:block lg:hidden" />
              <b className="md:text-[20px]">Давайте свяжемся и обсудим возможности.</b> 😉
            </p>
          </div>

          <div className="flex flex-col items-center md:justify-between gap-2 text-[18px]">
            <a href="https://drive.google.com/drive/folders/1Lrlb7m4bnWY2DRDMMv5jNeUEVtvtR9i7?usp=sharing" target="_blank">
              <button type="button" className="button-link">
                <span>Скачать CV PDF</span>
                <ArrowUpRightIcon />
              </button>
            </a>

            <a href="https://t.me/fujiwaraeuph" target="_blank">
              <button type="button" className="button-link">
                <span>Telegram</span>
                <ArrowUpRightIcon />
              </button>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};
