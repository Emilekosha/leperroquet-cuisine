import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import pub1 from "../assets/publi.jpg";
import pub4 from "../assets/pub4.jpg";
import pub3 from "../assets/pub3.jpg";
// import pub5 from "../assets/pub5.jpg";
import pub6 from "../assets/pub5.jpg";
import pub7 from "../assets/pub7.jpg";

import HealthyBowlImg from "../assets/healthy-bowl.jpg"; // ajoute une autre image si tu veux

export default function Publicite() {
  return (
    <Layout>
      <div className="w-full mx-auto py-10 px-4 sm:px-6 lg:px-12 xl:px-24  overflow-x-hidden">
        <section className="bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="w-full flex flex-col items-center">
            {/* Bloc sponsorisé */}
            <div className="w-full">
              <p className="text-xl md:text-2xl uppercase tracking-widest text-blue-400 border-b-4 border-dotted border-blue-400 pb-4 mb-8 w-full text-left">
                Sponsorisé par{" "}
                <span className="text-blue-800 font-extrabold">
                  Terre & Saveurs
                </span>
              </p>
            </div>

            {/* Titre */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center mb-5 leading-snug px-2">
              ✨ Mieux manger au quotidien : quand le sain devient simple (et
              délicieux)
            </h1>

            {/* Paragraphe */}
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-8 text-center max-w-4xl px-2">
              Découvrez comment{" "}
              <span className="text-blue-700 font-semibold">
                Terre & Saveurs
              </span>{" "}
              transforme vos habitudes alimentaires avec équilibre, rapidité et
              saveur.
            </p>

            {/* Image */}
            <div className="w-full">
              <img
                src={HealthyBowlImg}
                alt="Bol santé Terre & Saveurs"
                className="w-full h-auto object-cover rounded-md shadow-md"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-12 px-4 sm:px-8 lg:px-16 xl:px-24">
          <div className="w-full mx-auto bg-white shadow-2xl rounded-3xl p-6 sm:p-10 lg:p-12 space-y-10">
            {/* Titre global */}
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-black">
              🌱 Bien manger simplement : la solution Terre & Saveurs
            </h2>

            {/* Bloc horizontal */}
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Colonne 1 */}
              <div className="flex-1 flex flex-col space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600">
                  🥗 Mieux manger au quotidien : quand le sain devient simple
                  (et délicieux)
                </h3>

                <p className="text-sm font-medium text-gray-600">
                  Article sponsorisé par Terre & Saveurs
                </p>

                {/* Image encadrée */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={pub1}
                    alt="Image campagne 1"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
                  De plus en plus de Français souhaitent adopter une
                  alimentation plus saine, plus naturelle et plus responsable.
                  Mais entre le rythme de la vie moderne, la fatigue en fin de
                  journée et le manque de temps pour cuisiner, cette belle
                  intention se heurte souvent à la réalité. C’est là
                  qu’intervient Terre & Saveurs, une jeune marque française qui
                  veut réconcilier santé, gourmandise et praticité.
                </p>
              </div>

              {/* Colonne 2 */}
              <div className="flex-1 flex flex-col space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600">
                  Une alternative saine et complète, prête en quelques minutes
                </h3>

                <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
                  Cuisiner sainement commence souvent par faire de meilleurs
                  choix au marché ou au supermarché. Privilégier les produits
                  frais, locaux et de saison présente de multiples avantages :
                </p>

                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={pub4}
                    alt="Mieux manger - Terre & Saveurs"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-md font-medium text-gray-600">
                  Prenons leur bol signature, par exemple :
                </h4>

                <ul className="list-disc list-inside pl-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                  <li>
                    <strong>Quinoa bio tricolore</strong>, riche en fibres et en
                    protéines végétales
                  </li>
                  <li>
                    <strong>Patate douce rôtie</strong>, source d’énergie à
                    index glycémique modéré
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

                <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
                  Un plat qui fait du bien, rassasie vraiment et… a du goût.
                  Parce qu’une cuisine saine ne devrait jamais être fade.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className=" py-8 px-4 sm:px-8 lg:px-16 xl:px-24">
          <div className="w-full mx-auto bg-white shadow-xl rounded-3xl p-8 sm:p-12 space-y-10">
            {/* Titre global */}
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-black">
              🍽️ L'engagement Terre & Saveurs pour un quotidien plus sain
            </h2>

            {/* Bloc horizontal */}
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Colonne gauche – Section 3 */}
              <div className="flex-1 space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600">
                  Manger mieux sans se compliquer la vie
                </h3>

               

                <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 text-justify">
                  <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
                    Chez Terre & Saveurs, le parti pris est clair : il est temps
                    de sortir des oppositions entre “rapide” et “équilibré”,
                    “pratique” et “éthique”. Leurs bols sont prêts à consommer,
                    en livraison ou à emporter, et ne nécessitent qu’une simple
                    réchauffe ou se dégustent froid.
                  </p>

                   <img
                  src={pub3}
                  alt="ÉclatPur campagne"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />

                  <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
                    Cela permet de mieux manger sans tout réorganiser, que ce
                    soit au bureau, à la maison ou entre deux rendez-vous. Plus
                    besoin de choisir entre une salade industrielle fade et un
                    sandwich ultra-transformé.
                  </p>
                </div>
              </div>

              {/* Colonne droite – Section 4 */}
              <div className="flex-1 space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600">
                  Une marque engagée pour une alimentation plus responsable
                </h3>

                <blockquote className=" italic text-gray-700 border-l-4 border-purple-500 pl-4 mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
                  Au-delà de la nutrition, Terre & Saveurs s’engage à chaque
                  étape du processus. Les produits sont sourcés localement
                  autant que possible, les recettes sont élaborées en France,
                  les portions sont pensées pour limiter le gaspillage, et les
                  emballages sont recyclables ou biodégradables.
                </blockquote>

                <img
                  src={pub6}
                  alt="Engagement visuel"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />

                <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
                  L’objectif ? Créer une alternative concrète à la
                  surconsommation de plats industriels tout en soutenant une
                  agriculture plus durable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 : Terre & Saveurs - version améliorée */}
        <section className="bg-white py-8 px-4 sm:px-8 lg:px-16 xl:px-24">
          <div className="w-full mx-auto bg-gray-50 shadow-xl rounded-3xl p-8 sm:p-12 space-y-10">
            {/* Titre global */}
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-black">
              🌟 Terre & Saveurs, un succès grandissant
            </h2>

            {/* Bloc horizontal responsive */}
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Colonne gauche – Section 5 */}
              <div className="flex-1 space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600">
                  Une démarche qui séduit de plus en plus d’adeptes
                </h3>

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

                <img
                  src={pub7}
                  alt="Illustration ÉclatPur"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />
              </div>

              {/* Colonne droite – Section 6 */}
              <div className="flex-1 space-y-6 rounded-xl p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600 text-center">
                  En résumé : du bon, du sain, du vrai
                </h3>

                <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
                  Ce que propose Terre & Saveurs, ce n’est pas seulement un
                  repas : c’est une nouvelle manière d’envisager l’alimentation
                  au quotidien. Une approche où le goût, la santé et
                  l’engagement écologique se retrouvent dans l’assiette.
                </p>

                {/* <hr className="my-6 border-t border-gray-300" /> */}

                <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
                  👉 À découvrir dès maintenant en livraison écoresponsable,
                  click & collect ou dans une sélection d’épiceries partenaires.
                </p>

                <img
                  src={pub4}
                  alt="Image campagne 1"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />

                <p className="text-center text-purple-700 font-medium text-base sm:text-lg">
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
            </div>
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
