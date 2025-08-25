import { SkeletonCard } from "@/components/card-skeleton";
import GalleryItem from "./gallery-item";
import PaginationRounded from "../../pagination";
export default function GalleryList({ imagesData, isLoading, page, setPage }) {
  return (
    <div>
      <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-10">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : imagesData?.data?.images?.map((item, index) => {
              return <GalleryItem key={index} item={item} />;
            })}
      </div>
      <div>
        <PaginationRounded
          onChange={(event, page) => setPage(page)}
          page={page}
          totalPages={imagesData?.data?.totalPages}
        />
      </div>
    </div>
  );
}
