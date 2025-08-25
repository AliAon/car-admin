import { SkeletonCard } from "@/components/card-skeleton";
import VehicleVideoItem from "@/components/car-views/video-vehicle/video-list/video-item";
import PaginationRounded from "../../pagination";
export default function VideoList({ videoData, isLoading, page, setPage }) {
  return (
    <div>
      <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-10">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : videoData?.data?.videos?.map((item, index) => {
              return <VehicleVideoItem key={index} item={item} />;
            })}
      </div>
      <div>
        <PaginationRounded
          page={page}
          totalPages={videoData?.data?.totalPages}
          onChange={(event, page) => {
            setPage(page);
          }}
        />
      </div>
    </div>
  );
}
