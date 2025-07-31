import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import pub1 from "../assets/pub1.png";
import pub4 from "../assets/pub4.jpg";
import pub3 from "../assets/pub3.jpg";
// import pub5 from "../assets/pub5.jpg";
import pub6 from "../assets/pub5.jpg";
import pub7 from "../assets/pub7.jpg";

import HealthyBowlImg from "../assets/healthy-bowl.jpg"; // ajoute une autre image si tu veux

export default function Publicite() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-10 px-4 overflow-x: hidden; bg-slate-50">
        <div className="max-w-3xl mx-auto my-8 px-4">
          {/* Image du plat */}
          <img
            src={HealthyBowlImg}
            alt="Bol santé Terre & Saveurs"
            className="w-full h-auto rounded-md shadow-md mb-6"
          />

          {/* Encadré sponsorisé */}
          <div className="border border-gray-400 p-4 text-center rounded">
            <p className="font-semibold text-gray-800 mb-1">
              Sponsorisé par Terre & Saveurs
            </p>
            <p className="text-gray-700">
              Mieux manger au quotidien : quand le sain devient simple (et
              délicieux)
            </p>
          </div>
        </div>

        <hr className="my-12 border-t border-gray-300" />

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Titre principal */}
            <h1 className="text-3xl font-bold text-purple-900">
              🥗 Mieux manger au quotidien : quand le sain devient simple (et
              délicieux)
            </h1>

            {/* Sous-titre */}
            <h4 className="text-md font-medium text-gray-600">
              Article sponsorisé par Terre & Saveurs
            </h4>

            {/* Image */}
            <img
              src={pub1}
              alt="Image campagne 1"
              className="w-full rounded shadow"
            />

            {/* Paragraphe */}
            <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
              De plus en plus de Français souhaitent adopter une alimentation
              plus saine, plus naturelle et plus responsable. Mais entre le
              rythme de la vie moderne, la fatigue en fin de journée et le
              manque de temps pour cuisiner, cette belle intention se heurte
              souvent à la réalité. C’est là qu’intervient Terre & Saveurs, une
              jeune marque française qui veut réconcilier santé, gourmandise et
              praticité.
            </p>
          </div>
        </div>

        <hr className="my-12 border-t border-gray-300" />

        {/* Section 2 : Terre & Saveurs - version améliorée */}
        <section className="bg-white py-20 px-6 sm:px-10 lg:px-24 xl:px-36 mt-16">
          <div className="max-w-4xl mx-auto space-y-10 text-gray-800">
            {/* Titre */}
            <h1 className="text-3xl sm:text-4xl font-bold text-purple-800 text-center leading-snug">
              Une alternative saine et complète, prête en quelques minutes
            </h1>

            {/* Paragraphe d’intro */}
            <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
              Cuisiner sainement commence souvent par faire de meilleurs choix
              au marché ou au supermarché. Privilégier les produits frais,
              locaux et de saison présente de multiples avantages :
            </p>

            {/* Image en bas */}
            <img
              src={pub4}
              alt="Mieux manger - Terre & Saveurs"
              className="w-full h-auto rounded-xl shadow-md"
            />

            {/* Sous-titre */}
            <h4 className="text-md font-medium text-gray-600">
              Prenons leur bol signature, par exemple :
            </h4>

            {/* Liste */}
            <ul className="list-disc list-inside space-y-2 pl-4 text-base sm:text-lg leading-relaxed">
              <li>
                <strong>Quinoa bio tricolore</strong>, riche en fibres et en
                protéines végétales
              </li>
              <li>
                <strong>Patate douce rôtie</strong>, source d’énergie à index
                glycémique modéré
              </li>
              <li>
                <strong>Chou kale poêlé</strong>, véritable concentré de
                micronutriments
              </li>
              <li>
                <strong>Avocat frais</strong>, pour une touche onctueuse et
                pleine de bons gras
              </li>
            </ul>

            {/* Paragraphe final */}
            <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
              Un plat qui fait du bien, rassasie vraiment et… a du goût. Parce
              qu’une cuisine saine ne devrait jamais être fade.
            </p>
          </div>
        </section>

        <hr className="my-12 border-t border-gray-300" />

        {/* Section 3 : Terre & Saveurs - version améliorée */}
        <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16 xl:px-24 mt-16">
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Titre de section */}
            <h1 className="text-3xl sm:text-4xl font-bold text-purple-800 text-center leading-snug">
              Manger mieux sans se compliquer la vie
            </h1>

            {/* Image centrée */}
            <div className="w-full">
              <img
                src={pub3} // ✅ Remplace avec l’image réelle
                alt="ÉclatPur campagne"
                className="w-full max-w-2xl mx-auto h-auto object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Texte descriptif */}
            <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-6">
              <p className="text-justify">
                Chez Terre & Saveurs, le parti pris est clair : il est temps de
                sortir des oppositions entre “rapide” et “équilibré”, “pratique”
                et “éthique”. Leurs bols sont prêts à consommer, en livraison ou
                à emporter, et ne nécessitent qu’une simple réchauffe ou se
                dégustent froid.
              </p>

              <p className="text-justify">
                Cela permet de mieux manger sans tout réorganiser, que ce soit
                au bureau, à la maison ou entre deux rendez-vous. Plus besoin de
                choisir entre une salade industrielle fade et un sandwich
                ultra-transformé.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-12 border-t border-gray-300" />

        {/* Section 4 : Terre & Saveurs - version améliorée */}

        <section className="bg-purple-50 py-16 px-6 sm:px-10 lg:px-20 xl:px-32 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Titre */}
            <h1 className="text-3xl lg:text-4xl font-bold text-purple-800 mb-6">
              Une marque engagée pour une alimentation plus responsable
            </h1>

            {/* Citation visuelle */}
            <blockquote className="text-lg italic text-gray-700 border-l-4 border-purple-500 pl-6 mb-6">
              Au-delà de la nutrition, Terre & Saveurs s’engage à chaque étape
              du processus. Les produits sont sourcés localement autant que
              possible, les recettes sont élaborées en France, les portions sont
              pensées pour limiter le gaspillage, et les emballages sont
              recyclables ou biodégradables.
            </blockquote>

            {/* Illustration */}
            <img
              src={pub6} // ← remplace avec ton image
              alt="Citations visuelles"
              className="mx-auto w-full max-w-lg h-auto rounded-lg shadow-md"
            />

            <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed mt-6">
              L’objectif ? Créer une alternative concrète à la surconsommation
              de plats industriels tout en soutenant une agriculture plus
              durable.
            </p>
          </div>
        </section>

        <hr className="my-12 border-t border-gray-300" />

        {/* Section 5 : Terre & Saveurs - version améliorée */}

        <section className="bg-white py-20 px-6 sm:px-10 lg:px-20 xl:px-32 mt-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Titre principal */}
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-purple-800 leading-snug">
              Une démarche qui séduit de plus en plus d’adeptes
            </h1>

            {/* Paragraphe */}
            <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
              Depuis son lancement, Terre & Saveurs a séduit une large
              communauté : des citadins pressés, des actifs soucieux de leur
              santé, des étudiants curieux de mieux manger, ou encore des
              familles qui cherchent des solutions simples pour varier leur
              alimentation.
            </p>
            <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
              Et pour ceux qui souhaitent aller plus loin, la marque propose
              aussi des recettes maison, des conseils nutritionnels et des
              partenariats avec des diététiciens et des artisans locaux.
            </p>

            {/* Image centrée en bas */}
            <div className="mt-8">
              <img
                src={pub7} // 🔁 Remplace avec ton image
                alt="Illustration ÉclatPur"
                className="mx-auto w-full max-w-lg h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        <hr className="my-12 border-t border-gray-300" />

        <section className="bg-gray-100 py-16 px-6 sm:px-10 lg:px-24 xl:px-36 mt-20">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 sm:p-12 space-y-6 text-gray-800">
            {/* Titre */}
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 text-center">
              En résumé : du bon, du sain, du vrai
            </h2>

            {/* Texte de synthèse */}
            <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
              Ce que propose Terre & Saveurs, ce n’est pas seulement un repas :
              c’est une nouvelle manière d’envisager l’alimentation au
              quotidien. Une approche où le goût, la santé et l’engagement
              écologique se retrouvent dans l’assiette.
            </p>

            <hr className="my-12 border-t border-gray-300" />

            <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
              👉 À découvrir dès maintenant en livraison écoresponsable, click &
              collect ou dans une sélection d’épiceries partenaires.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-center text-purple-700 font-medium mt-6">
              📦{" "}
              <a
                href="https://www.terreetsaveurs.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-purple-900 transition"
              >
                Plus d’infos sur terreetsaveurs.fr
              </a>
            </p>
          </div>
        </section>

        <Link
          to="/"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Retour à l’accueil
        </Link>
      </div>
    </Layout>
  );
}
