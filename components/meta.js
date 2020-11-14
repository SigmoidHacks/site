import Head from "next/head";

export default ({
  title = "Sigmoid Hacks: Promoting AI & Machine Learning",
  description = "Sigmoid Hacks is a student-led 3 day machine learning hackathon hackathon powered by Hack Club for beginners and advanced ML developers.",
  image = "../static/banner.png",
  url = "https://sigmoidhacks.ml/",
}) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="../static/banner.png" />
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="SigmoidHacks" />
    <meta name="twitter:site" content="@HacksSigmoid" />
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
          name: "sigmoidhacks",
          url: "https://sigmoidhacks.ml/",
          logo: "https://sigmoidhacks.ml/logo.png",
          sameAs: ["https://twitter.com/HacksSigmoid"],
          contactPoint: [
            {
              "@type": "ContactPoint",
              email: "main@nnsg.ml",
              contactType: "customer support",
              url: "https://sigmoidhacks.ml/",
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
          name: "SigmoidHacks",
          startDate: "2019-10-26T9:00",
          endDate: "2019-10-26T21:00",
          description:
            "Sigmoid Hacks is a student-led 3 day machine learning hackathon hackathon powered by Hack Club for beginners and advanced ML developers.",
          isAccessibleForFree: true,
          url: "https://sigmoidhacks.ml",
          image: "../static/logo.png",
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
