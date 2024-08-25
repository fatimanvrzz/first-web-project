import React, { useState } from "react";

type ServiceData = {
    Title: string;
    Description: string;
    IconUrl: string;
};

const IndexPage: React.FC = () => {
    const [activeServiceIndex, serActiveServiceIndex] = useState(0);

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

    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <div className="bg-purple h-lvh w-screen text-justify">
                    <h2 className="flex flex-col w-64 font-extrabold text-white font-noto-sans text-4xl mt-20 ml-10 leading-tight">
                        Perfect Workout Coach For
                        <span>
                            Body Shape
                        </span>
                    </h2>
                    <p className="flex w-64 mt-9 ml-10 text-white font-noto-sans ">Quisque leo augue, lobortis ac tellus nec, posuere ultricies nulla. Praesent massa odio, pellentesque in consectetur quis, volutpat sit amet erat.</p>
                    <div className="flex border-2 border-secondary bg-secondary text-white w-fit ml-10 mt-9 rounded-xl px-7 py-3 shadow-secondary shadow-all-around">
                        <p className="font-noto-sans tracking-wider text-sm">Learn More</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col self-center h-96 w-64 pb-5 rounded-3xl bg-white -translate-y-10 shadow-all-around shadow-neutral-300">
                <div className="flex flex-col items-center justify-around h-full">
                    <AppointmentBookElement iconLink="https://zcube.in/hitup/img/bg/ad-icon1.png" iconAltText="LocationIcon" placeholder="Choose Your Location" />
                    <AppointmentBookElement iconLink="https://zcube.in/hitup/img/bg/ad-icon2.png" iconAltText="LocationIcon" placeholder="Choose Visiting Date" />
                    <AppointmentBookElement iconLink="https://zcube.in/hitup/img/bg/ad-icon3.png" iconAltText="LocationIcon" placeholder="Choose Your Gym" />
                    <AppointmentBookElement iconLink="https://zcube.in/hitup/img/bg/ad-icon4.png" iconAltText="LocationIcon" placeholder="Choose Your Gym Coach" />
                </div>
                <button className="w-max self-center mx-4 px-3 text-white bg-secondary rounded-xl h-20 font-semibold font-noto-sans">
                    Book Your Appointment
                </button>
            </div>
            <div className="flex flex-col">
                <img src="https://zcube.in/hitup/img/bg/about-img.png" alt="" className=" w-64 mt-20 mb-7" />
                <h2 className="w-60 font-noto-sans text-2xl mt-10 ml-6 font-extrabold text-pretty">Let Us Find The Perfect Workout For You !</h2>
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
                <h2 className="w-64 text-2xl font-noto-sans font-extrabold ml-6 mt-28">Build Your Body Transform Your Life</h2>
                <img className="w-fit aspect-auto ml-6 mt-3 mb-9" src="https://zcube.in/hitup/img/bg/circle-line.png" alt="" />
                <div className="flex flex-col gap-5 w-screen px-6">
                    <span className="text-pretty text-grey">Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum. Ut congue nisl sapien, vel ultricies nulla tincidunt vitae. Maecenas non ligula quis massa consequat commodo eleifend ut velit.</span>
                    <span className="text-pretty text-grey">Aenean eleifend est eget eros molestie pretium. Curabitur varius velit in est elementum consectetur. Mauris in risus bibendum, laoreet ex at, lobortis risus. Nullam id massa eget ante finibus iaculis. Duis eget nisl ipsum. Vivamus ipsum urna, tristique vel arcu nec, elementum congue est. Nullam vitae aliquet turpis.</span>
                </div>
                <div className="flex flex-col gap-10 mt-20">
                    {services.map((service, index) => {
                        return (
                            <ServiceItem isActive={index == activeServiceIndex} data={service} onClick={() => { serActiveServiceIndex(index) }} />
                        )
                    })}
                </div>
            </div>
            <div className="flex flex-col">
                <div className="bg-purple h-max w-screen text-pretty mt-36 py-20">
                    <h2 className="flex flex-col w-64 font-extrabold text-white font-noto-sans text-4xl mt-20 ml-10 leading-tight">
                        The Fitness You Will Enjoy With Our Workout
                    </h2>
                    <img className="w-fit aspect-auto ml-10 mt-3 mb-9" src="https://zcube.in/hitup/img/bg/circle-line-w.png" alt="" />
                    <p className="flex w-64 mt-9 ml-10 text-white font-noto-sans ">Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum. Ut congue nisl sapien, vel ultricies nulla tincidunt vitae. Maecenas non ligula quis massa consequat commodo eleifend ut velit.</p>
                    <p className="flex w-64 mt-4 ml-10 text-white font-noto-sans ">Aenean eleifend est eget eros molestie pretium. Curabitur varius velit in est elementum consectetur. Mauris in risus bibendum, laoreet ex at, lobortis risus. Nullam id massa eget ante finibus iaculis. Duis eget nisl ipsum. Vivamus ipsum urna, tristique vel arcu nec, elementum congue est. Nullam vitae aliquet turpis.</p>
                    <div className="flex items-center justify-center bg-[url(https://zcube.in/hitup/img/bg/video-img.png)] mt-5 ml-10 h-44 bg-cover">
                        <img src="https://zcube.in/hitup/img/bg/play-icon.png" alt="play-button" className="aspect-auto h-16" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-bold text-3xl mt-11 mb-5">Pricing Table</p>
                <img src="https://zcube.in/hitup/img/bg/circle-line.png" alt="" className="flex mb-14" />
            </div>
        </div>
    );
};

export default IndexPage;


const AppointmentBookElement: React.FC<{ iconLink: string, iconAltText?: string, placeholder?: string }> = (props) => {
    return (
        <div className="flex flex-row gap-3 items-center text-sm">
            <img src={props.iconLink} alt={props.iconAltText} className="aspect-auto h-fit" />
            <input type="text" name={props.iconAltText} placeholder={props.placeholder} className="outline-none" />
        </div>
    )
}

const ServiceItem: React.FC<{ isActive?: boolean, onClick?: React.MouseEventHandler, data: ServiceData }> = (props) => {
    return (
        <div className="w-fit mx-8 flex flex-col gap-6 font-noto-sans items-center border-2 p-5 pt-0 rounded-3xl text-center shadow-neutral-300 shadow-2xl"
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