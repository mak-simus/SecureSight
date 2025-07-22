// components/IncidentPlayer.tsx
import React from 'react';
import CameraStrip from './CameraStrip';

export default function IncidentPlayer({ incident }: { incident: any }) {
  if (!incident) {
    return (
      <div className="h-80 bg-black text-gray-500 flex items-center justify-center rounded-md">
        Select an incident to preview
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="w-full h-80 bg-black rounded-md flex items-center justify-center overflow-hidden">
        <img src={incident.thumbnailUrl} alt="video frame" className="h-full object-contain" />
      </div>

      <CameraStrip currentCameraId={incident.cameraId} />
    </div>
  );
}
