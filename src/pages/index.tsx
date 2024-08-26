import React, { useState } from "react";

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
}

type AppointmentData = {
    Placeholder: string;
    IconUrl: string;
    IconAltText: string;
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

    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <div className="bg-purple h-[40rem] w-screen text-justify">
                    <h2 className="flex flex-col max-w-64 font-extrabold text-white font-noto-sans text-4xl mt-20 ml-10 leading-tight">
                        Perfect Workout Coach For
                        <span>
                            Body Shape
                        </span>
                    </h2>
                    <p className="flex max-w-64 mt-9 ml-10 text-white font-noto-sans ">Quisque leo augue, lobortis ac tellus nec, posuere ultricies nulla. Praesent massa odio, pellentesque in consectetur quis, volutpat sit amet erat.</p>
                    <div className="flex border-2 border-secondary bg-secondary text-white w-fit ml-10 mt-9 rounded-xl px-7 py-3 shadow-secondary shadow-all-around">
                        <p className="font-noto-sans tracking-wider text-sm">Learn More</p>
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
                    <button className="w-full self-center text-white bg-secondary rounded-xl h-20 font-semibold font-noto-sans">
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
                    <button className="w-max self-center px-7 py-3 mb-24 text-white bg-secondary rounded-xl font-semibold font-noto-sans  shadow-secondary shadow-all-around">
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
                <div className="flex flex-col gap-10 mt-20 w-screen px-8">
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
                        <p className="flex mt-9 text-white font-noto-sans ">Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum. Ut congue nisl sapien, vel ultricies nulla tincidunt vitae. Maecenas non ligula quis massa consequat commodo eleifend ut velit.</p>
                        <p className="flex mt-4 text-white font-noto-sans ">Aenean eleifend est eget eros molestie pretium. Curabitur varius velit in est elementum consectetur. Mauris in risus bibendum, laoreet ex at, lobortis risus. Nullam id massa eget ante finibus iaculis. Duis eget nisl ipsum. Vivamus ipsum urna, tristique vel arcu nec, elementum congue est. Nullam vitae aliquet turpis.</p>
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
            <div className="bg-slate-50 w-screen mt-36 flex flex-col items-center">
                <h2 className="text-3xl text-center font-noto-sans font-bold ml-6 mt-28">What Our Client Say’s</h2>
                <img className="w-fit aspect-auto mt-3 mb-9" src="https://zcube.in/hitup/img/bg/circle-line.png" alt="" />
            </div>
        </div>
    );
};

export default IndexPage;


const AppointmentBookElement: React.FC<{ data: AppointmentData }> = (props) => {
    return (
        <div className="flex flex-row gap-3 items-center text-sm h-16 justify-center">
            <img src={props.data.IconUrl} alt={props.data.IconAltText} className="aspect-auto h-fit" />
            <input type="text" placeholder={props.data.Placeholder} className="outline-none max-w-fit" />
        </div>
    )
}

const ServiceItem: React.FC<{ isActive?: boolean, onClick?: React.MouseEventHandler, data: ServiceData }> = (props) => {
    return (
        <div className="w-full flex flex-col gap-6 font-noto-sans items-center border p-5 pt-0 rounded-3xl text-center shadow-neutral-300 shadow-2xl"
            onClick={props.onClick}>
            <div className={`flex items-center justify-center rounded-b-full w-16 h-20 ${props.isActive ? "bg-secondary" : "bg-purple"}`}>
                <img src={props.data.IconUrl} alt={props.data.Title} className="aspect-auto w-10 transition-transform duration-700"
                    style={{
                        transform: props.isActive ? 'rotateY(360deg)' : ""
                    }} />
            </div>
            <span className="font-bold text-xl">
                {props.data.Title}
            </span>
            <span className="text-neutral-500">
                {props.data.Description}
            </span>
        </div>
    )
}

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
            <button className="w-max self-center px-7 py-3 mb-24  text-white bg-secondary rounded-xl font-semibold font-noto-sans  shadow-secondary shadow-all-around">
                Choose Plan
            </button>
        </div>
    )
}