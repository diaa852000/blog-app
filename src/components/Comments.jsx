import Image from "next/image";
import Link from "next/link";

export default function Comments() {
    const authentcated = true;
    return (
        <div className="mt-12">
            <h1 className="capitalize dark:text-textDark text-2xl font-semibold mb-5">comments</h1>
            {authentcated ?
                (
                    <div className="flex items-center justify-between gap-7">
                        <textarea
                            placeholder="Write a comment..."
                            className="flex-1 p-5 placeholder:text-black placeholder:font-sans rounded-md text-black outline-none"
                        />
                        <button
                            type="button"
                            className="px-5 py-4 bg-teal-700 text-white rounded-md border-0 font-bold w-[100px]"
                        >
                            Send
                        </button>
                    </div>

                ) : (
                    <Link href={'/login'}>Login to write a comment</Link>
                )}
            <div className="mt-12">
                <div className="mb-10">
                    <div className="flex items-center gap-2 mb-5">
                        <Image
                            src={'/p1.jpeg'}
                            alt=""
                            width={50}
                            height={50}
                            className="object-cover aspect-square rounded-full"
                        />
                        <div className="flex flex-col gap-1">
                            <span className="capitalize font-semibold text-base text-softTextColor dark:text-softDarkTextColor">john Doe</span>
                            <span className="text-sm text-softTextColor dark:text-softDarkTextColor">01.01.2024</span>
                        </div>
                    </div>
                    <p className="text-base font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illo pariatur officia!
                    </p>
                </div>
                <div className="mb-10">
                    <div className="flex items-center gap-2 mb-5">
                        <Image
                            src={'/p1.jpeg'}
                            alt=""
                            width={50}
                            height={50}
                            className="object-cover aspect-square rounded-full"
                        />
                        <div className="flex flex-col gap-1">
                            <span className="capitalize font-semibold text-base text-softTextColor dark:text-softDarkTextColor">john Doe</span>
                            <span className="text-sm text-softTextColor dark:text-softDarkTextColor">01.01.2024</span>
                        </div>
                    </div>
                    <p className="text-base font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illo pariatur officia!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illo pariatur officia!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illo pariatur officia!
                    </p>
                </div>
                <div className="mb-10">
                    <div className="flex items-center gap-2 mb-5">
                        <Image
                            src={'/p1.jpeg'}
                            alt=""
                            width={50}
                            height={50}
                            className="object-cover aspect-square rounded-full"
                        />
                        <div className="flex flex-col gap-1">
                            <span className="capitalize font-semibold text-base text-softTextColor dark:text-softDarkTextColor">john Doe</span>
                            <span className="text-sm text-softTextColor dark:text-softDarkTextColor">01.01.2024</span>
                        </div>
                    </div>
                    <p className="text-base font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illo pariatur officia!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>
                <div className="mb-10">
                    <div className="flex items-center gap-2 mb-5">
                        <Image
                            src={'/p1.jpeg'}
                            alt=""
                            width={50}
                            height={50}
                            className="object-cover aspect-square rounded-full"
                        />
                        <div className="flex flex-col gap-1">
                            <span className="capitalize font-semibold text-base text-softTextColor dark:text-softDarkTextColor">john Doe</span>
                            <span className="text-sm text-softTextColor dark:text-softDarkTextColor">01.01.2024</span>
                        </div>
                    </div>
                    <p className="text-base font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illo pariatur officia!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>
            </div>
        </div>
    )
}
