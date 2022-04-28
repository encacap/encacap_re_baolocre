import Head from "next/head";

interface CustomHeadProps {
    title: string;
}

function CustomHead({ title }: CustomHeadProps) {
    return (
        <Head>
            {title && (
                <title>
                    {title} - {process.env.NEXT_PUBLIC_WEBSITE_NAME}
                </title>
            )}
        </Head>
    );
}

export default CustomHead;
