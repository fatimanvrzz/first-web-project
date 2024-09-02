import React, { ReactElement, useState } from "react";

type ServiceData = {
    Title: string;
    Description: string;
    IconUrl: string;
};

type PricingData = {
    Title: string;
    IconUrl: string;
    Services: string[];
    Price: number;
};

type AppointmentData = {
    Placeholder: string;
    IconUrl: string;
    IconAltText: string;
};

type WhatOurClientSay = {
    ImageUrl: string;
    Title: string;
    Description: string;
};

type LinkBoxData = {
    Title: string;
    Links: {
        Text: string;
        Link: string;
    }[]
};

type IconBoxData = {
    Link: string;
    Icon: ReactElement;
}

const IndexPage: React.FC = () => {
    const [activeServiceIndex, serActiveServiceIndex] = useState(0);

    const appointments: AppointmentData[] = [
        {
            Placeholder: "Choose Your Location",
            IconUrl: "https://zcube.in/hitup/img/bg/ad-icon1.png",
            IconAltText: "LocationIcon",
        },
        {
            Placeholder: "Choose Visiting Date",
            IconUrl: "https://zcube.in/hitup/img/bg/ad-icon2.png",
            IconAltText: "DateIcon",
        },
        {
            Placeholder: "Choose Your Gym",
            IconUrl: "https://zcube.in/hitup/img/bg/ad-icon3.png",
            IconAltText: "DumbellIcon",
        },
        {
            Placeholder: "Choose Your Gym Coach",
            IconUrl: "https://zcube.in/hitup/img/bg/ad-icon4.png",
            IconAltText: "PersonIcon",
        },
    ];

    const services: ServiceData[] = [
        {
            Title: "Yoga",
            Description: "Nam pellentesque, velit at sodales elementum, neque metus ultricies justo, eget varius diam justo ac ante.",
            IconUrl: "https://zcube.in/hitup/img/bg/s-icon1.png",
        },
        {
            Title: "Dance",
            Description: "Nam pellentesque, velit at sodales elementum, neque metus ultricies justo, eget varius diam justo ac ante.",
            IconUrl: "https://zcube.in/hitup/img/bg/s-icon2.png",
        },
        {
            Title: "Fitness",
            Description: "Nam pellentesque, velit at sodales elementum, neque metus ultricies justo, eget varius diam justo ac ante.",
            IconUrl: "https://zcube.in/hitup/img/bg/s-icon3.png",
        },
        {
            Title: "Health",
            Description: "Nam pellentesque, velit at sodales elementum, neque metus ultricies justo, eget varius diam justo ac ante.",
            IconUrl: "https://zcube.in/hitup/img/bg/s-icon4.png",
        },
    ];

    const prices: PricingData[] = [
        {
            Title: "BROWNS",
            IconUrl: "https://zcube.in/hitup/img/bg/price-icon1.png",
            Services: [
                "Personal Trainer",
                "Service Locker Room",
                "Fitness Assessment",
                "Morning Slot",
                "Yoga Classes",
                "Health Checkup",
            ],
            Price: 25.99,
        },
        {
            Title: "SILVER",
            IconUrl: "https://zcube.in/hitup/img/bg/price-icon2.png",
            Services: [
                "Personal Trainer",
                "Service Locker Room",
                "Fitness Assessment",
                "Morning Slot",
                "Yoga Classes",
                "Health Checkup",
            ],
            Price: 99.99,
        },
        {
            Title: "GOLD",
            IconUrl: "https://zcube.in/hitup/img/bg/price-icon3.png",
            Services: [
                "Personal Trainer",
                "Service Locker Room",
                "Fitness Assessment",
                "Morning Slot",
                "Yoga Classes",
                "Health Checkup",
            ],
            Price: 149.99,
        },
    ];

    const client: WhatOurClientSay[] = [
        {
            ImageUrl: "https://zcube.in/hitup/img/blog/blog_img01.jpg",
            Title: "Praesent justo mauris, tincidunt vitae nisi ultricies.",
            Description: "Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum.",
        },
        {
            ImageUrl: "https://zcube.in/hitup/img/blog/blog_img02.jpg",
            Title: "Monthly eraesent justo mauris, vitae nisi ultricies.",
            Description: "Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum.",
        },
        {
            ImageUrl: "https://zcube.in/hitup/img/blog/blog_img03.jpg",
            Title: "User Experience Psychology And Performance Smashing.",
            Description: "Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum.",
        },
    ];

    const IconBoxes: IconBoxData[] = [
        {
            Link: "/",
            Icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                </svg>
        },
        {
            Link: "/",
            Icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
        },
        {
            Link: "/",
            Icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                </svg>
        },
        {
            Link: "/",
            Icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                </svg>
        },
    ];

    const LinkBoxes: LinkBoxData[] = [
        {
            Title: "Our Links",
            Links: [
                {
                    Link: "/",
                    Text: "Partners",
                },
                {
                    Link: "/",
                    Text: "About Us",
                },
                {
                    Link: "/",
                    Text: "Career",
                },
                {
                    Link: "/",
                    Text: "Reviews",
                },
                {
                    Link: "/",
                    Text: "Terms & Conditions",
                },
                {
                    Link: "/",
                    Text: "Help",
                },
            ],
        },
        {
            Title: "Other Links",
            Links: [
                {
                    Link: "/",
                    Text: "Home",
                },
                {
                    Link: "/",
                    Text: "About Us",
                },
                {
                    Link: "/",
                    Text: "Services",
                },
                {
                    Link: "/",
                    Text: "Project",
                },
                {
                    Link: "/",
                    Text: "Our Team",
                },
                {
                    Link: "/",
                    Text: "Latest Blog",
                },
            ],
        },
    ]

    return (
        <>
            <div className="flex items-center justify-center bg-secondary w-14 aspect-square p-2.5 rounded-full fixed z-[9999] bottom-6 right-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16" className="aspect-auto w-full">
                    <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z" />
                    <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                </svg>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <div className="bg-purple h-[40rem] w-screen text-pretty">
                        <h2 className="flex flex-col font-extrabold text-white font-noto-sans text-4xl mt-20 mx-10 leading-tight">
                            Perfect Workout Coach For
                            <span>
                                Body Shape
                            </span>
                        </h2>
                        <p className="flex mt-9 mx-10 text-white font-noto-sans text-xl">Quisque leo augue, lobortis ac tellus nec, posuere ultricies nulla. Praesent massa odio, pellentesque in consectetur quis, volutpat sit amet erat.</p>
                        <div className="flex border-2 border-secondary bg-secondary text-white w-fit ml-10 mt-9 rounded-xl px-7 py-3 shadow-secondary shadow-all-around  active:bg-purple active:border-purple active:shadow-purple">
                            <p className="font-noto-sans tracking-wider text-sm ">Learn More</p>
                        </div>
                    </div>
                </div>
                <div className="flex w-screen items-center justify-center px-6">
                    <div className="flex flex-col self-center w-full h-fit py-10 px-6 gap-5 rounded-xl bg-white -translate-y-10 shadow-all-around shadow-neutral-800/20">
                        <div className="flex flex-col items-start px-2 gap-10">
                            {appointments.map((appointment) => {
                                return (
                                    <AppointmentBookElement data={appointment} />
                                )
                            })}
                        </div>
                        <button className="w-full self-center text-white bg-secondary rounded-xl h-20 font-semibold font-noto-sans  active:bg-purple">
                            Book Your Appointment
                        </button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className=" mt-20 mb-7 self-center">
                        <img src="https://zcube.in/hitup/img/bg/about-img.png" alt="" className="w-full aspect-auto -ml-[55px]" />
                    </div>
                    <h2 className="font-noto-sans text-2xl mt-10 ml-6 font-extrabold text-pretty self-center">Let Us Find The Perfect Workout For You !</h2>
                    <img src="https://zcube.in/hitup/img/bg/circle-line.png" alt="" className="w-fit h-fit ml-6 mt-3 mb-9" />
                    <div className="flex flex-col gap-10 w-screen px-6">
                        <span className="text-pretty text-grey">Fusce orci ligula, tincidunt ut metus vel, venenatis aliquet tortor. Duis et consequat enim. Curabitur pulvinar, dolor at pulvinar molestie, augue massa volutpat felis, at rhoncus tortor velit vel diam. Cras ac suscipit metus.</span>
                        <span className="text-pretty text-grey">Etiam fermentum ex orci, a ullamcorper erat tempor in. Nulla est ante, ullamcorper vitae dui vel, molestie feugiat sapien.</span>
                        <span className="text-pretty text-grey">Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum. Ut congue nisl sapien, vel ultricies nulla tincidunt vitae. Maecenas non ligula quis massa consequat commodo eleifend ut velit. Vestibulum molestie nunc non libero posuere, quis pellentesque massa tempus.</span>
                    </div>
                    <div className="flex mx-5 my-7 ">
                        <button className="w-max self-center px-7 py-3 mb-24 text-white bg-secondary rounded-xl  active:bg-purple active:shadow-purple font-semibold font-noto-sans  shadow-secondary shadow-all-around">
                            Read More
                        </button>
                    </div>
                </div>
                <div className="bg-slate-50 w-screen">
                    <h2 className="text-2xl font-noto-sans font-extrabold ml-6 mt-28">Build Your Body Transform Your Life</h2>
                    <img className="w-fit aspect-auto ml-6 mt-3 mb-9" src="https://zcube.in/hitup/img/bg/circle-line.png" alt="" />
                    <div className="flex flex-col gap-5 w-screen px-6">
                        <span className="text-pretty text-grey">Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum. Ut congue nisl sapien, vel ultricies nulla tincidunt vitae. Maecenas non ligula quis massa consequat commodo eleifend ut velit.</span>
                        <span className="text-pretty text-grey">Aenean eleifend est eget eros molestie pretium. Curabitur varius velit in est elementum consectetur. Mauris in risus bibendum, laoreet ex at, lobortis risus. Nullam id massa eget ante finibus iaculis. Duis eget nisl ipsum. Vivamus ipsum urna, tristique vel arcu nec, elementum congue est. Nullam vitae aliquet turpis.</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 w-screen px-8">
                        {services.map((service, index) => {
                            return (
                                <ServiceItem isActive={index == activeServiceIndex} data={service} onClick={() => { serActiveServiceIndex(index) }} />
                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="bg-purple h-max w-screen text-pretty mt-36 py-20">
                        <div className="flex flex-col mx-10">
                            <h2 className="flex flex-col font-extrabold text-white font-noto-sans text-4xl mt-20 leading-tight">
                                The Fitness You Will Enjoy With Our Workout
                            </h2>
                            <img className="w-fit aspect-auto mt-3 mb-9" src="https://zcube.in/hitup/img/bg/circle-line-w.png" alt="" />
                            <p className="flex mt-9 text-white font-noto-sans ">
                                Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum. Ut congue nisl sapien, vel ultricies nulla tincidunt vitae. Maecenas non ligula quis massa consequat commodo eleifend ut velit.
                            </p>
                            <p className="flex mt-4 text-white font-noto-sans ">
                                Aenean eleifend est eget eros molestie pretium. Curabitur varius velit in est elementum consectetur. Mauris in risus bibendum, laoreet ex at, lobortis risus. Nullam id massa eget ante finibus iaculis. Duis eget nisl ipsum. Vivamus ipsum urna, tristique vel arcu nec, elementum congue est. Nullam vitae aliquet turpis.
                            </p>
                        </div>
                        <div className="flex items-center justify-center bg-[url(https://zcube.in/hitup/img/bg/video-img.png)] mt-5 ml-10 h-60 bg-cover">
                            <img src="https://zcube.in/hitup/img/bg/play-icon.png" alt="play-button" className="aspect-auto h-16" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="font-bold text-3xl mt-11 mb-5">Pricing Table</p>
                    <img src="https://zcube.in/hitup/img/bg/circle-line.png" alt="" className="flex mb-14" />
                    <div className="flex flex-col gap-10 items-center px-8 w-screen">
                        {prices.map((pricing) => {
                            return (
                                <PricingItem data={pricing} />
                            )
                        })}
                    </div>
                </div>
                <div className=" w-screen mt-36 flex flex-col items-center">
                    <h2 className="text-3xl text-center font-noto-sans font-bold ml-6 mt-28">
                        What Our Client Say&#39;s
                    </h2>
                    <img className="w-fit aspect-auto mt-3 mb-9" src="https://zcube.in/hitup/img/bg/circle-line.png" alt="" />
                    <div className="">
                        {client.map((saying) => {
                            return (
                                <WhatOurClientItem data={saying} />
                            )
                        })}
                    </div>
                </div>
                <div className="bg-purple w-screen text-pretty mt-28 flex flex-col px-10">
                    <h2 className="flex flex-col font-extrabold text-white font-noto-sans text-4xl mt-24 mb-10 leading-tight"> Subscribe To Our Newsletter For Latest Updates</h2>
                    <div className="self-center flex flex-row items-center justify-between w-full bg-white rounded-full h-14 overflow-hidden pl-5 py-1 pr-1">
                        <input type="email" placeholder="Email Address..." className="outline-none w-1/2    " />
                        <button className="h-full bg-secondary text-white w-1/2 rounded-full flex flex-row items-center justify-between pl-5 active:bg-purple">
                            Subscribe
                            <div className="h-full aspect-square bg-white/20 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-5 aspect-square" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className="h-px w-screen bg-white mt-10 self-center" />
                    <div className="flex flex-col text-sm">
                        <img src="https://zcube.in/hitup/img/logo/w_logo.png" alt="" className="w-32 mt-5" />
                        <div className="flex flex-row items-center gap-3 my-3">
                            <div className="bg-secondary rounded-full w-9 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16" className="aspect-auto w-full">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                </svg>
                            </div>
                            <span className="flex flex-col leading-tight text-white">
                                <p>
                                    1800-121-3637
                                </p>
                                <p>
                                    +91 555 234-8765
                                </p>
                            </span>
                        </div>
                        <div className="flex flex-row items-center gap-3 my-3">
                            <div className="bg-secondary rounded-full w-9 aspect-auto justify-center p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16" className="aspect-auto w-full">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                </svg>
                            </div>
                            <span className="flex flex-col leading-tight text-white">
                                <p>
                                    info@example.com
                                </p>
                                <p>
                                    sale@example.com
                                </p>
                            </span>
                        </div>
                    </div>
                    <div>
                        {LinkBoxes.map((box) => {
                            return (
                                <LinkBoxItem data={box} />
                            )
                        })}
                        <p className="mt-7 text-white text-sm">
                            Fusce orci ligula, tincidunt ut metus vel, venenatis aliquet tortor. Duis et consequat enim. Curabitur pulvinar, dolor at pulvinar molestie, augue massa volutpat felis, at rhoncus
                            tortor velit vel diam. Cras ac suscipit metus. Cras vitae quam eget risus efficitur malesuada. Praesent condimentum lacus nisi, eu venenatis purus eleifend sit amet.
                            Vivamus ac enim vitae erat scelerisque ullamcorper. Ut id pretium sem. Proin ac consectetur orci.
                        </p>
                    </div>
                    <div className="flex flex-row gap-2 mt-2 mb-20">
                        {IconBoxes.map((box) => {
                            return (
                                <div className="p-2.5 bg-white/30 rounded-full w-10 aspect-square flex items-center justify-center">
                                    <a href={box.Link} className="w-full aspect-auto">
                                        {box.Icon}
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="w-full bg-white h-10 ">
                    <p className="flex justify-center items-center text-purple pt-3 pb-3 text-xs">
                        © 2020 Hitup  All design Zcube.
                    </p>
                </div>
            </div>
        </>
    );
};

export default IndexPage;

const AppointmentBookElement: React.FC<{ data: AppointmentData }> = (props) => {
    return (
        <div className="flex flex-row gap-3 items-center text-sm h-16 justify-center">
            <img src={props.data.IconUrl} alt={props.data.IconAltText} className="aspect-auto h-fit" />
            <input type="text" placeholder={props.data.Placeholder} className="outline-none max-w-fit" />
        </div>
    );
};

const ServiceItem: React.FC<{ isActive?: boolean, onClick?: React.MouseEventHandler, data: ServiceData }> = (props) => {
    return (
        <div className="w-full flex flex-col gap-6 font-noto-sans items-center border p-5 pt-0 rounded-3xl text-center shadow-neutral-300 shadow-2xl"
            onClick={props.onClick}>
            <div className={`flex items-center justify-center rounded-b-full w-16 h-20 ${props.isActive ? "bg-secondary" : "bg-purple"}`}>
                <img src={props.data.IconUrl} alt={props.data.Title} className="aspect-auto w-10 transition-transform duration-700"
                    style={{
                        transform: props.isActive ? 'rotateY(360deg)' : ""
                    }}
                />
            </div>
            <span className="font-bold text-xl">
                {props.data.Title}
            </span>
            <span className="text-neutral-500">
                {props.data.Description}
            </span>
        </div>
    );
};

const PricingItem: React.FC<{ data: PricingData }> = (props) => {
    return (
        <div className="flex flex-col w-full h-[649px] items-center bg-[url(https://zcube.in/hitup/img/bg/price-bg.png)] bg-cover border
            shadow-neutral-300 shadow-2xl overflow-hidden rounded-2xl">
            <h1 className="text-center font-bold text-2xl text-white mt-10">
                {props.data.Title}
            </h1>
            <div className="w-24 h-24 bg-light-purple rounded-full mt-8">
                <img src={props.data.IconUrl} alt={props.data.Title} className="flex px-6 py-7" />
            </div>
            <ul className="text-center flex flex-col gap-4 mt-20">
                {props.data.Services.map((service) => {
                    return (
                        <li>
                            {service}
                        </li>
                    )
                })}
            </ul>
            <span className="flex my-5">
                <span className="text-secondary text-3xl font-bold items-start">
                    ${props.data.Price}
                </span>
                <span className="self-end text-neutral-500 ">/ Month</span>
            </span>
            <button className="w-max self-center px-7 py-3 mb-24  text-white bg-secondary rounded-xl font-semibold font-noto-sans  active:bg-purple active:shadow-purple shadow-secondary shadow-all-around">
                Choose Plan
            </button>
        </div>
    );
};

const WhatOurClientItem: React.FC<{ data: WhatOurClientSay }> = (props) => {
    return (
        <>
            <div className="flex flex-col w-full items-center bg-cover shadow-neutral-300 
         shadow-2xl overflow-hidden rounded-xl mt-10 ">
                <div className="justify-center w-80">
                    <img src={props.data.ImageUrl} />
                </div>
                <h4 className="justify-center w-60 mt-4 text-xl font-bold font-noto-sans"> {props.data.Title}</h4>
                <p className="justify-center w-60 mt-4 text-base font-noto-sans text-neutral-500">{props.data.Description}</p>
                <div className="flex flex-row">
                    <span className="flex flex-row items-center w-36 h-10 gap-2 text-secondary px-4  my-4 mr-32  active:text-purple">Read More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </span>
                </div>
            </div>
        </>
    );
};

const LinkBoxItem: React.FC<{ data: LinkBoxData }> = (props) => {
    return (
        <div className="flex flex-col w-full gap-5 mt-5 text-sm">
            <div className="flex flex-col items-start w-max overflow-hidden">
                <p className="text-white font-noto-sans font-bold text-lg">
                    {props.data.Title}
                </p>
                <div className="bg-secondary w-full h-0.5 -translate-x-6 rounded-full" />
            </div>

            <div className="flex flex-col gap-4 text-white">
                {props.data.Links.map((link) => {
                    return (
                        <a href={link.Link}>
                            {link.Text}
                        </a>
                    )
                })}
            </div>
        </div>
    )
};