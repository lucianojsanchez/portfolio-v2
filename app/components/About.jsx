import React from 'react';

const AboutMe = () => {
    return (
        <div class=" mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8" id="about">
            <div class="flex items-center my-20 mx-auto max-w-screen-xl">
                <h1 class="text-4xl md:text-6xl font-bold text-gradient bg-gradient-to-r from-blue-300 to-fuchsia-800 bg-clip-text text-transparent leading-tight align-middle py-2 pr-8">
                    About Me
                </h1>
                <div class="h-1 bg-gray-400/20 flex-1 mx-5"></div>
            </div>
            <div class="mx-auto max-w-screen-xl max-xl:max-w-[90%]">
                <div class="bg-slate-900 py-12 rounded-lg shadow-lg shadow-slate-500/20">
                    <div class="flex flex-col justify-center mx-5 space-y-6 sm:space-y-8">
                        <p class="xl:text-xl sm:text-xl font-semibold text-gray-300 mb-4">Hello again!👋</p>
                        <p class="xl:text-xl sm:text-xl font-semibold text-gray-300 mb-4">Thanks for visiting my portfolio, let me tell you a bit about myself😄.</p>
                        <div class="bg-slate-700 rounded-lg shadow-md overflow-hidden">
                            <p class="xl:text-xl sm:text-lg font-semibold text-gray-300 max-[375px]:text-sm p-6">
                                Since childhood, I&apos;ve been passionate about technology, and I was introduced to web development through the PERN stack bootcamp at SoyHenry📚. The experience taught me how to work in a team, improve my problem-solving skills, and deepen my knowledge of web development. I&apos;m always seeking new opportunities to learn and grow, which is why I&apos;m currently enrolled in a Java course.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;