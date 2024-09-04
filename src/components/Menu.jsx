import MenuPost from "./MenuPost";
import CategoryList from "./CategoryList";

const array = [1, 2, 3, 4];

const Menu = () => {
    return (
        <div className="flex-[2] mt-14">
            <h2 className="text-gray-500 text-sm">What&apos;s hot</h2>
            <h1 className="text-xl font-bold capitalize">most popular</h1>
            <div className="flex flex-col gap-4 lg:gap-9 mt-9 mb-12">
                {/* //TODO: Retrive with real data just pass the object and dustruct it in the component */}
                {array.map((i) => (
                    <MenuPost
                        key={i}
                        path={'/blog?cat=style'}
                        label={"style"}
                        imgSrc={'/p1.jpeg'}
                        description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nulla error,"}
                    />
                ))}
            </div>
            <h2 className="text-gray-500 text-sm">Discover by topic</h2>
            <h1 className="text-xl font-bold capitalize">Categories</h1>
            <div className="mb-12 mt-9">
                <CategoryList withImage={false}/>
            </div>

            <h2 className="text-gray-500 text-sm">Chosen by the editor</h2>
            <h1 className="text-xl font-bold capitalize">most popular</h1>
            <div className="flex flex-col gap-9 mt-9 mb-12">
                {array.map((i) => (
                    <MenuPost
                        withImage
                        key={i}
                        path={'/blog?cat=style'}
                        label={"style"}
                        imgSrc={'/p1.jpeg'}
                        description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nulla error,"}
                    />
                ))}
            </div>
        </div>
    )
}

export default Menu