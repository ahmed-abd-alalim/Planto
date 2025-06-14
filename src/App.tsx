// import layouts
import { NavBar, Footer } from "@/layouts";

// import pages
import { Home } from "@/pages";

function App() {
  return (
    <>
      <div className="app-container">
        <NavBar />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
