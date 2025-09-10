"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code, Server, Database, Globe } from "lucide-react";

export default function Home() {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      "service_h8izbqe",          // Service ID
      "template_760um2q",         // Template ID
      form.current,
      "YOUR_PUBLIC_KEY"           // Public Key / User ID
    )
    .then(
      (result) => {
        console.log(result.text);
        setMessageSent(true);
        form.current?.reset();
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong. Please try again!");
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-indigo-600">Bouzi08</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#skills" className="hover:text-indigo-600">Skills</a>
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-indigo-50 to-white">
        <motion.h2 
          className="text-4xl md:text-6xl font-extrabold text-indigo-700"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m Mokhtar Bouziane
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-2xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Full-Stack Web Developer & DevOps Enthusiast. Passionate about building
          modern, scalable, and user-friendly web applications.
        </motion.p>

        {/* Buttons */}
        <div className="mt-8 flex space-x-4">
          <a
            href="/cv.pdf"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl shadow-md hover:bg-indigo-50 transition"
          >
            Hire Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex space-x-6">
          <a href="https://github.com/bouziane08" target="_blank" rel="noreferrer">
            <Github className="w-6 h-6 hover:text-indigo-600" />
          </a>
          <a href="https://www.linkedin.com/in/bouziane-mokhtar" target="_blank" rel="noreferrer">
            <Linkedin className="w-6 h-6 hover:text-indigo-600" />
          </a>
          <a href="mailto:bouzianemokhtar999@gmail.com">
            <Mail className="w-6 h-6 hover:text-indigo-600" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 bg-white text-center">
        <h3 className="text-3xl font-bold text-indigo-700 mb-6">About Me</h3>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          I’m a self-taught <span className="font-semibold text-indigo-600">Full-Stack Web Developer</span> 
          from Algeria with strong knowledge in modern frontend and backend technologies.  
          I specialize in building scalable applications and deploying them with DevOps tools.  
          I’m passionate about continuous learning, problem-solving, and creating innovative digital solutions.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold text-indigo-700 mb-10">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <Code className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Frontend</h4>
            <p className="text-gray-600">React, Next.js, TypeScript, TailwindCSS, Framer Motion</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <Server className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Backend & DevOps</h4>
            <p className="text-gray-600">Node.js, NestJS, GraphQL, Docker, CI/CD, GitHub Actions</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <Database className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Databases</h4>
            <p className="text-gray-600">PostgreSQL, MongoDB, Redis, Prisma ORM</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 bg-white text-center">
        <h3 className="text-3xl font-bold text-indigo-700 mb-10">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition text-left">
            <img src="/project1.png" alt="Chamo Project" className="rounded-xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Chamo</h4>
            <p className="text-gray-600 mb-4">
              Full-stack web app built from scratch using Next.js, NestJS, PostgreSQL,
              and Docker. Features a modern UI and smooth user experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/bouziane08/chamo"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-indigo-600 hover:underline"
              >
                <Github className="w-5 h-5 mr-1" /> Code
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-indigo-600 hover:underline"
              >
                <Globe className="w-5 h-5 mr-1" /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold text-indigo-700 mb-10">Contact Me</h3>

        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, freelance projects, or just a chat.
        </p>

        <form 
          ref={form} 
          onSubmit={sendEmail}
          className="max-w-2xl mx-auto grid grid-cols-1 gap-6 text-left"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="user_name"
              id="name"
              placeholder="Your Name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Your Message"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>

          {messageSent && (
            <p className="mt-4 text-green-600 font-medium">Message sent successfully!</p>
          )}
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-white mt-20">
        <p className="text-sm text-gray-500">© 2025 Bouzi08. All rights reserved.</p>
      </footer>
    </div>
  );
}
