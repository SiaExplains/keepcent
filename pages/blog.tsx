import Link from 'next/link';
import Layout from '../src/components/Layout/Layout';

const BlogPage = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Welcome to Blog!</h1>
        <div className="blog-container">
          <h2>The first post</h2>
          <div className="blog-date">9/12/2022</div>
          <div>
            <p>
              In this post we introduce KeepCent. KeepCent is a simple playground app for developing
              a personal budget application...
            </p>
            <div className="tags">
              <span className="tag">App</span>
            </div>
            <Link href={'#'}>
              <a className="read-more">Read More</a>
            </Link>
          </div>
        </div>
        <div className="blog-container">
          <h2>The second post</h2>
          <div className="blog-date">9/12/2022</div>
          <div>
            <p>
              In this post we introduce KeepCent. KeepCent is a simple playground app for developing
              a personal budget application...
            </p>
            <div className="tags">
              <span className="tag">App</span>
            </div>
            <Link href={'#'}>
              <a className="read-more">Read More</a>
            </Link>
          </div>
        </div>
        <div className="blog-container">
          <h2>The third post</h2>
          <div className="blog-date">9/12/2022</div>
          <div>
            <p>
              In this post we introduce KeepCent. KeepCent is a simple playground app for developing
              a personal budget application...
            </p>
            <div className="tags">
              <span className="tag">App</span>
            </div>
            <Link href={'#'}>
              <a className="read-more">Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
