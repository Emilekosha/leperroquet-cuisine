import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleCard from "./components/ArticleCard";
import { articles } from "./data/articles";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto p-6 grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
