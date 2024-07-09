'use client'
import React from 'react';
import Header from "@/components/Header";
import {usePathname} from "next/navigation";

function Layout({children}: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <Header/>
      {children}
    </>
  );
}

export default Layout;