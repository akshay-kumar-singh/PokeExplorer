export default function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Pokémon..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 text-sm"
    />
  );
}
