const allTypes = [
  "all", "normal", "fire", "water", "grass", "electric", "ice",
  "fighting", "poison", "ground", "flying", "psychic", "bug",
  "rock", "ghost", "dark", "dragon", "steel", "fairy"
];

export default function TypeFilter({ selectedType, onSelectType }) {
  return (
    <select
      value={selectedType}
      onChange={(e) => onSelectType(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm text-gray-700"
    >
      {allTypes.map((type) => (
        <option key={type} value={type}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </option>
      ))}
    </select>
  );
}
