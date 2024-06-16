import Head from 'next/head'
import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata.json'

const CommonSEO = ({
  title,
  description,
  ogType,
  ogImage,
}: PageSEOProps & {
  ogType: string
  ogImage: string
}): JSX.Element => {
  const router = useRouter()
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta
        property="og:url"
        content={`${siteMetadata.siteUrl}${router.asPath}`}
      />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={`${siteMetadata.siteUrl}${router.asPath}`} />
    </Head>
  )
}

export const PageSEO = ({ title, description }: PageSEOProps): JSX.Element => {
  return (
    <CommonSEO
      title={`${title} - ${siteMetadata.title}`}
      description={description}
      ogType="website"
      ogImage={`${siteMetadata.siteUrl}${siteMetadata.siteBanner}`}
    />
  )
}

export const TagSEO = ({ title, description }: PageSEOProps): JSX.Element => {
  const router = useRouter()

  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        ogType="website"
        ogImage={`${siteMetadata.siteUrl}${siteMetadata.siteBanner}`}
      />
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${description} - RSS feed`}
          href={`${siteMetadata.siteUrl}${router.asPath}/feed.xml`}
        />
      </Head>
    </>
  )
}

export const HomeSEO = (): JSX.Element => {
  return (
    <CommonSEO
      title={siteMetadata.title}
      description={siteMetadata.description}
      ogType="website"
      ogImage={`${siteMetadata.siteUrl}${siteMetadata.siteBanner}`}
    />
  )
}

// export const PostSEO = ({ title, summary, date, url, thumbnail }) => {
//   const publishedAt = new Date(date).toISOString()

//   const featuredImage = {
//     '@type': 'ImageObject',
//     url: siteMetadata.siteUrl + thumbnail,
//   }

//   const ogImage = siteMetadata.siteUrl + thumbnail

//   const author = {
//     '@type': 'Person',
//     name: siteMetadata.author,
//   }

//   const structuredData = {
//     '@context': 'https://schema.org',
//     '@type': 'Article',
//     mainEntityOfPage: {
//       '@type': 'WebPage',
//       '@id': url,
//     },
//     headline: title,
//     image: featuredImage,
//     datePublished: publishedAt,
//     author: author,
//     publisher: {
//       '@type': 'Organization',
//       name: siteMetadata.author,
//       logo: {
//         '@type': 'ImageObject',
//         url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
//       },
//     },
//     description: summary,
//   }

//   return (
//     <>
//       <CommonSEO
//         title={title}
//         description={summary}
//         ogType="article"
//         ogImage={ogImage}
//       />
//       <Head>
//         {date && (
//           <meta property="article:published_time" content={publishedAt} />
//         )}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(structuredData, null, 2),
//           }}
//         />
//       </Head>
//     </>
//   )
// }
