'use client'

import { NavBar } from "@/components/NavBar";
import { SideBar } from "@/components/SideBar";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className="flex h-screen w-full font-inter">
      <div className="flex w-full">
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex size-full flex-col">
          <NavBar 
            toggleSidebar={toggleSidebar} 
            isSidebarOpen={isSidebarOpen} 
          />
          <div className="h-[84vh] max-md:h-full overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}