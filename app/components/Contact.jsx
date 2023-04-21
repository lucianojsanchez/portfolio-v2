"use client"

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ContactSection from './ContactSection';


const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            };
            await emailjs.send('service_v7hhc7d', 'template_xqx3omd', templateParams, "J7ZeHmoIAxAW5X87M")
            setMessage('Your message has been sent!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error(error);
            setMessage('There was an error sending your message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (

        <div className="my-8 mx-auto max-w-screen-xl">
            <div className="flex items-center my-20 mx-auto max-w-screen-xl">
                <h1 className="text-4xl md:text-6xl font-bold text-gradient bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent leading-tight align-middle py-2 pr-8">Contact</h1>
                <div className="h-1 bg-gray-400/20 flex-1 mx-5"></div>
            </div>
            <div className="mx-auto max-w-screen-xl max-xl:max-w-[80%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto pt">
                    <ContactSection />
                    <div className="flex flex-col justify-center">
                        <div className="bg-slate-900 py-12 rounded-lg">
                            <form onSubmit={handleSubmit} className="space-y-6 space-x-6">
                                <div className='ml-6'>
                                    <label htmlFor="name" className="block text-lg font-bold text-white">
                                        Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="given-name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-5/6 sm:text-lg border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-lg font-bold text-white mb-3">
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-5/6 sm:text-lg border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-lg font-bold text-white">
                                        Message
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-5/6 sm:text-lg border-gray-300 rounded-md text-black"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-gradient-to-r ${isSubmitting ? 'from-gray-400 to-gray-400 cursor-not-allowed' : 'from-blue-600 to-indigo-800 hover:from-indigo-600'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </form>
                            {message && <p className="text-lg mt-4">{message}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;