import React from "react";
import blogData from "../data/blog";
import Article from "./Article.js"

function ArticleList() {
    const articleElements = blogData.posts.map((post) => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
    })
    return (
        <main>
            {articleElements}
        </main>
    )
}

export default ArticleList