import { Link } from "react-router-dom";
import Pub1Img from "../assets/publi.jpg";

export default function AdCard() {
  return (
    <Link
      to="/publicite"
      className="flex flex-col md:flex-row bg-gray-100 rounded-lg overflow-hidden shadow-md mt-4 hover:shadow-lg transition"
    >
      {/* Image à gauche (ou au-dessus sur mobile) */}
      <img
        src={Pub1Img}
        alt="Publicité ÉclatPur"
        className="w-full md:w-96 h-64 md:h-auto object-cover"
      />

      {/* Texte à droite (ou en dessous sur mobile) */}
      <div className="p-4 flex flex-col justify-center">
        <p className="text-sm text-gray-700 font-semibold mb-2 text-center">
           Sponsorisé par <span className="text-gray-800 font-bold text-xl">
           Terre &amp; Saveurs
          </span>
        </p>
        <p className="text-lg font-semibold text-gray-600 leading-snug px-10 text-center">
          Mieux manger au quotidien : quand le sain devient simple (et
          délicieux) →
        </p>
      </div>
    </Link>
  );
}
