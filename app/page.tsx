"use client";

import { useState } from "react";
import IncidentList from "./components/IncidentList";

export default function Home() {
  const [selectedIncident, setSelectedIncident] = useState(null);

  return (
    <div className="flex h-screen">
      <div className="w-2/3 p-6 bg-[#1a2235]">
        <h1 className="text-white text-lg font-bold mb-4">Incident Player</h1>
        <div className="bg-black h-[300px] rounded-md text-gray-400 flex items-center justify-center">
          {selectedIncident ? (
            <video
              key={(selectedIncident as any).videoUrl}
              controls
              autoPlay
              className="w-full h-full object-contain"
            >
              <source src={(selectedIncident as any).videoUrl} type="video/mp4" />
            </video>
          ) : (
            "Select an incident to preview"
          )}
        </div>
      </div>
      <div className="w-1/3 bg-[#0e1627] overflow-y-auto">
        <IncidentList onSelect={setSelectedIncident} />
      </div>
    </div>
  );
}
