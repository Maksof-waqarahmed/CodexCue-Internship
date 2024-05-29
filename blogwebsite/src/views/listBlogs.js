import React from 'react';
import '../style/listBlogs.css';
import data from '../data.json';
import { useNavigate } from 'react-router-dom';

const BlogsList = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1 className='main-heading'>Explore Our Blogs</h1>
            <p className="tagline">Dive into a collection of insights, stories, and experiences from our writers.</p>
            <div className="grid-container">
                {data.map((post, index) => {
                    const { id, title, content, author} = post
                    return (
                        <div onClick={() => navigate(`/postBlog/${id}`)} className="card" key={index}>
                            <img src={post.image} alt='' className="card-image" />
                            <h3 className="card-title">{title}</h3>
                            <p className="card-text">{content}</p>
                            <div className="card-footer">
                                <div className="author-info">
                                    <span className="author-name">{author}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BlogsList;
