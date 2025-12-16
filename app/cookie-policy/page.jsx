import testi from './testi.json';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sarabianchi.it";

export const metadata = {
    title: "Cookie policy | Sara Bianchi sceneggiatrice a Torino",
    description:
        "Cookie policy e gestione dei dati di navigazione del sito ufficiale di Sara Bianchi, sceneggiatrice e story editor a Torino.",
    alternates: { canonical: `${siteUrl}/cookie-policy` },
    robots: { index: true, follow: true },
    openGraph: {
        title: "Cookie policy | Sara Bianchi",
        description:
            "Informativa sui cookie del sito di Sara Bianchi, sceneggiatrice e consulente narrativa a Torino.",
        url: `${siteUrl}/cookie-policy`,
    },
};

export default function CookiePolicy() {
    const { cookiePolicy } = testi;

    return (
        <div className='container py-10 space-y-10'>
            <h1 className='text-32'>{cookiePolicy.title}</h1>
            {cookiePolicy.sections.map((section, index) => (
                <div key={index} className='space-y-4'>
                    <h2 className='text-26'>{section.title}</h2>
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                </div>
            ))}
        </div>
    );
}
