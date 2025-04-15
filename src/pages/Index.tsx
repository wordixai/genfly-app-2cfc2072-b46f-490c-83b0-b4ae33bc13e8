import { NavCard } from "@/components/NavCard";
import { SearchBar } from "@/components/SearchBar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navCategories } from "@/data/navLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      <ThemeToggle />
      
      <header className="pt-16 pb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Navigation Hub</h1>
        <p className="text-muted-foreground">Your personal collection of useful links</p>
      </header>
      
      <main className="container mx-auto px-4">
        <SearchBar />
        
        {navCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">{category.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.links.map((link, linkIndex) => (
                <NavCard
                  key={linkIndex}
                  title={link.title}
                  description={link.description}
                  icon={<link.icon />}
                  url={link.url}
                  color={link.color}
                  hoverInfo={link.hoverInfo}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
      
      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Navigation Hub</p>
      </footer>
    </div>
  );
};

export default Index;