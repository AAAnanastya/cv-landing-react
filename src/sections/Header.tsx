export const Header = () => {
  return (
    <header className="flex justify-center items-center fixed w-[100%] top-3 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/50 rounded-full bg-white/10 backdrop-blur">
        <a href="#home" className="nav-item">
          Главная
        </a>
        <a href="#projects" className="nav-item">
          Проекты
        </a>
        <a href="#about" className="nav-item">
          Обо мне
        </a>
        <a href="#contacts" className="nav-item bg-white text-gray-900 hover:bg-green-100 hover:text-green-900">
          Связаться
        </a>
      </nav>
    </header>
  );
};
