import MainLayout from "@/layouts/main";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout title="Home">
      <div className="flex flex-col min-h-screen relative">
        {/* Background stuff */}
        <div className="z-0 bg-hero absolute h-full w-full bg-center bg-cover"></div>
        <div className="z-10 bg-black absolute h-full w-full bg-opacity-80"></div>
        <div className="z-20 absolute h-full w-full flex items-center">
          <div className="h-full w-full flex items-center">
            <div className="flex flex-col items-center w-full space-y-8">
              <div className="space-y-4 px-2 lg:px-0">
                <h1 className="text-5xl font-semibold text-center">Wavy</h1>
                <p className="text-lg text-center">
                  Excuse Our Mess - Big Things Are Coming!
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center w-4/6 md:w-2/4 2xl:w-1/4">
                <div className="flex w-full py-0.5 px-0.5 rounded bg-rose-500 hover:bg-rose-600 transition ease-in-out hover:-translate-y-0.5 duration-200">
                  <a
                    className="w-full text-center text-lg font-semibold bg-rose-500 hover:bg-rose-600 duration-200 p-4 rounded"
                    href="https://invite.wavybot.com"
                  >
                    Invite
                  </a>
                </div>
                <div className="flex w-full py-0.5 px-0.5 rounded bg-white transition ease-in-out hover:-translate-y-0.5 duration-200">
                  <a
                    className="w-full text-center text-lg font-semibold bg-white text-black hover:bg-black hover:text-white duration-200 p-4 rounded"
                    href="https://discord.wavybot.com"
                  >
                    Support Server
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
