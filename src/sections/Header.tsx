export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed w-[100%] top-3 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/50 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">
          Главная
        </a>
        <a href="#" className="nav-item">
          Проекты
        </a>
        <a href="#" className="nav-item">
          Обо мне
        </a>
        <a href="#" className="nav-item bg-white text-gray-900 hover:bg-green-100 hover:text-green-900">
          Связаться
        </a>
      </nav>
    </div>
  );
};
