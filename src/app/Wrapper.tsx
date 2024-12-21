"use client";

import { scrollIntoView } from "@/ulits/scrollIntoView";
import React, { useEffect } from "react";

function Wrapper({ children }: any) {
  const checkUrlHash = () => {
    const values = window.innerWidth >= 700 ? 0.3 : 0.3;
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      scrollIntoView(hash, 0.3);
    }
  };
  useEffect(() => {
    checkUrlHash();

    const handleHashChange = () => {
      checkUrlHash();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return children;
}

export default Wrapper;
