import { useEffect } from "react";
import AOS from "aos";

// import layouts
import { NavBar, Footer } from "@/layouts";

// import pages
import { Home } from "@/pages";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="bg-[url(/images/home/homeBG.jpg)] bg-[length:170%] bg-[position:center_top] md:bg-[length:100%] bg-no-repeat app-container">
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
