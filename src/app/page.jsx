import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div className="container ">
      <Featured/>
      <CategoryList withImage/>
      <div className="flex flex-col lg:flex-row gap-12">
        <CardList/>
        <Menu/>
      </div>
    </div>
  );
}
