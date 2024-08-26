import React, { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_tqmc439',
          'template_dkizbfj',
          form.current,
          'LioYY1uKGcefsmdlH'
        )
        .then(
          () => {
            setShowPopup(true);
            // Reset the form after successful submission
            form.current?.reset();
            // Hide popup after 5 seconds
            setTimeout(() => setShowPopup(false), 5000);
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <>
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-black py-20 px-6 lg:px-20 flex flex-col items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 opacity-50 rounded-lg"></div>
        <div className="absolute top-1/4 left-64 w-56 h-56 bg-gradient-to-br from-white to-darkGray opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-64 w-56 h-56 bg-gradient-to-br from-purple-400 to-indigo-600 opacity-30 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
        <div className="relative z-10 max-w-4xl mx-auto p-8 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg text-white">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-12 relative inline-block transform rotate-3 origin-top-right">
            Got a Project? Get in Touch
            <div className="absolute bottom-[-10px] left-0 w-full flex flex-col items-center space-y-[-1px]"></div>
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-teal-500 focus-within:ring-1 focus-within:ring-blue-600">
              <input
                type="text"
                name="from_name"
                id="user_name"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full p-3"
                placeholder="Name"
                required
              />
              <span
                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-800 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
              >
                Name
              </span>
            </div>

            <div className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-teal-500 focus-within:ring-1 focus-within:ring-blue-600">
              <input
                type="email"
                name="from_email"
                id="user_email"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full p-3"
                placeholder="Email"
                required
              />
              <span
                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-800 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
              >
                Email
              </span>
            </div>

            <div className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-teal-500 focus-within:ring-1 focus-within:ring-blue-600">
              <textarea
                name="message"
                id="message"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full p-3"
                placeholder="Message"
                required
              />
              <span
                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-800 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
              >
                Message
              </span>
            </div>

            <div className='flex justify-center'>
              <button
                type="submit"
                className="relative px-6 py-3 font-bold text-white rounded-lg group overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-blue-600 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-blue-700 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                <span className="relative">Send</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {showPopup && (
        <div
          role="alert"
          className="fixed top-24 right-4 z-50 rounded-xl border border-gray-800 bg-gray-900 p-4 dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="flex items-start gap-4 ml-10">
            <span className="text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>

            <div className="flex-1">
              <strong className="block font-medium text-white">Email Sent</strong>
              <p className="mt-1 text-sm text-white">
                Your email has been successfully sent.
              </p>
            </div>

            <button
              className="text-gray-400 transition hover:text-gray-300"
              onClick={() => setShowPopup(false)}
            >
              <span className="sr-only">Dismiss popup</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUs;
