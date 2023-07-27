import React from "react";
import { useLatestPostQuery } from "../hooks/useLatestPostQuery";
import { Link } from "gatsby";

const PostSideBar = ({className}) => {
    const {allWpPost, allWpCategory} = useLatestPostQuery();
    const posts = [...allWpPost.nodes].splice(0,10)

    console.log(allWpCategory)

    return (
        <div className={`h-full w-full lg:w-72 lg:pr-10 lg:border-r-2 lg:mr-20 pb-10 lg:pb-0 border-b-2 lg:border-b-0 z-1 ${className}`}>
            <ul>
                <li>
                    <p className="text-gray-500 inline-block hover:text-sky-500 mb-2.5 text-sm">分類</p>
                    {allWpCategory.nodes.length !== 0 && (
                    <ul className="ml-4 text-sm">
                        {allWpCategory.nodes.map((category) => (
                        category.contentNodes.nodes.length > 0 && <li key={category.id}>
                            <Link
                            to={`/${category.name}`}
                            className="text-gray-500 flex hover:text-sky-500 mb-2.5"
                            >
                            {category.name}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    )}
                </li>
            </ul>
            <ul>
                <li className="w-full">
                    <p className="text-gray-500 inline-block hover:text-sky-500 mb-2.5 text-sm">最新消息</p>
                    {posts.length !== 0 && (
                    <ul className="ml-4 text-sm w-full lg:w-3/4">
                        {posts.map((post) => (
                        <li key={post.id}>
                            <Link
                            to={`/${post.categories.nodes[0].name}/${post.slug}`}
                            className="text-gray-500 flex hover:text-sky-500 mb-2.5"
                            >
                            {post.title}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    )}
                </li>
            </ul>
        </div>
    )
}

export default PostSideBar;