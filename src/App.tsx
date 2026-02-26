
import { Outlet, useLocation } from "react-router"
import Header from "./components/layout/Header"

function App() {
  const location = useLocation();
  console.log({ location });
  return (
    <div className="min-h-screen bg-[#221010]">
      <Header />

      <div className={location?.pathname === "/details" ? "px-0" : "px-20"}>
        <Outlet />
      </div>
    </div>
  )
}

export default App
