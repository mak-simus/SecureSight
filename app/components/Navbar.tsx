
"use client";

import { Home, Camera, Video, Bell, Users } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full h-16 bg-[#0e1627] text-white flex items-center justify-between px-6 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/logo.svg" alt="Logo" width={32} height={32} />
        <span className="text-lg font-semibold tracking-wide">SecureSight</span>
      </div>

      {/* Nav Links */}
      <div className="flex space-x-8 text-sm font-medium">
        <NavItem icon={<Home size={18} />} label="Dashboard" />
        <NavItem icon={<Camera size={18} />} label="Cameras" />
        <NavItem icon={<Video size={18} />} label="Scenes" />
        <NavItem icon={<Bell size={18} />} label="Incidents" />
        <NavItem icon={<Users size={18} />} label="Users" />
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-3">
        <div className="text-right text-sm">
          <p className="font-semibold">Makesh N R</p>
          <p className="text-gray-400 text-xs">makeshnr97@gmail.com</p>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-600">
          <Image src="/user.jpg" alt="User" width={40} height={40} />
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
      {icon}
      <span>{label}</span>
    </div>
  );
}
