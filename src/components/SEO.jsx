import { Helmet } from "react-helmet";


export default function SEO({ title, description, canonical, ogImage }) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:type" content="website" />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
    </Helmet>
  );
}




