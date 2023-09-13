import Image from "next/image"

const AboutSection = () => {
  return (
    <section>
        <h1 className="text-[#b8b6b6]">ABOUT</h1>
        <div className="mt-24 rounded-[115px] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]">
            <Image
                src={'/mfa.jpg'}
                alt="mfa-pic"
                width={500}
                height={500}
                className="rounded-[115px] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]"
            />
        </div>
    </section>
  )
}

export default AboutSection