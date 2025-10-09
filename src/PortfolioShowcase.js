import React from "react";
import { motion } from "framer-motion";
import coding from "./images/lifestyle/editing_editing_0009.jpg"
import debug from "./images/lifestyle/editing_lebanon_135mm_c41_lores_0046.jpg";
import frontEnd from "./images/products/editing_products_0209.jpg";
import performance from "./images/events/editing_patron_event_la_0155.jpg";

function PortfolioShowcase() {
    const projects = [
        {
            title: "the Beauty of Lebanon",
            description:
                "35mm film images of Lebanon freeze in time",
            img: debug,
        },
        {
            title: "The Art of black and white",
            description:
                "Chasing the perfect momochromatcic tonality and gradiation",
            img: coding,
        },
        {
            title: "The every day object",
            description:
                "Tryingn to find personalties and characteristics through every day objects",
            img: frontEnd,
        },
        {
            title: "Influencers Dilema",
            description:
                "Following influencers in LA to see how their lives have been indfluenced by their work as full time creators",
            img: performance,
        },
    ];

    return (
        <section className="showcase flex flex-col items-center px-6 py-24 md:py-36 bg-gradient-to-b from-white to-blue-50">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
 <h2 className="text-6xl font-serif text-gray-400 tracking-tight mb-10 text-center">
  <span className="border-b-2 border-gray-500 pb-2">Projects</span>
</h2>


                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, type: "spring", stiffness: 100 }}
                    className="text-xl text-sky-700 font-medium"
                >

                </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 w-full max-w-6xl">
                {projects.map( ( project, index ) => (
                    <motion.div
                        key={index}
                        className="p-6 rounded-3xl shadow-xl bg-white/30 backdrop-blur-lg border border-black-300 text-center hover:scale-105 transition-transform duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="mx-auto w-42 h-48 mb-4"
                        />
                        <h3 className="border-b border-neutral-300 pb-2 mb-4 text-lg font-light text-gray-700">{project.title}</h3>
                        <p className="mt-3 text-gray-700">{project.description}</p>
                    </motion.div>
                ) )}
            </div>
        </section>
    );
}

export default PortfolioShowcase;
