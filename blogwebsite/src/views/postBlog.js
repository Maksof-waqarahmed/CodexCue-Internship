import React, { useEffect, useState } from 'react';
import '../style/postBlog.css';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const PostBlog = () => {
    const { id } = useParams();
    const [selectBlog, setSelectBlog] = useState(null);

    useEffect(() => {
        getBlogDetail();
    }, [id]);

    const getBlogDetail = () => {
        const blog = data.find((item) => item.id === parseInt(id));
        console.log('Blog', blog);
        setSelectBlog(blog);
    };

    return (
        <div className='main_div_outer'>
            <h1 className='heading'>Blog Detail</h1>
            <p className="mainTagline">Dive into a collection of insights, stories, and experiences from our writers.</p>

            {selectBlog ? (
                <div className='main_div_inner'>
                    <div className='right_div'>
                        <h1 className="heading_blog">{selectBlog.title}</h1>
                        <p className="blog-text">{selectBlog.content}</p>
                        <p className="author-name">{selectBlog.author}</p>
                    </div>
                    <div className='left_div'>
                        <img className='img' src={selectBlog.image} alt={selectBlog.title} />
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PostBlog;
