import React from 'react'
import { Typography } from 'antd';
import {useSelector} from 'react-redux';

const { Title } = Typography;

function BlogDetails({match, title, data}) {
  const blogTitle = title ? title : match.params.title
  const blogs = useSelector(state => state);
  const blog = data ? data : blogs.filter(blog => blog.title === blogTitle)[0];
  return (
    <div style={{ width: '80%', margin: '3rem auto', color: "#000"}}>
      <Title level={2}>{blog.author}`s Post</Title>
      <br />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Title level={4}>{blog.createdAt}</Title>
      </div>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  )
}

export default BlogDetails
