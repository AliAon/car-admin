import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectTrigger } from "@/components/ui/select";
import { useGetAllBrandsQuery } from "@/lib/services/vehicle-api";
import { CarFront, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useState } from "react";

const popularBrands = [
  { name: "Mercedes", logo: "/assets/svg/MERCEDES-BENZ logo.svg" },
  { name: "Volkswagen", logo: "/assets/svg/VOLVO logo.svg" },
  { name: "BMW", logo: "/assets/svg/BMW logo.svg" },
  { name: "Audi", logo: "/assets/svg/AUDI logo.svg" },
  { name: "Porsche", logo: "/assets/svg/PORSCHE logo.svg" },
  { name: "Ford", logo: "/assets/svg/FORD logo.svg" },
  { name: "Toyota", logo: "/assets/svg/TOYOTA logo.svg" },
  { name: "Honda", logo: "/assets/svg/FORD logo.svg" },
  { name: "Nissan", logo: "/assets/svg/SKODA logo.svg" },
  { name: "Hyundai", logo: "/assets/svg/VW logo.svg" },
];

export default function BrandSelector({ formData, setFormData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropdownOpen] = useState({});
  const { data: allBrands } = useGetAllBrandsQuery();

  const filteredBrands = allBrands?.data?.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDropdownToggle = (brandName) => {
    setIsDropdownOpen((prev) => ({ ...prev, [brandName]: !prev[brandName] }));
  };

  return (
    <div>
      <Select open={isOpen} onOpenChange={setIsOpen}>
        <SelectTrigger
          className="w-[200px] justify-between bg-zinc-900 border-[#998256] text-[#998256] hover:text-[#998256] hover:bg-zinc-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CarFront className="text-[#998256]" />
          {formData?.brand || "Select Brand"}
        </SelectTrigger>
        <SelectContent className="bg-[#1D1D1D] border-[#242424] text-[#4F6374] w-full">
          <div className="bg-[#242424] text-[#998256]">
            <div className="flex items-center justify-between gap-3 p-4 border-b border-zinc-700">
              <ChevronLeft className="h-5 w-5" />{" "}
              <h2 className="text-lg font-bold">Select Brand</h2>
              <div></div>
            </div>

            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#998256]" />
                <Input
                  placeholder="Marke suchen"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-transparent border-[#998256] text-[#998256] placeholder:text-[#998256] focus:border-[#998256]"
                />
              </div>
            </div>

            {/* Popular Brands */}
            {!searchTerm && (
              <div className="px-4 pb-4">
                <h3 className="text-sm font-medium mb-3 text-[#998256]">
                  Meistgesuchte Marken
                </h3>
                <div className="grid grid-cols-5 gap-2">
                  {popularBrands.slice(0, 10).map((brand) => (
                    <button
                      key={brand.name}
                      onClick={() => {
                        setFormData("brand", brand.name);
                        setIsOpen(false);
                      }}
                      className="aspect-square border border-[#998256] rounded-lg p-2 hover:border-[#998256] hover:bg-zinc-800 transition-colors"
                    >
                      <img
                        src={brand.logo || "/placeholder.svg"}
                        alt={brand.name}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* All Brands */}
            <div className="px-4 pb-4">
              <h3 className="text-sm font-medium mb-3 text-[#998256]">
                Alle Marken
              </h3>
              <div className="max-h-64 overflow-y-auto">
                {filteredBrands?.map((brand) => (
                  <div>
                    <button
                      key={brand.name}
                      className="w-full flex items-center justify-between py-3 px-2 hover:bg-zinc-800 rounded-md transition-colors group"
                    >
                      <div
                        onClick={() => {
                          setFormData("brand", brand.name);
                          setIsOpen(false);
                        }}
                        className="flex items-center gap-2 justify-between"
                      >
                        <span className="text-[#998256] font-medium">
                          {brand.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#998256] text-sm">
                          {brand.count}
                        </span>
                        <ChevronRight
                          className={`h-4 w-4 text-[#998256] group-hover:text-[#998256] transition duration-300 ${
                            isDropDownOpen[brand?._id] ? "rotate-90" : ""
                          }`}
                          onClick={() => handleDropdownToggle(brand?._id)}
                        />
                      </div>
                    </button>
                    {isDropDownOpen[brand._id] && (
                      <div>
                        <img
                          src={brand?.image}
                          alt={brand.name}
                          className="w-[60px] h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SelectContent>
      </Select>
    </div>
  );
}
