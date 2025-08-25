import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Slide, toast } from "react-toastify";
import Loader from "@/common/loader";

export default function GenericDeleteDialog({
  isOpen,
  setIsOpen,
  item,
  deleteAction,
  entityName = "item",
}) {
  const [deleteItem, { isLoading }] = deleteAction || [];
  const enetity = () => {
    if (item?.brand && item?.model) {
      return `${item.brand} ${item.model}`;
    } else if (item?.name) {
      return item.name;
    } else if (item?.title) {
      return item.title;
    }
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-[#1D1D1D] w-[400px] border-[#1D1D1D] text-white">
        <DialogHeader>
          <DialogTitle className="text-white tracking-widest">
            {entityName} delete?
          </DialogTitle>
          <DialogDescription className="text-white py-2">
            Möchtest du das {enetity()} wiederherstellen?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className={"flex gap-4"}>
          <Button
            type="button"
            variant="primary"
            className="bg-primary w-full"
            onClick={async () => {
              const id = item._id;
              try {
                await deleteItem(id).unwrap();
                toast.warning(`${entityName} deleted successfully.`);
                setIsOpen(false);
              } catch (error) {
                toast.error(
                  error?.data?.message || `Failed to delete ${entityName}.`
                );
              }
            }}
          >
            {isLoading ? (
              <div className="text-center flex gap-2 justify-center mx-auto items-center">
                <Loader color="#00132f" /> <span>Loading...</span>
              </div>
            ) : (
              "Delete"
            )}
          </Button>
          <Button
            type="button"
            variant="default"
            onClick={() => setIsOpen(false)}
            className="mr-2 bg-white text-[#4F6374] w-full"
          >
            Abbrechen
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
