import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";
import { Big_Shoulders, Poppins } from "next/font/google";
import Heade from "@/components/layout/heade";
import Scripts from "@/components/layout/scripts";
import Indexlayout from "@/components/layout";
// import "@/../public/assets/vendor/fontawesome/css/all.min.css";
// import "@/../public/assets/vendor/swiper/css/swiper-bundle.min.css";
// import "@/../public/assets/css/helper.css";
// import "@/../public/assets/css/theme.css";
// import "@/../public/assets/css/theme-light.css";

const bigShouldersDisplay = Big_Shoulders({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-big-shoulders-display",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://banglore.deltainstitutions.com"),
  alternates: {
    canonical: "/",
  },
  title: "Delta International Institute",
  description: "Delta International Institute offers expert-led Forex, Crypto and Market courses with transparent fees and global mentors. Start learning online or offline today. Delta is a leading trading institution from Dubai and a Guinness World Record holder. Now launching in Bangalore, with complimentary course access for the first 49 students.",
  keywords: [
    "trading academy",
    "trading academy bangalore",
    "trading academy bangalore",
    "trading academy bangalore",
    "trading academy bangalore",
    "Delta trading",
    "Delta trading academy",
    "Delta trading academy bangalore",
    "Delta trading academy bangalore",
    "Delta trading academy bangalore",
    "Delta trading academy bangalore",
  ],
  openGraph: {
    title: "Delta Trading",
    description:
      "Bangalore’s Trusted Trading Hub Delta Trading Academy helps you master the art of trading ,At Elegant Trading Academy, we are a team of passionate financial educators and market professionals committed to helping individuals and professionals excel in the world of trading. From mastering charts to launching your own brokerage, our academy is your one-stop destination to learn, practice, and grow.",
    images: ["/logo-min.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Delta International Institute",
  url: "https://banglore.deltainstitutions.com/",
  logo: "https://banglore.deltainstitutions.com/logo-min.png",
  email: "info@deltainstitutions.com",
  telephone: "+91 91872 36407",
  sameAs: [
    "https://www.facebook.com/profile.php?id=100092268086708",
    "https://www.instagram.com/delta_international_institute?igshid=YmMyMTA2M2Y%3D",
    "https://www.linkedin.com/company/delta-international-academy",
    "https://x.com/DeltaI17228/",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Delta International Institute Bangalore",
  image: "https://banglore.deltainstitutions.com/logo-min.png",
  url: "https://banglore.deltainstitutions.com/",
  telephone: "+91 91872 36407",
  email: "info@deltainstitutions.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "#412A, 4th Floor, Prestige Towers, Residency Road",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560025",
    addressCountry: "IN",
  },
  priceRange: "$$",
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://banglore.deltainstitutions.com/",
  name: "Delta International Institute Bangalore",
  publisher: {
    "@type": "Organization",
    name: "Delta International Institute",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Forex Trading Institute in Bangalore",
  url: "https://banglore.deltainstitutions.com/",
  description:
    "Delta International Institute offers professional Forex Trading, Crypto Trading and Market Education courses in Bangalore.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://banglore.deltainstitutions.com/",
    },
  ],
};

const globalSchemas = [
  organizationSchema,
  localBusinessSchema,
  webSiteSchema,
  webPageSchema,
  breadcrumbSchema,
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Heade />
      <body
        suppressHydrationWarning
        id="body"
        className={` ${bigShouldersDisplay.variable} ${poppins.variable} tt-transition tt-lightmode-on tt-noise tt-magic-cursor tt-smooth-scroll antialiased`}
      >
        {globalSchemas.map((schema) => (
          <script
            key={schema["@type"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <main suppressHydrationWarning id="body-inner">
          <Indexlayout>{children}</Indexlayout>
        </main>
        <Scripts />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MBTMFQM1V7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MBTMFQM1V7');
          `}
        </Script>
      </body>
    </html>
  );
}
