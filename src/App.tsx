import { Route, Routes } from "react-router-dom";
import { Productspage } from "./pages/Productspage";
import { AboutPage } from "./pages/AboutPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Productspage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>

      </Routes>
    </>
  )

}


export default App;
