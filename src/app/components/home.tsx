"use client";

import { useState } from "react";
import QRCodeComponent from "./qrcode";
import { Input } from "@headlessui/react";

export default function Home() {
  const [text, setText] = useState("Enter text here");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center ">
      <Input
        className="text-black w-64 h-10 mb-12 border-4 dark:bg-black border-black dark:border-white dark:text-white px-4 py-8"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></Input>

      <QRCodeComponent text={text}></QRCodeComponent>
    </div>
  );
}
