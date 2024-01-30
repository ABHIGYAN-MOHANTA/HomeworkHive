import Image from "next/image";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="flex min-h-screen bg-center bg-cover flex-col items-center justify-between p-10"
      style={{
        backgroundImage: "url('background/background5.jpg')",
      }}
    >
      <Navbar />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg mt-10">
        <div className="hero min-w-full text-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 mb-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border bg-gray-200 p-4">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Unlock academic success with ease! Let our experts tackle your
                assignments while you focus on what truly matters. Get started
                today and experience the relief of stress-free studying!
              </p>
              <button className="btn btn-primary">
                <Link href="/services">Get Started</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
