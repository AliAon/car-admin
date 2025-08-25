import { licenseCategories, vehicleData } from "@/data";
import NumberInput from "../../../../../number-input";
import { Input } from "../../../../../ui/input";
import { Label } from "../../../../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../ui/select";
import BrandSelector from "../../../vehicle-list/vehicle-item/brand-selector";

export default function Step1Form({ handleChange, formData, setFormData }) {
  return (
    <div>
      <h2 className="text-white text-xl">Create vehicle</h2>
      <div className="grid grid-cols-2 gap-10 my-4 mx-4 ">
        <div className="flex flex-col gap-4">
          {/* brand  */}

          <div>
            <BrandSelector formData={formData} setFormData={setFormData} />
          </div>
          {/* model  */}
          <div>
            <Label className="text-white mt-4">
              Modell <span className="text-[#998256]">*</span>
            </Label>
            <Input
              type="text"
              onChange={handleChange}
              name="model"
              value={formData?.model}
              placeholder="Enter model"
              className="bg-[#242424] border-[#242424] text-[#4F6374]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* body type  */}
            <div>
              <Label className="text-white mt-4">
                Body Type <span className="text-[#998256]">*</span>
              </Label>
              <Select
                onValueChange={(value) => setFormData("bodyType", value)}
                name="bodyType"
                className="bg-[#242424]"
                value={formData?.bodyType}
              >
                <SelectTrigger className=" bg-[#242424] border-[#242424] text-[#4F6374]">
                  <SelectValue placeholder="BodyType" />
                </SelectTrigger>
                <SelectContent className="bg-[#242424] text-[#4F6374]">
                  {vehicleData.bodyTypes.map((type) => (
                    <SelectItem value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* fuel type  */}
            <div>
              <Label className="text-white mt-4">
                Fuel Type <span className="text-[#998256]">*</span>
              </Label>
              <Select
                onValueChange={(value) => setFormData("fuelType", value)}
                name="fuelType"
                className="bg-[#242424]"
                value={formData?.fuelType}
              >
                <SelectTrigger className="bg-[#242424] border-[#242424] text-[#4F6374]">
                  <SelectValue placeholder="Select fuel type" />
                </SelectTrigger>
                <SelectContent className="bg-[#242424] text-[#4F6374]">
                  {vehicleData.fuelTypes.map((type) => (
                    <SelectItem value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Transimission */}
          <div>
            <Label className="text-white mt-4">
              Transimission <span className="text-[#998256]">*</span>
            </Label>
            <Select
              onValueChange={(value) => setFormData("transmission", value)}
              name="transmission"
              className="bg-[#242424]"
              value={formData?.transmission}
            >
              <SelectTrigger className="w-full bg-[#242424] border-[#242424] text-[#4F6374]">
                <SelectValue placeholder="Select a Option" />
              </SelectTrigger>
              <SelectContent className="bg-[#242424] text-[#4F6374]">
                {vehicleData.transmissions.map((transmission) => (
                  <SelectItem value={transmission}>{transmission}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Driver Type */}
          <div>
            <Label className="text-white mt-4">
              Drive Type <span className="text-[#998256]">*</span>
            </Label>
            <Select
              onValueChange={(value) => setFormData("driveType", value)}
              name="driveType"
              className="bg-[#242424]"
              value={formData?.driveType}
            >
              <SelectTrigger className="w-full bg-[#242424] border-[#242424] text-[#4F6374]">
                <SelectValue placeholder="Select a Option" />
              </SelectTrigger>
              <SelectContent className="bg-[#242424] text-[#4F6374]">
                {vehicleData.driverTypes.map((driver) => (
                  <SelectItem value={driver}>{driver}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Number of Gears */}
            <div>
              <Label className="text-white mt-4">Number of Gears</Label>
              <NumberInput
                setFormData={setFormData}
                formData={formData}
                name={"numberofGears"}
              />
            </div>

            {/* Cylinders */}
            <div>
              <Label className="text-white mt-4">Cylinders</Label>
              <NumberInput
                setFormData={setFormData}
                formData={formData}
                name={"cylinders"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <Label className="text-white mt-4">Doors</Label>
              <NumberInput
                setFormData={setFormData}
                formData={formData}
                name={"doors"}
              />
            </div>
            {/* Seats Number Input*/}
            <div>
              <Label className="text-white mt-4">Seats</Label>
              <NumberInput
                setFormData={setFormData}
                formData={formData}
                name={"seats"}
              />
            </div>
            {/* Engine Power (kW)  Number Input*/}
            <div>
              <Label className="text-white mt-4">Engine Power (Ps)</Label>
              <NumberInput
                setFormData={setFormData}
                formData={formData}
                name={"enginePower"}
              />
            </div>
            {/*Engine Displacement (ccm) Number Input*/}
            <div>
              <Label className="text-white mt-4">Cubic capacity</Label>
              <NumberInput
                setFormData={setFormData}
                formData={formData}
                name={"cubicCapacity"}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 mt-5">
            <div>
              <Label className="text-white mt-4">
                date of first registration{" "}
                <span className="text-[#998256]">*</span>
              </Label>
              <div className="relative inline-block w-full">
                <input
                  type="month"
                  onChange={handleChange}
                  name="dateFirstRegistrationB"
                  className="bg-[#242424] w-full border-[#242424] text-[#4F6374] p-2 rounded-lg pl-10"
                  value={
                    formData?.dateFirstRegistrationB
                      ? formData.dateFirstRegistrationB.slice(0, 7)
                      : ""
                  }
                />

                <img
                  src="/assets/svg/date-icon.svg"
                  className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>
            </div>
            {/* License category  */}
            <div>
              <Label className="text-white mt-4">License category</Label>
              <Select
                onValueChange={(value) => setFormData("licenseCategory", value)}
                name="licenseCategory"
                className="bg-[#242424]"
                value={formData?.licenseCategory}
              >
                <SelectTrigger className="w-full bg-[#242424] border-[#242424] text-[#4F6374]">
                  <SelectValue placeholder="B" />
                </SelectTrigger>
                <SelectContent className="bg-[#242424] text-[#4F6374]">
                  {licenseCategories.map((cat) => (
                    <SelectItem value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-5">
            {/* Engine Category Select*/}
            <Label name="engineType" className="text-white mt-4">
              Engine type
            </Label>
            <Select
              onValueChange={(value) => setFormData("engineType", value)}
              name="engineType"
              value={formData?.engineType}
            >
              <SelectTrigger className="bg-[#242424] border-[#242424] text-[#4F6374] w-full">
                <SelectValue placeholder="Reihe" />
              </SelectTrigger>
              <SelectContent className="bg-[#242424] border-[#242424] text-[#4F6374]">
                {vehicleData.engineCategory.map((engineType) => (
                  <SelectItem value={engineType}>{engineType}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-5 ">
            {/* Engine Code 10 Input*/}
            <div>
              <Label className="text-white mt-4">Total weight (kg)</Label>
              <NumberInput
                setFormData={setFormData}
                formData={formData}
                name={"totalWeight"}
              />
            </div>

            <div>
              <Label className="text-white mt-4">
                {" "}
                Towing capacity (kg), braked
              </Label>
              <NumberInput
                setFormData={setFormData}
                formData={formData}
                name={"towingCapacity"}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              {/*Type Approval Input*/}
              <Label className="text-white mt-4">Empty weight (kg)</Label>
              <NumberInput
                setFormData={setFormData}
                formData={formData}
                name={"emptyWeight"}
              />
            </div>
            <div>
              {/*Type Approval Input*/}
              <Label className="text-white mt-4">Load Capacity</Label>
              <NumberInput
                setFormData={setFormData}
                formData={formData}
                name={"loadCapacity"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
