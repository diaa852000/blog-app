import Image from "next/image"

const Featured = () => {
    return (
        <div className="mt-8">
            <h1 className="text-6xl lg:text-8xl leading-tight dark:text-textDark">
                <b>Hey, lama dev here!</b> Discover my stories and creative ideas
            </h1>
            <div className="mt-10 md:mt-16 flex items-center gap-12">
                <div className="flex-1 h-[500px] aspect-square relative hidden md:block">
                    <Image
                        src={'/p1.jpeg'}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex-1 flex flex-col gap-5 ">
                    <h1 className="font-bold text-2xl dark:text-textDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque adipisicing elit.</h1>
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