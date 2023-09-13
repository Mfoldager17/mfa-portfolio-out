"use client"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div 
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{duration:0.5}}
                className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-[#b8b6b6] mb-4 sm:mt-0 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#00e554] via-[#00762f] to-[#003a17]">
                            Hello, I&apos;m {" "}
                        </span>
                        <br />
                        <TypeAnimation
                        sequence={[
                            "Mathias", 1000,
                            "FullStack Developer", 1000, 
                            "UI/UX Designer", 1000, 
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#b8b6b6] text-base sm:text-lg lg:text-xl mb-6">
                        lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque, voluptatem.
                    </p>
                    <div>
                        <button className="text-[#b8b6b6] w-full sm:w-fit bg-gradient-to-tr from-[#00e554] via-[#00762f] to-[#003a17] hover:bg-[#585858] mr-4 px-1 py-1 rounded-full mt-3">
                           <span className="block bg-[#121212] rounded-full px-5 py-2 hover:bg-gradient-to-tr from-[#00e554] via-[#00762f] to-[#003a17]"> 
                           Hire Me
                           </span>
                        </button>

                        <button className="text-[#b8b6b6] w-full sm:w-fit bg-gradient-to-tr from-[#00e554] via-[#00762f] to-[#003a17] hover:bg-[#585858] px-1 py-1 rounded-full mt-3">
                           <span className="block bg-[#121212] rounded-full px-5 py-2 hover:bg-gradient-to-tr from-[#00e554] via-[#00762f] to-[#003a17]">
                             Download CV 
                            </span>
                        </button>
                    </div>
                </motion.div>
                <div className="col-span-5 place-self-center mt-4 xl:mt-28">
                    <div className="rounded-full w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] xl:ml-16">
                        <Image
                            src="/coding.jpg"
                            alt="mfa"
                            width={500}
                            height={500}
                            quality={100}
                            className="rounded-[500px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
