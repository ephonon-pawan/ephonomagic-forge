import { uploadBufferToCloudinary } from "../../utils/cloudinary";
import { ApiError } from "../../utils/ApiError";

export class MediaService {
  static async uploadImage(file?: Express.Multer.File) {
    if (!file) {
      throw new ApiError(400, "Image file is required");
    }

    const result = await uploadBufferToCloudinary(file.buffer, "ephonon-cms");

    return {
      url: result.secure_url,
      publicId: result.public_id
    };
  }
}
