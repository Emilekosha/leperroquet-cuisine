import ArticleDetail from "./ArticleDetail";

export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
      <div className="p-4">
        <h2 className="text-sm sm:text-3xl md:text-2xl font-bold text-red-600 uppercase mb-2">{article.title}</h2>
        <p className="italic text-sm text-gray-500 mb-4">{article.author}</p>
        <p className="text-gray-700 mb-4 text-lg">{article.excerpt}</p>
         <p className=" font-semibold text-gray-800  mb-4 text-left sm:text-justify text-lg sm:text-xl leading-relaxed">{article.subtitle}</p>
      </div>
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-96 object-cover"
      />
      

      {/* Si tu veux garder le contenu complet après la carte */}
      <ArticleDetail />
    </div>
  );
}
