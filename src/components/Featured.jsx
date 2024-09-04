import Image from "next/image"

const Featured = () => {
    return (
        <div className="mt-8">
            <h1 className="text-3xl lg:text-[96px] leading-tight text-center md:text-start">
                <b>Hey, lama dev here!</b> Discover my stories and creative ideas
            </h1>
            <div className="mt-10 md:mt-16 flex items-center gap-12 flex-col md:flex-row">
                <div className="flex-1 h-[500px] aspect-square relative">
                    <Image
                        src={'/p1.jpeg'}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex-1 flex flex-col gap-5 text-center text-pretty md:text-start">
                    <h1 className="font-bold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque adipisicing elit.</h1>
                    <p className="text-lg text-softTextColor dark:text-softDarkTextColor font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum eaque eligendi ex qui animi possimus aperiam impedit iure. Cumque consequuntur officia deserunt fugiat necessitatibus nesciunt pariatur rem, vitae numquam.
                    </p>
                    <button
                        type="button"
                        className="py-3 px-4 border-none rounded bg-softBg text-bgDark w-max font-medium self-center md:self-start"
                    >
                        Read More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured