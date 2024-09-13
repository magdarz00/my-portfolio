"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await fetch("https://formspree.io/f/xjkbzdlr", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage("Wiadomość została wysłana pomyślnie!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setErrorMessage("Coś poszło nie tak. Spróbuj ponownie.");
            }
        } catch (error) {
            setErrorMessage("Błąd podczas wysyłania. Spróbuj ponownie.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
            }}
            className="py-12 relative"
        >
            <div className="container mx-auto flex flex-col lg:flex-row items-start lg:space-x-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.6, duration: 0.6, ease: "easeOut" },
                    }}
                    className="flex-1 mb-12 lg:mb-0 text-left w-full lg:w-1/3"
                >
                    <h1 className="text-black font-bold tracking-tighter uppercase leading-none text-4xl mb-8">
                        Skontaktuj się
                    </h1>

                    <a
                        href="mailto:magda00rzepa@gmail.com"
                        className="text-black tracking-tighter leading-none text-lg mb-6 block hover:text-accent transition-all"
                    >
                        magda00rzepa@gmail.com
                    </a>

                    <a
                        href="tel:+48570304383"
                        className="text-black tracking-tighter leading-none text-lg block hover:text-accent transition-all"
                    >
                        (+48) 570 304 383
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.8, duration: 0.6, ease: "easeOut" },
                    }}
                    className="w-full lg:w-2/3"
                >
                    <form onSubmit={handleSubmit} className="bg-white/50 rounded-lg p-8">
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="block text-md font-medium text-black mb-2"
                            >
                                Imię i Nazwisko
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary bg-white/50 placeholder-accent/50"
                                placeholder="Imię i Nazwisko"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block text-md font-medium text-black mb-2"
                            >
                                Adres e-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary bg-white/50 placeholder-accent/50"
                                placeholder="E-mail"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block text-md font-medium text-black mb-2"
                            >
                                Wiadomość
                            </label>
                            <textarea
                                id="message"
                                className="w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary bg-white/50 placeholder-accent/50 h-32"
                                placeholder="Napisz swoją wiadomość"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        {successMessage && (
                            <p className="text-accent font-medium mb-4">{successMessage}</p>
                        )}
                        {errorMessage && (
                            <p className="text-red-800 font-medium mb-4">{errorMessage}</p>
                        )}

                        <div className="text-center lg:text-left">
                            <button
                                type="submit"
                                className={`bg-white/50 text-accent/50 font-medium py-3 w-full rounded-md hover:bg-black hover:text-white transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contact;
