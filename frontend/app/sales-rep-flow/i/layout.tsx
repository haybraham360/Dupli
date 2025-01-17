'use client'

import { NavBar } from "@/components/SRF/NavBar";
import { SideBar } from "@/components/SRF/SideBar";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [ activePage, setActivePage ] = useState<string>('dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className="flex h-screen w-full font-inter">
      <div className="flex w-full">
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} active={activePage} setActive={setActivePage} />
        <div className="flex size-full flex-col">
          <NavBar 
            toggleSidebar={toggleSidebar} 
            isSidebarOpen={isSidebarOpen} 
            active={activePage}
          />
          <div className="h-[87vh] max-md:h-full overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}