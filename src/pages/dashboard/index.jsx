import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  useGetReportQuery,
  useGetStatsQuery,
} from "@/lib/services/vehicle-api";
import { CgWebsite } from "react-icons/cg";
import { FaCarSide, FaVideo, FaWrench } from "react-icons/fa";
import { useSelector } from "react-redux";

const analyticsData = [
  {
    title: "Total Vehicles",
    key: "totalVehicles",
    icon: FaCarSide,
    description: "Active vehicles in fleet",
    trend: "+12% from last month",
  },
  {
    title: "Total Requests",
    key: "totalOfferRequests",
    icon: FaWrench,
    description: "Services completed",
    trend: "+8% from last month",
  },
  {
    title: "Total Today Requests",
    key: "totalOfferRequestsToday",
    icon: FaVideo,
    description: "Training videos available",
    trend: "+23% from last month",
  },
  {
    title: "Total Visits",
    key: "totalVisits",
    icon: CgWebsite,
    description: "Total visits to the site",
    trend: "+23% from last month",
  },
];

export default function Dashboad() {
  const { data } = useGetStatsQuery();
  const { data: reportData } = useGetReportQuery();
  const user = useSelector((state) => state.auth.user);

  const stats = data?.data || {};

  const totalVisits = reportData?.data?.reduce((sum, row) => {
    return sum + parseInt(row.metricValues[0].value, 10);
  }, 0);

  return (
    <div className="space-y-3">
      <p className="text-2xl text-white tracking-widest font-semibold">
        Hi,
        <span className="text-primary tracking-widest">{user?.name}</span> 👋
      </p>

      <div className="p-6 bg-[#1D1D1D] rounded-md">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">
              Analytics Dashboard
            </h1>
            <p className="text-gray-400 mt-2">Overview of your key metrics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {analyticsData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-200 bg-[#242424]"
                >
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-400">
                      {item.title}
                    </CardTitle>
                    <IconComponent className="h-5 w-5 text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white mb-1">
                      {item.key === "totalVisits"
                        ? totalVisits
                        : stats[item.key]}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
