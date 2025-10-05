import React from "react";
import { ReactComponent as Logo } from "./images/fivestar.svg";


function CustomerSays() {
    return (
        <div className="bg-grey-500 py-12 dark:bg-black">
            <section className="max-w-7xl mx-auto text-center text-black dark:text-white">
               

                <div className="flex flex-col md:grid md:grid-cols-3 gap-10">
                    {/* Testimonial 1 */}
                    <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform">
                        <div className="flex items-center justify-center mb-4">
                            <Logo className="w-29 h-29 text-cyan-300 fill-current" />

                        </div>
                        <h5 className="text-2xl font-bold text-cyan-700 mb-3">"Super fast and incredible to work with!"</h5>
                        <p className="dark:text-white">
                            "I love my portrait session with West LA Portraits, it was easy, convenient and the images came even better what I thought"
                        </p>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform">
                        <div className="flex items-center justify-center mb-4">
                            <Logo className="w-29 h-29 text-cyan-300 fill-current" />

                        </div>
                        <h5 className="text-2xl font-bold text-cyan-700 mb-3">"I highly recommend West LA Portraits"</h5>
                        <p className="dark:text-white">
                            "No challenge is too big for Alejandro. He went far and beyond to make sure we were hundred percent happy with our images. I can't wait for next year to get my 
                            family portrait taken again and see how me and my family create this beautiful moments"
                        </p>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform">
                        <div className="flex items-center justify-center mb-4">
                            <Logo className="w-29 h-29 text-cyan-300 fill-current" />

                        </div>
                        <h5 className="text-2xl font-bold text-cyan-700 mb-3">"I am in love with West LA Portraits"</h5>
                        <p className="dark:text-white font-medium">
                            "Alejandro is a go-getter since the beggining he created templates and mood boards so our imputs and 
                            vision can be accomplished, it really felt we were making the images together :) "
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CustomerSays;
