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
      content: "Probabilistic Reasoning in Intelligent Systems is a complete and accessible account of the theoretical foundations and computational methods that underlie plausible reasoning under uncertainty. The author provides a coherent explication of probability as a language for reasoning with partial belief and offers a unifying perspective on other AI approaches to uncertainty, such as the Dempster-Shafer formalism, truth maintenance systems, and nonmonotonic logic.",
      summary: "Networks of Plausible Inference",
    },
    {
      id: 2,
      title: "Learning to predict by the method of Temporal difference",
      author: "Author: Richard S. Sutton",
      content: "This article introduces a class of incremental learning procedures specialized for prediction-that is, for using past experience with an incompletely known system to predict its future behavior. Whereas conventional prediction-learning methods assign credit by means of the difference between predicted and actual outcomes, the new methods assign credit by means of the difference between temporally successive predictions.",
      summary: "The Temporal difference method for reinforcement learning.",
    },
    {
      id: 3,
      title: "A training algorithm for optimum margin classifiers",
      author: "Author: Bernhard E. Boser",
      content: "A training algorithm that maximizes the margin between the training patterns and the decision boundary is presented. The technique is applicable to a wide variety of the classification functions, including Perceptrons, polynomials, and Radial Basis Functions. The effective number of parameters is adjusted automatically to match the complexity of the problem.",
      summary: "This paper presented support vector machines, a practical and popular machine learning algorithm.",
    },
    {
      id: 4,
      title: "The case for the reduced instruction set computer",
      author: "Author: DA Patterson, DR Ditzel",
      content: "A training algorithm that maximizes the margin between the training patterns and the decision boundary is presented. The technique is applicable to a wide variety of classifiaction functions, including Perceptrons, polynomials, and Radial Basis Functions. The effective number of parameters is adjusted automatically to match the complexity of the problem. The solution is expressed as a linear combination of supporting patterns",
      summary: "The reduced instruction set computer (RISC) CPU design philosophy.",
    },
  ];

  return (
    <>
    {/* <h2>Blogs Site</h2> */}
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
            <div key={index}><h4>{blog.summary}</h4></div>
          ))}
          </div>
          <button disabled>Read More</button>
        </div>
    </div>
    </>
  );
}

