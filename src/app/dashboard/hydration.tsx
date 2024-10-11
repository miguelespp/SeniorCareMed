"use client";

import { useEffect } from "react";
import { useConfig } from "@/hooks/config";
import useCitaStore from "@/hooks/data/citas";

const Hydration = () => {

    useEffect(() => {
        useConfig.persist.rehydrate();
        useCitaStore.persist.rehydrate();
    }, []);

    return null;
};

export default Hydration;