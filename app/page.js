"use client"

import Files from "@/components/files";
import Header from "@/components/header";
import { useState } from "react";


export default function Home() {

  const [filterString, setfilterString] = useState("");
  return (
    <div className="h-screen">
      <Header filterString={filterString} setfilterString = {setfilterString}/>
      <Files filter={filterString}/>
    </div>
  );
}
