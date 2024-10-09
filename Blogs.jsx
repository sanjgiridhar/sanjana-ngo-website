import React from 'react';
import './Blogs.css';
import blog_1 from '../assets/education.jpg'
import blog_2 from '../assets/community.jpg'
import blog_3 from '../assets/donate.jpg';
const BlogNewsSection = () => {
  const posts = [
    {
      title: 'Empowering Communities Through Education',
      author: 'John Doe',
      date: 'August 10, 2024',
      image: blog_1,
      excerpt: 'Explore how our education programs are transforming lives across the community...',
      link: '#'
    },
    {
      title: 'Success Story: From Volunteer to Leader',
      author: 'Jane Smith',
      date: 'August 5, 2024',
      image: blog_2,
      excerpt: 'Read about how one of our volunteers became a leading force in our organization...',
      link: '#'
    },
    {
      title: 'Upcoming Fundraising Event: Join Us!',
      author: 'Emily Johnson',
      date: 'August 2, 2024',
      image: blog_3,
      excerpt: 'Don’t miss our upcoming fundraising event designed to support our latest initiatives...',
      link: '#'
    }
  ];

  return (
    <section className="blog-news-section">
      <h2>Latest Updates</h2>
      <div className="posts-container">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-content">
              <h3 className="post-title">{post.title}</h3>
              <div className="post-meta">
                <span className="post-author">{post.author}</span> | 
                <span className="post-date">{post.date}</span>
              </div>
              <p className="post-excerpt">{post.excerpt}</p>
              <a href={post.link} className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogNewsSection;
