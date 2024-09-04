import Pagination from "./Pagination"
import Post from "./Post"

const CardList = () => {
    return (
        <div className="flex-[5]">
            <h1 className="title">recent posts</h1>
            <div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
            <Pagination/>
        </div>
    )
}

export default CardList