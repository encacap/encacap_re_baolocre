import Head from "next/head";
import { useMemo } from "react";
import { HTMLHeadType } from "../../types/commonTypes";

interface CustomHeadProps {
  head: HTMLHeadType;
}

function CustomHead({ head }: CustomHeadProps) {
  const websiteName = useMemo(() => process.env.NEXT_PUBLIC_WEBSITE_NAME, []);

  return (
    <Head>
      <title>{`${head.title} - ${websiteName}`}</title>
    </Head>
  );
}

export default CustomHead;
