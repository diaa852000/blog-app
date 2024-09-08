import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import Image from "next/image";

export default function SinglePage() {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1 flex flex-col justify-between">
                    <h1 className="text-4xl lg:text-5xl 2xl:text-6xl mb-[50px] font-bold dark:text-textDark">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <div className="flex gap-4 items-center">
                        <div className="relative w-[50px] h-[50px]">
                            <Image
                                src={'/p1.jpeg'}
                                alt=""
                                fill
                                className="object-cover w-full aspect-square rounded-full"
                            />
                        </div>
                        <div className="flex flex-col gap-1 text-softTextColor dark:text-softDarkTextColor">
                            <span className="text-base font-semibold">John Doe</span>
                            <span className="text-sm">01.01.2024</span>
                        </div>
                    </div>
                </div>
                <div className="relative flex-1 h-[350px] aspect-video md:aspect-auto">
                    <Image
                        src={'/p1.jpeg'}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-[5] mt-[60px]">
                    <div>
                        <p className="text-base md:text-[20px] font-light mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt commodi earum recusandae? Totam error rem deleniti soluta adipisci,
                            officiis nobis cum cupiditate, provident ullam sunt. Deleniti voluptatum facilis consequuntur veniam!
                        </p>
                        <h3 className="text-base md:text-3xl font-semibold leading-snug">Lorem ipsum dolor sit amet consectetur</h3>
                        <p className="text-base md:text-[20px] font-light mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt commodi earum recusandae? Totam error rem deleniti soluta adipisci,
                            officiis nobis cum cupiditate, provident ullam sunt. Deleniti voluptatum facilis consequuntur veniam!
                        </p>
                        <p className="text-base md:text-[20px] font-light mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt commodi earum recusandae? Totam error rem deleniti soluta adipisci,
                            officiis nobis cum cupiditate, provident ullam sunt. Deleniti voluptatum facilis consequuntur veniam!
                        </p>
                        <p className="text-base md:text-[20px] font-light mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt commodi earum recusandae? Totam error rem deleniti soluta adipisci,
                            officiis nobis cum cupiditate, provident ullam sunt. Deleniti voluptatum facilis consequuntur veniam! 
                            officiis nobis cum cupiditate, provident ullam sunt.
                        </p>
                    </div>
                    <div className="">
                        <Comments/>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}
