import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { ChevronUp, ChevronDown } from "lucide-react";

const NumberInput = ({
  setFormData,
  formData,
  name,
  bgColor = "bg-[#242424]",
}) => {
  const [value, setValue] = useState(formData[name] || 0);

  const handleIncrement = () => {
    setFormData(name, value + 1);
    setValue((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setValue((prev) => (prev > 0 ? prev - 1 : 0));
    setFormData(name, value - 1);
  };

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setFormData(name, newValue);
    if (!isNaN(newValue)) {
      setValue(newValue);
    }
  };

  useEffect(() => {
    setValue(formData[name] || 0);
  }, [formData]);

  return (
    <div className="relative w-full">
      <Input
        type="text"
        value={value}
        name={name}
        onChange={handleChange}
        className={`pr-10  ${bgColor} border-[#242424] text-[#4F6374]`}
      />
      <div className="absolute inset-y-0 right-0 flex flex-col items-center justify-center space-y-1">
        <button
          type="button"
          onClick={handleIncrement}
          className="flex items-center justify-center w-6 h-6 text-gray-600 hover:text-black"
        >
          <ChevronUp color="#998256" className="h-5 w-5 opacity-100" />
        </button>
        <button
          type="button"
          onClick={handleDecrement}
          className="flex items-center justify-center w-6 h-6 text-gray-600 hover:text-black"
        >
          <ChevronDown color="#998256" className="h-5 w-5 opacity-100" />
        </button>
      </div>
    </div>
  );
};

export default NumberInput;
