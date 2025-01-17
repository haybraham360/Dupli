'use client'

import { AdminFooter } from "@/components/AdminFooter";
import { AdminNav } from "@/components/AdminNav";
// import { NavBar } from "@/components/NavBar";
// import { SideBar } from "@/components/SideBar";
// import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <main className="h-[100vh] w-full font-inter">
        <AdminNav />
          <div className="overflow-y-auto max-md:h-[75vh] px-20 max-md:px-4 max-sm:mx-4 my-2 pb-12">
            {children}
          </div>
        <AdminFooter />
    </main>
  );
}