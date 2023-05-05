import Head from "next/head";
import { HTMLHeadType } from "../../types/commonTypes";

interface CustomHeadProps {
  head: HTMLHeadType;
}

const CustomHead = ({ head }: CustomHeadProps) => {
  return (
    <Head>
      <title>{`${head.title} - ${head.siteName}`}</title>
    </Head>
  );
};

export default CustomHead;
