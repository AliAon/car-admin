import { Checkbox } from "@/components/ui/checkbox";
import UploadVideo from "./upload-video";
import SearchBar from "@/components/search-bar";
import { Label } from "@/components/ui/label";

export default function TopBar({
  totalResult,
  setSearchQuery,
  searchQuery,
  filters,
  setFilters,
  setPage,
}) {
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value ?? false }));
    setPage(1);
  };

  return (
    <div className="flex flex-wrap items-center p-2 rounded  justify-between bg-[#242424] gap-2 relative">
      <SearchBar
        totalResult={totalResult}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        title="Video-Showcase"
      />

      <div className="flex flex-col absolute right-2 -top-5 items-center gap-2 bg-[#242424] p-2 rounded">
        <UploadVideo />
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <Checkbox
              id="active"
              disabled={filters.inactive || filters.deleted}
              className="border border-[#998256]"
              checked={filters.active}
              onCheckedChange={(checked) =>
                handleFilterChange("active", checked)
              }
            />
            <Label className="text-white">Active</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="inactive"
              disabled={filters.active || filters.deleted}
              className="border border-[#998256]"
              checked={filters.inactive}
              onCheckedChange={(checked) =>
                handleFilterChange("inactive", checked)
              }
            />
            <Label className="text-white">Inactive</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="deleted"
              disabled={filters.active || filters.inactive}
              className="border border-[#998256]"
              checked={filters.deleted}
              onCheckedChange={(checked) =>
                handleFilterChange("deleted", checked)
              }
            />

            <Label className="text-white">Deleted</Label>
          </div>
        </div>
      </div>
    </div>
  );
}
