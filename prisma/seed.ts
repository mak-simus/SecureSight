import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const cameras = await prisma.camera.createMany({
    data: [
      { name: "Shop Floor A", location: "First Floor" },
      { name: "Vault", location: "Ground Floor" },
      { name: "Entrance", location: "Main Gate" }
    ]
  });

  await prisma.incident.createMany({
    data: [
      {
        cameraId: "cmdetu1uv0000tv54evyjjmxx",
        type: "Unauthorised Access",
        tsStart: new Date("2025-07-21T14:35:00"),
        tsEnd: new Date("2025-07-21T14:37:00"),
        resolved: false,
        thumbnailUrl: "/thumbnails/thumb1.jpg"
      },
      {
        cameraId: "cmdetu1uy0001tv545r7cdwhj",
        type: "Gun Threat",
        tsStart: new Date("2025-07-21T15:00:00"),
        tsEnd: new Date("2025-07-21T15:10:00"),
        resolved: false,
        thumbnailUrl: "/thumbnails/thumb2.jpg",
        videoUrl: "https://eaxmxngkzgvctnwisabu.supabase.co/storage/v1/object/public/secure-sight//sample.mp4"
      },
      {
        cameraId: "cmdetu1uy0002tv54860e9eex",
        type: "Face Recognised",
        tsStart: new Date("2025-07-21T16:45:00"),
        tsEnd: new Date("2025-07-21T16:46:00"),
        resolved: false,
        thumbnailUrl: "/thumbnails/thumb3.jpg",
        videoUrl: "https://eaxmxngkzgvctnwisabu.supabase.co/storage/v1/object/public/secure-sight//sample2.mp4"
      },
      {
        cameraId: "cmdetu1uy0001tv545r7cdwhj",
        type: "Face Recognised",
        tsStart: new Date("2025-07-21T16:45:00"),
        tsEnd: new Date("2025-07-25T16:46:00"),
        resolved: false,
        thumbnailUrl: "/thumbnails/thumb4.jpg",
        videoUrl: "https://eaxmxngkzgvctnwisabu.supabase.co/storage/v1/object/public/secure-sight//sample.mp4"
      },
      {
        cameraId: "cmdetu1uy0001tv545r7cdwhj",
        type: "Face Recognised",
        tsStart: new Date("2025-07-25T16:45:00"),
        tsEnd: new Date("2025-07-28T16:46:00"),
        resolved: false,
        thumbnailUrl: "/thumbnails/thumb5.jpg",
        videoUrl: "https://eaxmxngkzgvctnwisabu.supabase.co/storage/v1/object/public/secure-sight//sample2.mp4"
      }
      // Add 10+ more incidents with realistic timestamps
    ]
  });
}

main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(() => {
  prisma.$disconnect();
});
