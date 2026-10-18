import React from 'react';

import Header from '../organisms/header';
import Footer from '../organisms/footer';
import usePageTitle from '../../hooks/usePageTitle';
import SectionTitle from '../atoms/SectionTitle';
import { buttonClasses } from '../atoms/Button';

import CV_Theo from '../../assets/pdf/Theo_Spetebroot_CV.pdf';

const contactLinks = [
    {
        label: 'Email',
        value: 'theo.spetebroot@gmail.com',
        href: 'mailto:theo.spetebroot@gmail.com',
        path: 'M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z',
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/théo-spetebroot',
        href: 'https://www.linkedin.com/in/th%C3%A9o-spetebroot/',
        path: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z',
    },
    {
        label: 'GitHub',
        value: 'github.com/Tidragon-coder',
        href: 'https://github.com/Tidragon-coder',
        path: 'M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2',
    },
];

const Contact = () => {
    usePageTitle('Contact');
    return (
        <div>
            <Header />
            <section className="min-h-[80vh] px-6 pt-36 pb-20 text-white">
                <div className="max-w-5xl mx-auto">
                    <SectionTitle
                        as="h1"
                        title="Contact"
                        subtitle="Un projet, une collaboration ou une opportunité ? N’hésite pas à me contacter, je réponds généralement sous 24h."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactLinks.map((contact) => (
                            <a
                                key={contact.label}
                                href={contact.href}
                                {...(contact.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                className="group flex flex-col items-center text-center rounded-2xl border border-white/10 bg-surface/80 backdrop-blur px-5 py-8 transition duration-300 hover:-translate-y-1 hover:border-secondary"
                            >
                                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/20 text-highlight mb-5 transition-colors group-hover:bg-secondary group-hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d={contact.path} /></svg>
                                </span>
                                <h2 className="text-lg font-semibold mb-1">{contact.label}</h2>
                                <span className="text-sm text-white/70 [overflow-wrap:anywhere]">{contact.value}</span>
                            </a>
                        ))}
                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/10 bg-surface/80 backdrop-blur p-8">
                        <div className="text-center sm:text-left">
                            <h2 className="text-lg font-semibold">Mon CV</h2>
                            <p className="text-sm text-white/70 mt-1">Toutes mes expériences et compétences sur une page.</p>
                        </div>
                        <a href={CV_Theo} target="_blank" rel="noopener noreferrer" className={buttonClasses('primary')}>
                            Télécharger mon CV
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;
