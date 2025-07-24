
'use client';

import { useEffect, useState } from 'react';

export default function CameraStrip({ currentCameraId }: { currentCameraId: string }) {
  const [thumbnails, setThumbnails] = useState<any[]>([]);

  useEffect(() => {
    const fetchOtherFeeds = async () => {
      const res = await fetch('/api/incidents?resolved=false');
      const all = await res.json();
      const others = all.filter((inc: any) => inc.cameraId !== currentCameraId).slice(0, 2);
      setThumbnails(others);
    };

    fetchOtherFeeds();
  }, [currentCameraId]);

  return (
    <div className="flex gap-2">
      {thumbnails.map((item) => (
        <img
          key={item.id}
          src={item.thumbnailUrl}
          alt="other"
          className="w-24 h-16 object-cover rounded shadow-md"
        />
      ))}
    </div>
  );
}
