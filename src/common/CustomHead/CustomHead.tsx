import Head from "next/head";
import { useMemo } from "react";

interface CustomHeadProps {
    title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
    const websiteName = useMemo(() => process.env.NEXT_PUBLIC_WEBSITE_NAME, []);

    return (
        <Head>
            <title>{`${title} - ${websiteName}`}</title>
        </Head>
    );
};

export default CustomHead;
