export default function PokemonCard({ pokemon }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 text-center">
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="mx-auto w-24 h-24 object-contain mb-4"
      />
      <h3 className="capitalize font-semibold text-xl text-gray-800">
        {pokemon.name}
      </h3>
      <p className="text-sm text-gray-500">ID: {pokemon.id}</p>
      <div className="mt-2">
        {pokemon.types.map((type) => (
          <span
            key={type}
            className={`text-xs m-1 px-2 py-1 rounded-full ${
              type === "fire"
                ? "bg-red-500 text-white"
                : type === "water"
                ? "bg-blue-500 text-white"
                : type === "grass"
                ? "bg-green-500 text-white"
                : type === "electric"
                ? "bg-yellow-500 text-black"
                : type === "bug"
                ? "bg-green-300 text-black"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        ))}
      </div>
    </div>
  );
}
