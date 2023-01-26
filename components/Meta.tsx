import Head from "next/head";

interface Props {
  title: string;
  description: string;
  keywords: string;
}

const Meta = ({ title, description, keywords }: Props) => {
  return (
    <Head>
      <title>Create Next App</title>
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

// Meta.defaultProps = {
//   title: "Minimal80s",
//   keywords: "Movie app, 80s",
//   description: "80s movies",
// };

export default Meta;
