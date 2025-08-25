import React from "react";
import ServiceItem from "./service-item";
import PaginationRounded from "../../pagination";

const ServiceList = ({ services, page, setPage, totalPages }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {services?.map((service, index) => (
          <ServiceItem key={index} index={index} service={service} />
        ))}
      </div>
      <PaginationRounded
        onChange={(event, page) => setPage(page)}
        page={page}
        totalPages={totalPages}
      />
    </div>
  );
};

export default ServiceList;
