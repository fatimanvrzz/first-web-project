const IndexPage: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <div className="bg-purple h-lvh w-screen text-justify">
                    <h2 className="flex flex-col w-64 font-extrabold text-white font-notoSans text-4xl mt-20 ml-10 leading-tight">
                        Perfect Workout Coach For
                        <span>
                            Body Shape
                        </span>
                    </h2>
                    <p className="flex w-64 mt-9 ml-10 text-white font-notoSans ">Quisque leo augue, lobortis ac tellus nec, posuere ultricies nulla. Praesent massa odio, pellentesque in consectetur quis, volutpat sit amet erat.</p>
                    <div className="flex border-2 border-secondary bg-secondary text-white w-fit ml-10 mt-9 rounded-xl px-7 py-3 shadow-secondary shadow-all-around">
                        <p className="font-notoSans tracking-wider text-sm">Learn More</p>
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
                <button className="w-max self-center mx-4 px-3 text-white bg-secondary rounded-xl h-20 font-semibold font-notoSans">
                    Book Your Appointment
                </button>
            </div>
            <div className="flex flex-col ">
                <img src="https://zcube.in/hitup/img/bg/about-img.png" alt="" className=" w-64 mt-20 mb-7" />
                <h2 className="w-60 font-notoSans text-2xl mt-10 ml-12 font-extrabold text-pretty">Let Us Find The Perfect Workout For You !</h2>
                <img src="https://zcube.in/hitup/img/bg/circle-line.png" alt="" className="w-fit h-fit ml-12 mt-3" />
                <div className="flex flex-col gap-10 w-screen px-6">
                    <span className="text-pretty">Fusce orci ligula, tincidunt ut metus vel, venenatis aliquet tortor. Duis et consequat enim. Curabitur pulvinar, dolor at pulvinar molestie, augue massa volutpat felis, at rhoncus tortor velit vel diam. Cras ac suscipit metus.</span>
                    <span className="text-pretty">Etiam fermentum ex orci, a ullamcorper erat tempor in. Nulla est ante, ullamcorper vitae dui vel, molestie feugiat sapien.</span>
                    <span className="text-pretty">Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum. Ut congue nisl sapien, vel ultricies nulla tincidunt vitae. Maecenas non ligula quis massa consequat commodo eleifend ut velit. Vestibulum molestie nunc non libero posuere, quis pellentesque massa tempus.</span>
                </div>
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