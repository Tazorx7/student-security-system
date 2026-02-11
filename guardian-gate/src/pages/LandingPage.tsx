import React from 'react';
import { Hero } from '../components/landing/Hero';
import { Features } from '../components/landing/Features';
import { Security } from '../components/landing/Security';
import { CTA } from '../components/landing/CTA';

const LandingPage = () => {
    return (
        <main className="flex-grow">
            <Hero />
            <Features />
            <Security />
            <CTA />
        </main>
    );
};

export default LandingPage;
