import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

export default function page() {
    return (
        <div>
            <h1 className="title bg-red-400 text-center rounded-md p-2 text-white">style blogs</h1>
            <div className="flex flex-col lg:flex-row gap-12">
                <CardList />
                <Menu />
            </div>
        </div>
    )
}
