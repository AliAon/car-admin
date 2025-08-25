import SearchBar from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { LucideRefreshCw } from "lucide-react";
import React from "react";
import { AddVehicle } from "./add-vehicle";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

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
    <div className="flex flex-wrap items-center bg-[#242424] p-2 rounded justify-between gap-2 relative">
      <SearchBar
        totalResult={totalResult}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      <div className="absolute right-2 -top-5 bg-[#242424] p-2 rounded space-y-4">
        <div className="flex items-center gap-2">
          <Button className="text-white">
            <LucideRefreshCw /> Scrapping
          </Button>
          <AddVehicle />
        </div>
        {/* Filters  */}
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
