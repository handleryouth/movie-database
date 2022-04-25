import Head from 'next/head'

import { SeoProps } from 'types'

const Seo = ({ title, description }: SeoProps) => {
  return (
    <Head>
      <title>{title ?? 'Movie Database'}</title>
      <meta name="title" content={title ?? 'Movie Database'} />
      <meta
        name="description"
        content={`${
          description ??
          'Movie Database is a simple movie database app that allows you to search for movies and add them to your watchlist.'
        }`}
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.handleryouth.xyz/" />
      <meta property="og:title" content={title ?? 'Movie Database'} />
      <meta
        property="og:description"
        content={`${
          description ??
          'Movie Database is a simple movie database app that allows you to search for movies and add them to your watchlist.'
        }`}
      />
      <meta
        property="og:image"
        content="https://i.ibb.co/YWJyXBv/handleryouth-xyz.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.handleryouth.xyz/" />
      <meta property="twitter:title" content={title ?? 'Movie Database'} />
      <meta
        property="twitter:description"
        content={`${
          description ??
          'Movie Database is a simple movie database app that allows you to search for movies and add them to your watchlist.'
        }`}
      />
      <meta
        property="twitter:image"
        content="https://i.ibb.co/YWJyXBv/handleryouth-xyz.webp"
      />
    </Head>
  )
}

export default Seo
