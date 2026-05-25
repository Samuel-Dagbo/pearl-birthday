import { NextResponse } from "next/server";
import { getImagesFromFolder } from "@/lib/cloudinary";

export async function GET() {
  const images = await getImagesFromFolder("Pearl");
  return NextResponse.json(images);
}
