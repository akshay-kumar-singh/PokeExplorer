import { useState } from "react";
import { usePokemonData } from "../hooks/UsePokemonData";
import SearchBar from "../components/SearchBar";
import TypeFilter from "../components/TypeFilter";
import PokemonCard from "../components/PokemonCard";

export default function Home() {
  const { pokemons, loading, error } = usePokemonData();
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const filtered = pokemons.filter(pokemon => {
    const matchesName = pokemon.name.includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || pokemon.types.includes(typeFilter);
    return matchesName && matchesType;
  });

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <TypeFilter selectedType={typeFilter} onSelectType={setTypeFilter} />
      </div>
      {filtered.length === 0 ? (
        <p className="text-center">No Pokémon found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
}
