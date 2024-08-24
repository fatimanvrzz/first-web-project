const IndexPage: React.FC = () => {
    return (
        <div className="flex justify-end sticky">
            <img src="src/assets/bg/home-bg.png" alt="" className=" flex bg-no-repeat object-cover sm:justify-center md:justify-center absolute -top-2" />
            <img src="https://zcube.in/hitup/img/bg/heade-object.png" alt="" className="bg-transparent w-64 h-auto absolute top-72 right-60" />
            <img src="https://zcube.in/hitup/img/bg/header-img.png" alt="" className="h-auto absolute top-20 right-72" />

            <div className="flex flex-col absolute min-w-56 top-64 left-28 ">
                <h2 className="text-9xl font-notoSans font-semibold text-secondary opacity-5 right-72 ">We Build</h2>
                <span className="text-9xl font-notoSans font-semibold text-black opacity-5">Champions</span>
            </div>

            <div className="flex flex-col absolute text-5xl font-extrabold top-80 left-44 ">
                <h5>Perfect Workout <p className="mt-3"> Coach For <span className="text-purple"> Body Shape </span></p></h5>
                <p className="flex text-sm font-normal mt-4 w-fit">Quisque leo augue, lobortis ac tellus nec, posuere ultricies nulla. Praesent massa odio,</p>
                <p className="flex text-sm font-normal mt-0 w-fit">pellentesque in consectetur quis, volutpat sit amet erat.</p>
            </div>
        </div>
    )
}

export default IndexPage;