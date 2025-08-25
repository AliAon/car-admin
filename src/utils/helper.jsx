import { format } from "date-fns";
import toast from "react-hot-toast";
export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON?.parse(user) : null;
};

export const dateFormated = (date) => {
  return format(new Date(date), "dd MMMM");
};

export function extractBulletPoints(content) {
  return content
    .split(".")
    .map((point) => point.trim())
    .filter((point) => point.length > 0);
}

export const validateImageDimensions = (file, isFeatured = false) => {
  console.log("Hello from validateImageDimensions", file, isFeatured);
  const REQUIRED_WIDTH = 828;
  const REQUIRED_HEIGHT = 536;
  const FEATURED_WIDTH = 700;
  const FEATURED_HEIGHT = 722;

  const width = isFeatured ? FEATURED_WIDTH : REQUIRED_WIDTH;
  const height = isFeatured ? FEATURED_HEIGHT : REQUIRED_HEIGHT;
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      if (img.width === width && img.height === height) {
        resolve(true);
      } else {
        reject(
          new Error(
            `Image dimensions must be ${REQUIRED_WIDTH}x${REQUIRED_HEIGHT}px. Provided: ${img.width}x${img.height}`
          )
        );
        toast.error(
          `Image dimensions must be ${
            isFeatured ? FEATURED_WIDTH : REQUIRED_WIDTH
          }x${isFeatured ? FEATURED_HEIGHT : REQUIRED_HEIGHT}px. Provided: ${
            img.width
          }x${img.height}`
        );
      }
    };
    img.onerror = () => reject(new Error("Invalid image file"));
    img.src = URL.createObjectURL(file);
  });
};

export const validateVideoDimensions = (file) => {
  const REQUIRED_WIDTH = 404;
  const REQUIRED_HEIGHT = 720;

  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.preload = "metadata";

    video.onloadedmetadata = () => {
      window.URL.revokeObjectURL(video.src);
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      if ((videoWidth === REQUIRED_WIDTH || 576) && (videoHeight === REQUIRED_HEIGHT || 1024)) {
        resolve(true);
      } else {
        const message = `Video dimensions must be ${REQUIRED_WIDTH}x${REQUIRED_HEIGHT}px. Provided: ${videoWidth}x${videoHeight}`;
        toast.error(message);
        reject(new Error(message));
      }
    };

    video.onerror = () => {
      reject(new Error("Invalid video file"));
      toast.error("Invalid video file");
    };

    video.src = URL.createObjectURL(file);
  });
};
