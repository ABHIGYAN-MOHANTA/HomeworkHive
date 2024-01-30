import React from "react";
import Navbar from "@/components/navbar";

export default function page() {
  return (
    <main
      className="flex min-h-screen bg-center bg-cover flex-col items-center justify-between p-10"
      style={{ backgroundImage: "url('background/background5.jpg')" }}
    >
      <Navbar />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg mt-10">
        <p className="w-full text-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl borderbg-gray-200 p-4 dark:bg-zinc-800/30">
          At Homework Hive, we envision a world where education is accessible to
          everyone, regardless of their background or circumstances. We believe
          that every individual deserves the opportunity to unlock their full
          potential and achieve academic success. <br /> <br />
          Our vision is to revolutionize the way students approach learning by
          providing them with the support and resources they need to excel. We
          strive to create a platform where students can access high-quality
          educational assistance and personalized guidance to overcome
          challenges and reach their goals. <br />
          <br /> We are committed to fostering a community of learners who are
          empowered to take control of their education and pursue their passions
          with confidence. Through innovation, collaboration, and dedication, we
          aim to make a positive impact on the lives of students worldwide and
          inspire a lifelong love for learning.
        </p>
      </div>
    </main>
  );
}
