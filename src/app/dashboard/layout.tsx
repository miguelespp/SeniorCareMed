"use client";

import NavBar from "@/components/navBar";
import { useState } from "react";
import Hydration from "@/app/dashboard/hydration"

export default function DashboardLayout({ children }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [altoContraste, setAltoContraste] = useState(false);

    const handleSwitchChange = () => {
        setAltoContraste(!altoContraste);
    };
    return (
        <div className="flex h-screen">
            <Hydration />
            <NavBar />
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}