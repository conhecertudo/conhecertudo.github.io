import Image from 'next/image';

import ctLogo from '../../../public/images/logo.svg';
import searchIcon from '../../../public/icons/searchIcon.svg';
import burgerMenu from '../../../public/icons/burger.svg';

export default function Header() {
  return (
    <header className="w-100 p-4 flex items-center justify-between gap-4">
      <div className="w-12 h-12 bg-ct-red flex items-center justify-center rounded">
        <Image src={ctLogo} width={24} height={24} alt="Conhecer tudo" />
      </div>

      <div className="flex flex-auto gap-4 items-center justify-center md:flex-none">
        <div className="flex flex-auto items-center relative md:flex-none md:min-w-[380px]">
          <Image
            className="absolute left-4"
            src={searchIcon}
            width={15}
            height={15}
            alt="Lupa de pesquisa"
          />

          <input
            type="text"
            name="search"
            id="search-input"
            placeholder="Busque por artigos, cursos, livros..."
            className="w-full h-12 pl-10 rounded text-gray-500 bg-ct-black-light placeholder-gray-500"
          />
        </div>
        <button className="w-12 h-12 bg-ct-black-light rounded flex items-center justify-center hover:brightness-200 transition">
          <Image
            className=""
            src={burgerMenu}
            width={24}
            height={24}
            alt="Hamburger menu"
          />
        </button>
      </div>
    </header>
  );
}
