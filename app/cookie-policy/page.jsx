import testi from './testi.json';

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