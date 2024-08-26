import { useState } from "react";
import { useSwipeable } from "react-swipeable";

type CardData = {
    Text: string;
};

const CardTestPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards: CardData[] = [
        {
            Text: "AAAAAAAAAAAA.",
        },
        {
            Text: "BBBBBBBBBBBB.",
        },
        {
            Text: "CCCCCCCCCCCC.",
        },
        {
            Text: "DDDDDDDDDDDD.",
        },
    ];

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 1)),
        onSwipedRight: () => setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0)),
        trackMouse: true,
    });

    return (
        <div className="w-screen flex flex-col items-center gap-2">
            <div className="overflow-hidden w-48 m-0" {...swipeHandlers}>
                <div className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {cards.map((card, index) => (
                        <CardView key={index} data={card} />
                    ))}
                </div>
            </div>
            <div className="flex flex-row">
                {cards.map((_, index) => (
                    <div className={`w-3 aspect-square rounded-full ${index == currentIndex ? "bg-secondary" : "bg-purple"}`}
                        onClick={() => { setCurrentIndex(index) }}>
                    </div>
                ))}
            </div>
        </div>
    )
};

const CardView: React.FC<{ data: CardData }> = (props) => {
    return (
        <div className="min-w-full p-5 bg-white border-2 roun border-black shadow-2xl text-center flex flex-col items-center">
            {props.data.Text}
        </div>
    )
};

export default CardTestPage;