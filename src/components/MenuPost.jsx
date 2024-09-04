import Image from "next/image"
import Link from "next/link"

const MenuPost = (
    { withImage,
        imgSrc,
        path,
        label,
        description
    }) => {
    return (
        withImage ?
            (
                <Link
                    href={path}
                    className="flex items-center gap-5"
                >
                    <div className="relative flex-1 aspect-square">
                        <Image
                            src={imgSrc}
                            alt=""
                            fill
                            className="object-cover rounded-full border-2"
                        />
                    </div>
                    <div className="flex-[4] flex flex-col gap-1">
                        <span className="capitalize text-xs font-medium text-white px-2 py-1 w-max rounded-full bg-red-500">{label}</span>
                        <h3 className="text-base">{description} </h3>
                        <div className="flex items-center gap-1 text-softTextColor dark:text-softDarkTextColor text-sm">
                            <span>John Doe</span>
                            <span>- 10.05.2024</span>
                        </div>
                    </div>
                </Link>
            ) : (
                <Link
                    href={path}
                    className="flex items-center gap-5"
                >
                    <div className="flex-[4] flex flex-col gap-1">
                        <span className="capitalize text-xs font-medium text-white px-2 py-1 w-max rounded-full bg-red-500">{label}</span>
                        <h3 className="text-base">{description}</h3>
                        <div className="flex items-center gap-1 text-softTextColor dark:text-softDarkTextColor text-sm">
                            <span>John Doe</span>
                            <span>- 10.05.2024</span>
                        </div>
                    </div>
                </Link>
            )
    )
}

export default MenuPost