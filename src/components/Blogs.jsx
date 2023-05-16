/* eslint-disable no-unused-vars */
// // creating a personal blog page
import React from 'react';
import './Blogs.css';

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Probabilistic Reasoning in Intelligent Systems",
      author: "Author: Judea Pearl",
      content: "Networks of Plausible Inference",
    },
    {
      id: 2,
      title: "Learning to predict by the method of Temporal difference",
      author: "Author: Richard S. Sutton",
      content: "The Temporal difference method for reinforcement learning.",
    },
    {
      id: 3,
      title: "A training algorithm for optimum margin classifiers",
      author: "Author: Bernhard E. Boser",
      content: "This paper presented support vector machines, a practical and popular machine learning algorithm.",
    },
    {
      id: 4,
      title: "The case for the reduced instruction set computer",
      author: "Author: DA Patterson, DR Ditzel",
      content: "The reduced instruction set computer (RISC) CPU design philosophy.",
    },
  ];

  return (
    <>
    <h2>Samuel Wachira Blogs & Articles</h2>
    {/* <div className='main-div'>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <div className="blog-title">
            <h2>{blog.title}</h2>
            <h4>{blog.author}</h4>
          </div>
          <div className="author-content">
            <p>{blog.content}</p>
          </div>
        </div>
      ))}
    </div> */}
    <div className="main-div">
        <div className="main-content">
            {
                blogs.map((blog,index) =>{
                    return(
                        <div className="blog" key={index}>
                            <h3>{blog.title}</h3>
                            <p>{blog.content}</p>
                            <h4>{blog.author}</h4>
                        </div>
                    )
                })
            }
        </div>
        <div className="main-aside">
          <h2>Highlights</h2>
          <div className="blog-title">
          {blogs.map((blog, index) => (
            <div key={index}><h4>{blog.content}</h4></div>
          ))}
          </div>
          
        </div>
    </div>
    </>
  );
}

