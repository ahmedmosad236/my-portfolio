import { GENERAL_INFO } from '@/lib/data';
// import { GitFork, Star } from 'lucide-react';

const Footer = async () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-3 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="mb-8">
                    <a
                        href="https://wa.me/201009026348"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl sm:text-3xl font-anton inline-block hover:underline"
                    >
                        WhatsApp: +201009026348
                    </a>
                </div>

                <div className="">
                    <a
                        href="https://github.com/ahmedmosad236"
                        target="_blank"
                        className="leading-none text-muted-foreground hover:underline hover:text-white"
                    >
                        Design & built by Ahmed Mosaad
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
