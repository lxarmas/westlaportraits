import React from "react";
import about from "./images/ale_headshot.png";

function PersonalStory() {
    return (
        <section className="py-12 px-6 bg-white dark:bg-black border-none">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
                <div className="text-center md:text-left max-w-xl">
                    

                  <h2 className="text-4xl font-light tracking-wide text-gray-800 border-b border-gray-400 pb-3 mb-8">
  Who is the Photographer behind West LA Portraits
</h2>

                    <p className="dark:text-white">
                        Alejandro Armas is a professional commercial photographer with over
                        fifteen years of experience. After the COVID pandemic, he had a
                        revelation Photography is a medium that can heal and make our lives a little 
                        better and reflect what are we doing as indivuals.
                    </p>
                </div>

                <div className="flex justify-center">
                    <img
                        src={about}
                        alt="Alex Armas headshot"
                        className="w-48 h-auto rounded-lg shadow-lg md:w-60 lg:w-72"
                    />
                </div>
            </div>
        </section>
    );
}

export default PersonalStory;
