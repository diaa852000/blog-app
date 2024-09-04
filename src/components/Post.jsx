import Image from "next/image"
import Link from "next/link"

const Post = () => {
    return (
        <div className="mb-12 flex items-stretch gap-12">
            <div className="relative flex-1 h-[350px] hidden md:block">
                <Image
                    src={'/p1.jpeg'}
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex-1 flex flex-col gap-7">
                <div className="flex items-center gap-1">
                    <span>11.02.2024 -</span>
                    <span className="uppercase text-sm font-medium text-rose-700">culture</span>
                </div>
                <Link
                    href={'/'}
                >
                    <h1 className="text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </Link>
                <p className="text-base font-light text-softTextColor dark:text-softDarkTextColor">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, hic ipsum. Veniam, odio?
                    Distinctio delectus velit similique sequi placeat numquam. Distinctio delectus velit similique sequi placeat numquam.
                </p>
                <Link
                    href={'/'}
                    className="capitalize text-base border-b border-textColor dark:border-textDark font-medium w-max p-0.5"
                >
                    read more
                </Link>
            </div>
        </div>
    )
}

export default Post