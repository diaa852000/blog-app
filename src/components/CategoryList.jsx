import Image from "next/image"
import Link from "next/link"

const categoriesLinks = [
    { path: "/blog?cat=style", label: "style", img: "style.png", bgColor: "bg-red-100" },
    { path: "/blog?cat=fashion", label: "fashion", img: "fashion.png", bgColor: "bg-purple-100" },
    { path: "/blog?cat=food", label: "food", img: "food.png", bgColor: "bg-orange-100" },
    { path: "/blog?cat=travel", label: "travel", img: "travel.png", bgColor: "bg-lime-100" },
    { path: "/blog?cat=culture", label: "culture", img: "culture.png", bgColor: "bg-indigo-100" },
    { path: "/blog?cat=coding", label: "coding", img: "coding.png", bgColor: "bg-gray-100" },
];


const CategoryList = ({ withImage }) => {
    return (
        withImage ?
            (
                <div>
                    <h1 className="title">popular categories</h1>
                    <div className="flex items-center sm:justify-between gap-2 flex-wrap">
                        {categoriesLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.path}
                                className={`w-full sm:w-[48%] md:w-[16%] h-20 ${link.bgColor} flex items-center justify-center gap-2 p-4 text-textColor rounded-md capitalize`}
                            >
                                <Image
                                    src={`/${link.img}`}
                                    alt={link.label}
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 rounded-full"
                                />
                                <span>{link.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-between sm:justify-start  gap-2 flex-wrap">
                    {categoriesLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            className={`${link.bgColor} flex items-center justify-center gap-2 p-2 text-sm  text-textColor rounded-md capitalize w-[120px] md:w-[100px]`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )
    )
}

export default CategoryList