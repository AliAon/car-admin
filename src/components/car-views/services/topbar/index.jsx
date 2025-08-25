import SearchBar from "@/components/search-bar";
import AddService from "./add-service";

export default function TopBar({ totalResult, setSearchQuery, searchQuery }) {
  return (
    <div className="flex flex-wrap items-center bg-[#242424] p-2 rounded justify-between gap-2">
      <SearchBar
        totalResult={totalResult}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        title="Services Showcase"
      />
      <div className="flex items-center gap-2">
        <AddService />
      </div>
    </div>
  );
}
