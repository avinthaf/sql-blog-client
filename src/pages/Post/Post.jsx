import React from 'react';

import { useLoaderData } from 'react-router-dom';

const Post = () => {
  const post = useLoaderData();
  const {title, content} = post[0]
  return (
    <div className="Page">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default Post;