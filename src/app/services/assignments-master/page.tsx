import React from "react";
import Navbar from "@/components/navbar";
import Timeline from "@/components/timeline";
import Cards from "@/components/cards";

export default function page() {
  return (
    <main
      className="flex min-h-screen bg-center bg-cover flex-col items-center justify-between p-10"
      style={{ backgroundImage: "url('background/background5.jpg')" }}
    >
      {/* Dark transparent blur overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 blur"></div>
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center justify-center mt-14 font-sans z-10">
        <div className="lg:w-1/3 lg:mr-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-white mb-8">
            Assignments Master
          </h1>
          <Timeline
            title1="Choose an Homework Hive Expert"
            title2="Submit the assignment"
            title3="The Expert accepts your request based on fully transparent negotiations"
            title4="The assignment is delivered to you"
            title5="You pay cash on delivery"
          />
        </div>
        <div className="lg:w-2/3 lg:ml-8 flex flex-wrap justify-center ">
          <Cards
            title="Naruto Uzumaki - ₹500"
            badge="New"
            desc="Are you bored of writing your own assignments? Ever wish you could delegate it to someone else? Look no further"
            tag1="Hot"
            tag2="Trending"
            pic="pic2.webp"
          />
          <Cards
            title="Monkey D Luffy - ₹500"
            badge="New"
            desc="Are you bored of writing your own assignments? Ever wish you could delegate it to someone else? Look no further"
            tag1="Hot"
            tag2="Trending"
            pic="pic2.webp"
          />
          <Cards
            title="Ichigo Kurasaki - ₹500"
            badge="New"
            desc="Are you bored of writing your own assignments? Ever wish you could delegate it to someone else? Look no further"
            tag1="Hot"
            tag2="Trending"
            pic="pic2.webp"
          />
          {/* Add more Cards components here */}
        </div>
      </div>
    </main>
  );
}
