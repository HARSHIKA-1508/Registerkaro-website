import React from "react";
import "./BlogSection.css";

const BlogSection = () => {
  const blogs = [
    {
      image: "path-to-image-1.jpg",
      title: "Small Business & Startup",
      meta: "Prabhash Mishra • 1 Jan 2023",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl-winning dynasty?",
      tags: ["Tax & Audit", "Management"],
    },
    {
      image: "path-to-image-2.jpg",
      title: "Scale-Up Company Offer",
      meta: "Mahesh Kumar • 1 Jan 2023",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Compliance"],
    },
    {
      image: "path-to-image-3.jpg",
      title: "Growing Business Package",
      meta: "Rakhi Verma • 1 Jan 2023",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Audit", "Money Back"],
    },
    // Add more blogs as needed
  ];

  return (
    <section className="blog-section" id="blog">
      <h2>Explore Our Blogs</h2>
      <div className="blog-container">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} />
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-meta">{blog.meta}</p>
              <p className="blog-description">{blog.description}</p>
              <div className="blog-tags">
                {blog.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="/blogs" className="show-more-btn">
        Show more blogs
      </a>
    </section>
  );
};

export default BlogSection;
