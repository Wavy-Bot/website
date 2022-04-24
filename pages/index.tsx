import type { NextPage } from 'next';
import Layout from "../layouts/layout";
import Link from "next/link";
import { PuzzleIcon, CubeTransparentIcon, QuestionMarkCircleIcon, CollectionIcon } from "@heroicons/react/outline";
import { FetchContributors } from "../lib/swr";

const Home: NextPage = () => {
    const slogans = ["blazing-fast", "multipurpose", "free-to-use", "open-source"];
    let slogan = slogans[Math.floor(Math.random() * slogans.length)];

    const { data, isLoading, isError } = FetchContributors();

    return (
        <Layout title={""}>
            <div>
                <div className="container mx-auto flex px-5 py-12 md:py-24 pb-24 md:pb-0 md:flex-row flex-col-reverse items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mt-6 md:mt-0 mb-16 md:mb-0 items-center text-center">
                        <h1 className="text-4xl text-center md:text-7xl md:text-left mb-4 font-bold">
                            The {slogan}
                            <br className="inline-block" />
                            Discord bot.
                        </h1>
                        <div className="flex gap-4 text-center">
                            <a href="https://invite.wavybot.com" className="bg-amber-500 hover:bg-amber-400 text-gray-100 hover:text-white duration-200 py-2 px-6 rounded text-lg" rel="noopener noreferrer">Invite to server</a>
                            <Link href="#features">
                                <a className="bg-gray-800 hover:bg-gray-700 py-2 px-6 rounded text-lg">Features</a>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            src="https://dummyimage.com/720x600"
                            className="object-cover object-center rounded"
                            loading="lazy"
                            alt="something"
                        />
                    </div>
                </div>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 319"
                className="fill-amber-500"
            >
                <path fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
            </svg>
            <div id="features" className="text-gray-900 bg-amber-500 text-center pt-6 pb-32">
                <div className="container px-5 mx-auto flex flex-wrap gap-20">
                    <div className="grid justify-items-center w-full">
                        <QuestionMarkCircleIcon className="w-16 h-16"/>
                        <h1 className="sm:text-5xl text-4xl font-bold mb-4">Why choose Wavy?</h1>
                    </div>
                </div>
            </div>
            <div id="customizable" className="text-gray-900 bg-amber-500 text-center pt-6 pb-32">
                <div className="container px-5 mx-auto flex flex-wrap gap-5">
                    <div className="grid justify-items-center w-full">
                        <PuzzleIcon className="w-16 h-16"/>
                        <h2 className="title-font font-medium sm:text-4xl text-3xl mb-4">Customizable</h2>
                        <p className="title-font font-medium sm:text-xl text-lg mb-4">Whether you want to welcome new members to your server, or play music while gaming with your friends - Wavy can be set up how you like.</p>
                    </div>
                    <div className="w-full grid gap-6 grid-cols-1 xl:grid-cols-3">
                        <div className="grid justify-items-center gap-3 px-4 py-6 border-2 border-gray-900 rounded">
                            <CubeTransparentIcon className="w-12 h-12"/>
                            <h2 className="title-font font-medium text-3xl">Lorem ipsum</h2>
                            <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                        </div>
                        <div className="grid justify-items-center gap-3 px-4 py-6 border-2 border-gray-900 rounded">
                            <CubeTransparentIcon className="w-12 h-12"/>
                            <h2 className="title-font font-medium text-3xl">Lorem ipsum</h2>
                            <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                        </div>
                        <div className="grid justify-items-center gap-3 px-4 py-6 border-2 border-gray-900 rounded">
                            <CubeTransparentIcon className="w-12 h-12"/>
                            <h2 className="title-font font-medium text-3xl">Lorem ipsum</h2>
                            <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="open-source" className="text-gray-900 bg-amber-500 text-center pt-6 pb-32">
                <div className="container px-5 mx-auto flex flex-wrap gap-20">
                    <div className="grid justify-items-center w-full">
                        <CubeTransparentIcon className="w-16 h-16"/>
                        <h2 className="title-font font-medium sm:text-4xl text-3xl mb-4">Open-source</h2>
                        <p className="title-font font-medium sm:text-xl text-lg mb-4">The community should be able to openly and transparently make changes, and features shouldn&apos;t be locked behind a paywall.</p>
                        {
                            isLoading ? <>
                                <div className="flex justify-center">
                                    <div className="spinner-border text-gray-900" role="status">
                                        <p>{isError ? <>Error loading contributors...</> : <>Loading contributors...</>}</p>
                                    </div>
                                </div>
                            </> : <>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        data.map(function (contributor: { login: string; avatar_url: string; html_url: string; type: string; }) {
                                            if (contributor.type !== "Bot") {
                                                return (
                                                    <div key={contributor.login}
                                                         className="relative h-11 w-11 lg:h-16 lg:w-16">
                                                        <a href={contributor.html_url} target="_blank"
                                                           rel="noopener noreferrer">
                                                            <img src={contributor.avatar_url} alt={contributor.login}
                                                                 className="w-full h-full rounded-full"/>
                                                        </a>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            <div id="tools" className="text-gray-900 bg-amber-500 text-center pt-6 pb-32">
                <div className="container px-5 mx-auto flex flex-wrap gap-5">
                    <div className="grid justify-items-center w-full">
                        <CollectionIcon className="w-16 h-16"/>
                        <h2 className="title-font font-medium sm:text-4xl text-3xl mb-4">Built with the best</h2>
                    </div>
                    <div className="w-full grid gap-6 grid-cols-2 xl:grid-cols-4">
                        <a href="https://pycord.dev/" rel="noopener noreferrer" className="grid justify-items-center gap-3 px-4 py-6 bg-gray-900 hover:bg-gray-800 rounded">
                            <img src="/logos/pycord.webp" loading="lazy" className="lg:max-h-24 max-h-12 m-auto" />
                        </a>
                        <a href="https://www.jetbrains.com/pycharm/" rel="noopener noreferrer" className="grid justify-items-center gap-3 px-4 py-6 bg-gray-900 hover:bg-gray-800 rounded">
                            <img src="/logos/pycharm.webp" loading="lazy" className="lg:h-24 h-12 m-auto" />
                        </a>
                        <a href="https://mongodb.com" rel="noopener noreferrer" className="grid justify-items-center gap-3 px-4 py-6 bg-gray-900 hover:bg-gray-800 rounded">
                            <img src="/logos/mongodb.webp" loading="lazy" className="lg:max-h-24 max-h-12 m-auto" />
                        </a>
                        <a href="https://deepsource.io" rel="noopener noreferrer" className="grid justify-items-center gap-3 px-4 py-6 bg-gray-900 hover:bg-gray-800 rounded">
                            <img src="/logos/deepsource.webp" loading="lazy" className="lg:max-h-24 max-h-12 m-auto" />
                        </a>
                        <div className="hidden xl:grid"></div>
                        <a href="https://sentry.io" rel="noopener noreferrer" className="grid justify-items-center gap-3 px-4 py-6 bg-gray-900 hover:bg-gray-800 rounded">
                            <img src="/logos/sentry.webp" loading="lazy" className="lg:max-h-24 max-h-12 m-auto" />
                        </a>
                        <a href="https://github.com/Devoxin/Lavalink.py" rel="noopener noreferrer" className="grid justify-items-center gap-3 px-4 py-6 bg-gray-900 hover:bg-gray-800 rounded">
                            <img src="/logos/lavalink-py.webp" loading="lazy" className="lg:max-h-24 max-h-12 m-auto" />
                        </a>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-amber-500">
                <path fillOpacity="1" d="M0,160L21.8,138.7C43.6,117,87,75,131,48C174.5,21,218,11,262,21.3C305.5,32,349,64,393,96C436.4,128,480,160,524,170.7C567.3,181,611,171,655,144C698.2,117,742,75,785,69.3C829.1,64,873,96,916,106.7C960,117,1004,107,1047,96C1090.9,85,1135,75,1178,112C1221.8,149,1265,235,1309,256C1352.7,277,1396,235,1418,213.3L1440,192L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z" />
            </svg>
            <div id="discord" className="text-center pt-6 xl:pt-0 pb-32">
                <div className="container px-5 mx-auto flex flex-wrap gap-6">
                    <div className="flex flex-col text-center w-full gap-3">
                        <h1 className="sm:text-5xl text-4xl font-bold title-font">Getting Started</h1>
                        <p className="title-font font-medium text-2xl mb-4">Invite the Discord bot made for you, by you.</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <Link href="https://invite.wavybot.com">
                            <a className="bg-amber-500 hover:bg-amber-400 text-gray-100 hover:text-white duration-200 py-4 px-10 rounded text-xl" rel="noopener noreferrer">Invite to server</a>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home;
