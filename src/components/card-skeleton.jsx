import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex sm:flex-row flex-col gap-4">
      <Skeleton className="sm:h-[125px] h-64 sm:w-[200px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 sm:w-[250px] w-full" />
        <Skeleton className="h-4 sm:w-[200px] w-[90%]" />
        <Skeleton className="h-4 sm:w-[200px]  w-[70%]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
