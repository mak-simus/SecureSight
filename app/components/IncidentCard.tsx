// components/IncidentCard.tsx
import React from 'react';
import { Incident } from '../types/incident';

const typeColors: Record<string, string> = {
  'Unauthorised Access': 'bg-red-500',
  'Gun Threat': 'bg-yellow-500',
  'Face Recognised': 'bg-blue-500',
};

export default function IncidentCard({ incident, onResolve }: { incident: Incident, onResolve: () => void }) {
  const { type, tsStart, tsEnd, camera, thumbnailUrl } = incident;
  const color = typeColors[type] || 'bg-gray-500';

  return (
    <div className="flex items-center gap-4 p-4 bg-white shadow rounded-md">
      <img src={thumbnailUrl} alt="thumb" className="w-24 h-16 object-cover rounded" />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${color}`} />
          <span className="font-semibold">{type}</span>
        </div>
        <div className="text-sm text-gray-500">{camera?.location || 'Unknown Location'}</div>
        <div className="text-xs text-gray-400">{new Date(tsStart).toLocaleTimeString()} - {new Date(tsEnd).toLocaleTimeString()}</div>
      </div>
      <button
        onClick={onResolve}
        className="text-sm px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Resolve
      </button>
    </div>
  );
}
