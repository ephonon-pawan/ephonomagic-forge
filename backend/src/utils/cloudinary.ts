import { Readable } from "stream";
import { UploadApiResponse } from "cloudinary";
import { cloudinary } from "../config/cloudinary";

export const uploadBufferToCloudinary = async (
  fileBuffer: Buffer,
  folder: string
): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "image" },
      (error, result) => {
        if (error || !result) {
          reject(error ?? new Error("Cloudinary upload failed"));
          return;
        }

        resolve(result);
      }
    );

    Readable.from([fileBuffer]).pipe(uploadStream);
  });
};
