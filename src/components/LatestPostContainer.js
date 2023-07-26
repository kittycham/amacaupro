import { Link } from 'gatsby';
import React from 'react'

const limitContent = (content, characterLimit) => {
  if (content.length <= characterLimit) {
    return content;
  } else {
    return content.slice(0, characterLimit) + "...";
  }
};

const LatestPostContainer = ({ post, className }) => {
  const limitedExcerpt = limitContent(post.excerpt, 215)
  return (
    <div className={`mb-8 text-gray-500 ${className}`}>
        <Link to={`/${post.categories.nodes[0].name}/${post.slug}`} >
          <h3 className='text-lg '>{post.title}</h3>
        </Link>
        <div className="mt-1 text-gray-400">{post.date}</div>
        <div className="mt-2 text-sm" dangerouslySetInnerHTML={{ __html: limitedExcerpt }} />
    </div>
  )
}

export default LatestPostContainer;