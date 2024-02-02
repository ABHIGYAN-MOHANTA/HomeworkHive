import React from "react";
import Navbar from "@/components/navbar";

export default function page() {
  return (
    <main
      className="flex min-h-screen bg-center bg-cover flex-col items-center justify-between p-10"
      style={{ backgroundImage: "url('background/background5.jpg')" }}
    >
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 font-sans">
        <h1>Fake Attendance</h1>
      </div>
    </main>
  );
}
