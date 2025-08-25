export default function SearchBar({
  title = "Fahrzeugbestand",
  totalResult,
  setSearchQuery,
  searchQuery,
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <div className="flex  items-center gap-4">
        <h2 className="text-xl sm:block hidden text-white">{title}</h2>
        <div className="relative block">
          <input
            type="text"
            placeholder="Search..."
            className="w-[300px] py-2 border border-[#998256] text-white bg-transparent rounded text-sm placeholder:text-[#A1A4A9] ps-12 pr-5"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img
            src={"/assets/svg/search-icon.svg"}
            alt=""
            width={18}
            height={18}
            className="absolute top-3 left-4"
          />
        </div>
        <p className="text-sm text-white">{totalResult || 0} Result</p>
      </div>
    </div>
  );
}
