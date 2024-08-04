import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PokemonListPage } from "@app/presentation/pokemon-list/PokemonList";
import { PokemonDetailPage } from "@app/presentation/pokemon-detail/PokemonDetail";
import { PokemonPlayerPage } from "@app/presentation/pokemon-player/PokemonPlayer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PokemonListPage />} />
      <Route path="/detail/:name" element={<PokemonDetailPage />} />
      <Route path="/player" element={<PokemonPlayerPage />} />
    </Routes>
  );
}

export default App;
