import Image from "next/image"

export default function HeroSection() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">

                    <h1 className="text-[#b8b6b6]  mb-4 text-4xl lg:text-6xl font-extrabold">
                        Hello, I'm Mathias
                    </h1>
                    <p className="text-[#b8b6b6] text-lg lg:text-xl mb-6">
                        lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque voluptatem.
                    </p>
                    <div>
                        <button className="bg-[#b8b6b6] hover:bg-[#707070] px-6 py-3 rounded-full mr-4">Hire Me</button>
                        <button className="text-[#b8b6b6] border border-white bg-transparent hover:bg-[#585858] px-6 py-3 rounded-full mt-3">Download CV</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]">
                        <Image
                            src="/mfa.jpg"
                            alt="mfa"
                            width={500}
                            height={500}
                            quality={100}
                            className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
