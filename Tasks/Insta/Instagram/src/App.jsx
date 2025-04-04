import React from 'react'
import Post from './Components/Post/Post';
// import Login from './Components/Login/Login'
// import Signup from './Components/Signup/Signup'

const App = () => {
  const post = [
    {
      id: 1,
      data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RdXo18JOplJSs3rwZz6EfkR74JtjAQ02PA&s"
    },
    {
      id: 1,
      data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RdXo18JOplJSs3rwZz6EfkR74JtjAQ02PA&s"
    },
    {
      id: 1,
      data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RdXo18JOplJSs3rwZz6EfkR74JtjAQ02PA&s"
    },
    {
      id: 1,
      data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RdXo18JOplJSs3rwZz6EfkR74JtjAQ02PA&s"
    },
    {
      id: 1,
      data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RdXo18JOplJSs3rwZz6EfkR74JtjAQ02PA&s"
    },
    {
      id: 1,
      data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RdXo18JOplJSs3rwZz6EfkR74JtjAQ02PA&s"
    }, {
      id: 1,
      data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RdXo18JOplJSs3rwZz6EfkR74JtjAQ02PA&s"
    },
    {
      id: 1,
      data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RdXo18JOplJSs3rwZz6EfkR74JtjAQ02PA&s"
    },
    {
      id: 1,
      data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RdXo18JOplJSs3rwZz6EfkR74JtjAQ02PA&s"
    }, {
      id: 1,
      data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RdXo18JOplJSs3rwZz6EfkR74JtjAQ02PA&s"
    }, {
      id: 1,
      data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RdXo18JOplJSs3rwZz6EfkR74JtjAQ02PA&s"
    },
    {
      id: 1,
      data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RdXo18JOplJSs3rwZz6EfkR74JtjAQ02PA&s"
    },
    {
      id: 1,
      data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RdXo18JOplJSs3rwZz6EfkR74JtjAQ02PA&s"
    },
    {
      id: 1,
      data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RdXo18JOplJSs3rwZz6EfkR74JtjAQ02PA&s"
    },
    {
      id: 1,
      data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RdXo18JOplJSs3rwZz6EfkR74JtjAQ02PA&s"
    },
    {
      id: 1,
      data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RdXo18JOplJSs3rwZz6EfkR74JtjAQ02PA&s"
    },
  

  ];

  return (
    <div>
      <Post post={post} /> {/* Ensuring Home accepts the post prop */}
    </div>
  );
};

export default App;