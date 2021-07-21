import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogListPaginator from '@theme/BlogListPaginator';

function BlogListPage(props) {
  const {metadata, items} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const title = 'Changelog';

  return (
    <Layout title={title} description="Changelog">
      <div className="container margin-vert--lg">
        <div className="row">
          <main className="col col--8 col--offset-2">
            {items.map(({content: BlogPostContent}) => (
              <BlogPostItem
                key={BlogPostContent.metadata.permalink}
                frontMatter={BlogPostContent.frontMatter}
                metadata={BlogPostContent.metadata}
                truncated={BlogPostContent.metadata.truncated}>
                <BlogPostContent />
              </BlogPostItem>
            ))}
            <BlogListPaginator metadata={metadata} />
          </main>
        </div>
      </div>
    </Layout>
  );
}

export default BlogListPage;