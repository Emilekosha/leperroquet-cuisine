import { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import logoimg from '../assets/logo.jpg';
import { Link } from "react-router-dom";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="font-times bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md">
      {/* === Ligne 1 : Logo === */}
      <div className="px-6 flex justify-center items-center">
        <img
          src={logoimg}
          alt="logo"
          className="w-[60px] h-[60px] rounded-full object-cover mr-2 mt-4"
        />
        <span className="text-4xl font-bold">Le Perroquet</span>
      </div>

      {/* === Ligne 2 : Nav + Actions === */}
      <div className="flex items-center justify-between lg:justify-between py-6 px-6">
        {/* MENU GAUCHE (Desktop) */}
       <nav className="hidden lg:flex gap-6 text-xl font-medium ml-6">
  <Link to="/" className="hover:underline">Accueil</Link>

  {/* Politique */}
  <div className="relative group">
    <button className="hover:underline">Politique ▼</button>
    <div className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg rounded mt-2 min-w-[200px] z-10">
      <Link to="/politique/nationale" className="block px-4 py-2 hover:bg-gray-100">Politique nationale</Link>
      <Link to="/politique/internationale" className="block px-4 py-2 hover:bg-gray-100">Politique internationale</Link>
      <Link to="/politique/analyses" className="block px-4 py-2 hover:bg-gray-100">Analyses politiques</Link>
    </div>
  </div>

  {/* Sports */}
  <div className="relative group">
    <button className="hover:underline">Sports ▼</button>
    <div className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg rounded mt-2 min-w-[200px] z-10">
      <Link to="/sports/football" className="block px-4 py-2 hover:bg-gray-100">Football</Link>
      <Link to="/sports/basketball" className="block px-4 py-2 hover:bg-gray-100">Basketball</Link>
      <Link to="/sports/tennis" className="block px-4 py-2 hover:bg-gray-100">Tennis</Link>
    </div>
  </div>

  {/* Culture */}
  <div className="relative group">
    <button className="hover:underline">Culture ▼</button>
    <div className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg rounded mt-2 min-w-[200px] z-10">
      <Link to="/culture/cinema" className="block px-4 py-2 hover:bg-gray-100">Cinéma</Link>
      <Link to="/culture/musique" className="block px-4 py-2 hover:bg-gray-100">Musique</Link>
      <Link to="/culture/litterature" className="block px-4 py-2 hover:bg-gray-100">Littérature</Link>
    </div>
  </div>
</nav>


        {/* HAMBURGER MENU (Mobile) */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* BARRE DE RECHERCHE + BOUTONS (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex bg-white rounded-full overflow-hidden w-[220px]">
            <input
              type="text"
              placeholder="Rechercher..."
              className="px-4 py-2 w-full text-gray-800 text-sm outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-white">
              <FaSearch />
            </button>
          </div>
          <div className="flex gap-2">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm">
              Se connecter
            </button>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm">
              S'inscrire
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2 text-sm font-medium items-center">
            <a href="#" className="hover:underline">Accueil</a>

            {/* Politique */}
            <div className="text-center">
              <span className="font-semibold">Politique</span>
              <div className="flex flex-col text-sm text-white/80">
                <a href="#">• Politique nationale</a>
                <a href="#">• Politique internationale</a>
                <a href="#">• Analyses politiques</a>
              </div>
            </div>

            {/* Sports */}
            <div className="text-center">
              <span className="font-semibold">Sports</span>
              <div className="flex flex-col text-sm text-white/80">
                <a href="#">• Football</a>
                <a href="#">• Basketball</a>
                <a href="#">• Tennis</a>
              </div>
            </div>

            {/* Culture */}
            <div className="text-center">
              <span className="font-semibold">Culture</span>
              <div className="flex flex-col text-sm text-white/80">
                <a href="#">• Cinéma</a>
                <a href="#">• Musique</a>
                <a href="#">• Littérature</a>
              </div>
            </div>
          </nav>

          {/* Search + Buttons (mobile) */}
          <div className="flex bg-white rounded-full overflow-hidden w-full max-w-xs">
            <input
              type="text"
              placeholder="Rechercher..."
              className="px-4 py-2 w-full text-gray-800 text-sm outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-white">
              <FaSearch />
            </button>
          </div>

          <div className="flex flex-col gap-2 w-full max-w-xs">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm">
              Se connecter
            </button>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm">
              S'inscrire
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
