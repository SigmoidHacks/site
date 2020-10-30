import Head from "next/head";

export default ({
  title = "Sigmoid Hacks: Promoting AI & Machine Learning",
  description = "A 12-hour hackathon for everyone.",
  image = "https://angelhacks.org/static/banner-inverted.png",
  url = "http://sigmoidhacks.ml/",
}) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="../static/logo.png" />
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="AngelHacks" />
    <meta name="twitter:site" content="@angelhacks_la" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "angelhacks",
          url: "http://sigmoidhacks.ml/",
          logo: "http://sigmoidhacks.ml/logo.png",
          sameAs: [
            "https://twitter.com/HacksSigmoid",
            // "https://www.instagram.com/angelhacks.la",
            // "https://www.facebook.com/angelhacks_la",
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              email: "hello@angelhacks.org",
              contactType: "customer support",
              url: "http://sigmoidhacks.ml/",
            },
          ],
        }),
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org/",
          "@type": "Event",
          name: "AngelHacks",
          startDate: "2019-10-26T9:00",
          endDate: "2019-10-26T21:00",
          description:
            "Register today for 12 hours of coding, fun, free food, and prizes. AngelHacks will be on October 26, 2019 and open to all middle and high school students.",
          isAccessibleForFree: true,
          url: "https://angelhacks.org",
          image: "https://angelhacks.org/static/logo-inverted.png",
          sponsor: {
            "@type": "Organization",
            name: "Hack Club",
            url: "https://hackclub.com",
          },
          offers: {
            "@type": "Offer",
            name: "Free Admission",
            url: "http://sigmoidhacks.ml/",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            validFrom: "2019-04-01",
            validThrough: "2019-06-22",
          },
          performer: {
            "@type": "PerformingGroup",
            name: "Sigmoid Hacks Team",
          },
        }),
      }}
    />
  </Head>
);
