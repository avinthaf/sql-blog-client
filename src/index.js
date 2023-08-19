import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


import Post from './pages/Post/Post';
import Home from './pages/Home/Home';

const productionDBURL = 'https://sql-blog-express-server.onrender.com/';
const devDBURL = 'http://localhost:10000/';



// posts loader
const postsLoader = async (request) => {
  const query = (request.url.split("?")[1])
  try {
    const posts = await fetch(productionDBURL + 'posts?' + query)
    return posts;
  } catch (error) {
    console.log(error)
  }

};

// single post loader
const postLoader = async (postId) => {
  try {
    const post = await fetch(productionDBURL + 'posts/' + postId)
    return post;
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
  }
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
