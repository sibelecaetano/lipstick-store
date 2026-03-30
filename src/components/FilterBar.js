const categories = ["Todos", "Batom", "Gloss", "Base"];

export default function FilterBar({ selected, onSelect }) {
  return (
    <div className="flex justify-center gap-3 mb-10 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition
            ${selected === cat
              ? "bg-pink-500 text-white"
              : "bg-white text-pink-500 border border-pink-300 hover:bg-pink-100"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}