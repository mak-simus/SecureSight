
'use client';

import { useEffect, useState } from 'react';
import { Incident } from '../types/incident';

export default function CameraStrip({ currentCameraId }: { currentCameraId: string }) {
  const [thumbnails, setThumbnails] = useState<string[]>([]);

  useEffect(() => {
    const fetchOtherFeeds = async () => {
      const res = await fetch('/api/incidents?resolved=false');
      const all = await res.json();
      const others = all.filter((inc: Incident) => inc.cameraId !== currentCameraId).slice(0, 2);
      const othersThumbnails: string[] = others.map((inc: Incident) => inc.thumbnailUrl);
      setThumbnails(othersThumbnails);
    };

    fetchOtherFeeds();
  }, [currentCameraId]);

  return (
    <div className="flex gap-2">
      {thumbnails.map((item) => (
        <img
          key={item}
          src={item}
          alt="other"
          className="w-24 h-16 object-cover rounded shadow-md"
        />
      ))}
    </div>
  );
}
