import AdCard from "./AdCard";

export default function ArticleDetail() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      {/* SECTION 1 */}
      <h4 className="font-bold text-2xl mt-6 mb-2 border-l-4 border-blue-600 pl-3">
        1. Définir une alimentation saine : au-delà des clichés
      </h4>
      <p className="mb-4 text-left sm:text-justify sm:text-lg leading-relaxed ">
        Contrairement aux idées reçues, manger sain ne signifie pas suivre un
        régime strict ou se priver de tout. Il s’agit plutôt d’un mode de
        consommation équilibré, varié, et respectueux des besoins réels du
        corps.
      </p>
      <div className="text-gray-700 leading-relaxed space-y-4">
        <p className="mb-4 text-left sm:text-justify sm:text-lg leading-relaxed ">
          L’Organisation Mondiale de la Santé recommande notamment :
        </p>
        <ul className="list-disc list-inside space-y-1 pl-9">
          <li>
            La consommation quotidienne de fruits et légumes (au moins
            400g/jour)
          </li>
          <li>
            La réduction des sucres ajoutés, du sel et des graisses saturées
          </li>
          <li>
            L’apport suffisant en fibres, protéines de qualité, vitamines et
            minéraux
          </li>
        </ul>
      </div>

      {/* SECTION 2 */}
      <h4 className="font-bold text-2xl mt-6 mb-2 border-l-4 border-blue-600 pl-3">
        2. Le rôle clé des produits frais, locaux et de saison
      </h4>
      <div className="text-gray-700 leading-relaxed space-y-4 mb-6">
        <p className="mb-4 text-left sm:text-justify sm:text-lg leading-relaxed ">
          Cuisiner sainement commence souvent par faire de meilleurs choix au
          marché ou au supermarché. Privilégier les produits frais, locaux et de
          saison présente de multiples avantages :
        </p>
        <ul className="list-disc list-inside space-y-1 pl-9">
          <li>Une meilleure qualité nutritionnelle</li>
          <li>Moins de pesticides et d’additifs</li>
          <li>Un soutien à l’économie locale</li>
          <li>Une empreinte carbone réduite</li>
        </ul>
      </div>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        Par exemple, en été, on mise sur les tomates, courgettes, melons ou
        pêches ; en hiver, place aux légumes racines, choux et agrumes. Varier
        les sources de protéines (légumineuses, œufs, poissons, viandes maigres)
        est également recommandé.
      </p>

      {/* SECTION 3 */}
      <h4 className="font-bold text-2xl mt-6 mb-2 border-l-4 border-blue-600 pl-3">
        3. Moins d’ultra-transformés, plus de fait maison
      </h4>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        Les aliments ultra-transformés (plats préparés, snacks industriels,
        boissons sucrées…) représentent aujourd’hui une part importante de
        l’alimentation occidentale. Or, ils sont souvent riches en sucres, sel,
        graisses de mauvaise qualité et additifs.
      </p>

      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        Adopter une cuisine saine, c’est revenir au “fait maison” autant que
        possible. Inutile d’être un chef : une soupe de légumes, une salade
        complète ou un curry végétarien sont accessibles, économiques et
        savoureux.
      </p>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        De plus, cuisiner soi-même permet de mieux contrôler ce que l’on mange
        et de retrouver le plaisir du geste culinaire.
      </p>

      {/* === PUBLICITÉ === */}
      <div className="flex justify-center my-10">
        <AdCard />
      </div>

      {/* SECTION 4 */}
      <h4 className="font-bold text-2xl mt-6 mb-2 border-l-4 border-blue-600 pl-3">
        4. Le lien entre alimentation, santé et prévention
      </h4>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        Les études le confirment : une alimentation équilibrée joue un rôle
        majeur dans la prévention de nombreuses maladies chroniques (diabète,
        hypertension, obésité, maladies cardiovasculaires…). Elle contribue
        aussi à une meilleure santé mentale et à un bon niveau d’énergie au
        quotidien.
      </p>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        Associer alimentation saine et activité physique régulière constitue un
        pilier fondamental d’une bonne hygiène de vie.
      </p>

      {/* SECTION 5 */}
      <h4 className="font-bold text-2xl mt-6 mb-2 border-l-4 border-blue-600 pl-3">
        5. Vers une cuisine plus consciente et durable
      </h4>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        Au-delà de la santé individuelle, manger sain participe à une démarche
        collective. Réduire sa consommation de viande, limiter le gaspillage
        alimentaire, opter pour des emballages réutilisables ou composter ses
        déchets sont autant de gestes qui renforcent l’impact positif de nos
        choix alimentaires.
      </p>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        La cuisine devient alors un acte citoyen, au croisement de la santé, de
        l’environnement et du plaisir.
      </p>

      {/* SECTION 6 */}
      {/* <h4 className="font-bold text-2xl mt-6 mb-2 border-l-4 border-blue-600 pl-3">
        6. Vers une mobilité servicielle
      </h4>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        Enfin, un changement majeur s’opère dans notre rapport à la voiture.
        Avec l’essor des plateformes numériques, la propriété laisse place à
        l’usage : autopartage, location à la demande, abonnements flexibles.
      </p>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        Ce modèle de &quot;voiture comme service&quot; répond aux besoins
        urbains, tout en réduisant la congestion et les émissions.
      </p> */}

      <h4 className="font-bold text-2xl mt-6 mb-2 border-l-4 border-blue-600 pl-3">
        🔄 Conclusion
      </h4>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        Adopter une alimentation saine n’exige pas de révolutionner ses
        habitudes, mais de les réorienter avec bon sens. C’est une invitation à
        mieux choisir, mieux cuisiner et mieux savourer, pour soi… et pour la
        planète.
      </p>
    </div>
  );
}
