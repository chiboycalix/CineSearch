import { Outlet, useLocation } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/footer";

function App() {
  const location = useLocation();
  console.log({ location })
  const isMovieDetails = location?.pathname.includes('/details/')
  return (
    <div>
      <div className=" bg-[#221010]">
        <Header />
        <div className={isMovieDetails ? "px-0" : "px-20"}>
          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
