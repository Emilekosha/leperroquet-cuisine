import logoimg from '../assets/logo.jpg';


export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[30%_40%_30%]">
        
        {/* Colonne 1 : Logo + texte */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logoimg}
              alt="Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="text-xl font-bold">Le Perroquet</span>
          </div>
          <p className="text-gray-300 text-sm">
            Votre source d’information locale et mondiale. Nous nous engageons à fournir des informations précises, objectives et pertinentes.
          </p>
        </div>

        {/* Colonne 2 : Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Restez Informer</h4>
          <p className="text-gray-300 text-sm mb-3">
            Abonnez-vous à notre newsletter pour recevoir les dernières actualités.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="px-4 py-2 rounded-l-md w-full text-gray-800 text-sm outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md text-white font-semibold text-sm">
              S'abonner
            </button>
          </div>
        </div>

        {/* Colonne 3 : Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Accueil</a></li>
            <li><a href="#" className="hover:underline">Politique</a></li>
            <li><a href="#" className="hover:underline">Sports</a></li>
            <li><a href="#" className="hover:underline">Culture</a></li>
            <li><a href="#" className="hover:underline">À Propos</a></li>
          </ul>
        </div>
      </div>

      {/* Ligne de séparation */}
      <hr className="my-8 border-gray-700" />

      {/* Bas de page */}
      <div className="text-center text-xs text-gray-400 flex flex-col lg:flex justify-between items-center gap-2 max-w-7xl mx-auto">
        <span>© 2025 Le Perroquet.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Mentions légales</a>
          <a href="#" className="hover:underline">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
