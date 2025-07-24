"use client";
import { useState, useEffect } from "react";
import { Incident } from "../types/incident";

export default function IncidentList({ onSelect }: { onSelect: (incident: Incident) => void }) {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    fetch("/api/incidents?resolved=false")
      .then((res) => res.json())
      .then((data) => setIncidents(data));
  }, []);

  const handleResolve = async (id:string) => {
    setIncidents((prev) => prev.filter((inc:Incident) => inc.id !== id));
    await fetch(`/api/incidents/${id}/resolve`, { method: "PATCH" });
  };

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-lg font-semibold">Unresolved Incidents</h2>
      { incidents && incidents.length > 0 &&
        incidents.map((incident:Incident) => (
        <div
          key={incident.id}
          className="bg-[#131a2d] p-3 rounded-lg hover:bg-[#1b233a] cursor-pointer"
          onClick={() => onSelect(incident)}
        >
          <div className="flex items-center gap-3">
            <img
              src={incident.thumbnailUrl}
              alt=""
              className="w-20 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <div className="text-sm text-gray-200">{incident.type}</div>
              <div className="text-xs text-gray-400">
                {incident.tsStart} - {incident.tsEnd}
              </div>
              <button
                className="mt-1 text-xs text-blue-400 hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  handleResolve(incident.id);
                }}
              >
                Resolve
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
