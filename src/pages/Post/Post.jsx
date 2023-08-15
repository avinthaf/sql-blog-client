import React from 'react';

import { useLoaderData } from 'react-router-dom';

import Header from '../../components/Header';

const Post = () => {
  const post = useLoaderData();
  const {title, content} = post[0]
  return (
    <div className="Page">
      <Header />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default Post;