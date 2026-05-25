import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface CloudinaryImage {
  secure_url: string;
  public_id: string;
  width: number;
  height: number;
  created_at: string;
}

export async function getImagesFromFolder(
  folder: string,
  maxResults: number = 30
): Promise<CloudinaryImage[]> {
  try {
    const result = await cloudinary.search
      .expression(`folder:${folder}`)
      .sort_by("created_at", "desc")
      .max_results(maxResults)
      .execute();

    return result.resources.map(
      (resource: {
        secure_url: string;
        public_id: string;
        width: number;
        height: number;
        created_at: string;
      }) => ({
        secure_url: resource.secure_url,
        public_id: resource.public_id,
        width: resource.width,
        height: resource.height,
        created_at: resource.created_at,
      })
    );
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    return [];
  }
}
