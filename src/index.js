import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Post from './pages/Post/Post';
import Home from './pages/Home/Home';

const postsLoader = async (request) => {
  const query = (request.url.split("?")[1])
  try {
    const res = await fetch(`https://sql-blog-express-server.onrender.com/posts?` + query)
    return res;
  } catch (error) {
    console.log(error)
  }

};

const postLoader = async (postId) => {
  try {
    const res = await fetch(`https://sql-blog-express-server.onrender.com/posts/` + postId)
    return res;
  } catch (error) {
    console.log(error)
  }

};

const router = createBrowserRouter([
  {
    path: "/",
    loader: ({request}) => postsLoader(request),
    element: <Home />
  },
  {
    path: "/posts/:postId",
    loader: ({params}) => postLoader(params.postId),
    element: <Post />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
