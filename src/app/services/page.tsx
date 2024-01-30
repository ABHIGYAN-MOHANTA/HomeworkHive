import React from "react";
import Navbar from "@/components/navbar";
import Cards from "@/components/cards";
import Link from "next/link";

export default function page() {
  return (
    <main
      className="flex min-h-screen bg-center bg-cover flex-col items-center justify-between p-10"
      style={{ backgroundImage: "url('background/background5.jpg')" }}
    >
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 font-sans">
        <Link href="https://forms.gle/STNiazPGf7ZfRFKB7" target="_blank">
          <Cards
            title="Assignments Master - ₹500"
            badge="New"
            desc="Are you bored of writing your own assignments? Ever wish you could delegate it to someone else?"
            tag1="Hot"
            tag2="Trending"
            pic="pic2.webp"
          />
        </Link>
        <Cards
          title="Fake Attendance - ₹500"
          badge="1Week"
          desc="Ever been really busy with personal stuff, or out on a vacation, or just too lazy to attend classes?"
          tag1="1 week"
          tag2="Coming Soon"
          pic="pic3.avif"
        />
      </div>
    </main>
  );
}
