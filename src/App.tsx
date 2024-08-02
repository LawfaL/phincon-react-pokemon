import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PokemonListPage } from "@app/presentation/pokemon-list/PokemonList";
import { PokemonDetailPage } from "@app/presentation/pokemon-detail/PokemonDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PokemonListPage />} />
      <Route path="/detail/:name" element={<PokemonDetailPage />} />
    </Routes>
  );
}

export default App;
