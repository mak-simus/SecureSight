import React from 'react';
import CameraStrip from './CameraStrip';
import { Incident } from '../types/incident';

export default function IncidentPlayer({ incident }: { incident: Incident }) {
    if (!incident) {
        return (
            <div className="h-80 bg-black text-gray-500 flex items-center justify-center rounded-md">
                Select an incident to preview
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="w-full h-80 bg-black rounded-md flex items-center justify-center overflow-hidden relative">
                <img
                    src="/thumbnails/thumb2.jpg"
                    alt="video frame"
                    className="h-full object-contain absolute z-0 opacity-30"
                />
                
            </div>

            <CameraStrip currentCameraId={incident.cameraId} />
        </div>
    );
}

