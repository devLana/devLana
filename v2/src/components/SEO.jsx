import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";

function SEO({ seo, pageDescription, pageTitle }) {
  const { site } = useStaticQuery(query);
  const { title, description, twitter } = site.siteMetadata;

  const { hostname, origin, href } = useLocation();

  const imageUrl = `${origin}/logo.svg`;

  const metaTitle = pageTitle ? `${pageTitle} | ${title}` : title;
  const metaDescription = pageDescription || description;

  let isDemo;

  if (typeof window !== "undefined") {
    isDemo = hostname.includes("demo");
  }

  return (
    <Helmet>
      <html lang="en" />
      <title>{metaTitle}</title>
      <meta
        name="robots"
        content={seo && !isDemo ? "index,follow" : "noindex,nofollow"}
      />
      <meta name="author" content={title} />
      <meta name="description" content={metaDescription} />
      {seo && <meta name="og:title" content={metaTitle} />}
      {seo && <meta name="og:description" content={metaDescription} />}
      {seo && <meta name="og:url" content={href} />}
      {seo && <meta name="og:type" content="website" />}
      {seo && <meta name="og:image" content={imageUrl} />}
      {seo && <meta name="twitter:title" content={metaTitle} />}
      {seo && <meta name="twitter:description" content={metaDescription} />}
      {seo && <meta name="twitter:site" content={twitter} />}
      {seo && <meta name="twitter:creator" content={twitter} />}
      {seo && <meta name="twitter:card" content="summary_large_image" />}
      {seo && <meta name="twitter:image" content={imageUrl} />}
      {seo && <meta itemprop="name" content={metaTitle} />}
      {seo && <meta itemprop="description" content={metaDescription} />}
      {seo && <meta itemprop="image" content={imageUrl} />}
      {seo && !isDemo && <link rel="canonical" origin={href} />}
    </Helmet>
  );
}

const query = graphql`
  query siteMetaData {
    site {
      siteMetadata {
        title
        description
        twitter
      }
    }
  }
`;

SEO.propTypes = {
  seo: PropTypes.bool,
  description: PropTypes.string,
  title: PropTypes.string,
};

export default SEO;
