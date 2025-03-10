import Image from 'next/image';

const Partners = () => {
  const partnersImages = [
    { src: '/img/partner-1.jpg', size: 200, z: 1, m: 0 },
    { src: '/img/partner-2.jpg', size: 480, z: 2, m: 10 },
    { src: '/img/partner-3.jpg', size: 670, z: 3, m: 20 },
    { src: '/img/partner-4.jpg', size: 300, z: 4, m: 30 },
    { src: '/img/partner-5.jpg', size: 420, z: 5, m: 40 },
    { src: '/img/partner-6.png', size: 420, z: 6, m: 50 },
  ];

  return (
    <section className="w-[90vw] mx-auto lg:py-20 py-10">
      {/* Section Title */}
      <div className="flex flex-row items-center justify-center lg:justify-normal mb-7">
        <p className="w-8 h-1 bg-purple-600 rounded-2xl mr-3 opacity-65"></p>
        <h2 className="lg:text-start text-xl font-bold text-purple-600 text-center">Partners</h2>
        <p className="w-8 h-1 bg-purple-600 rounded-2xl m-3 opacity-65"></p>
      </div>

      {/* Content Container */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
        {/* Left Column (Image) */}
        <div className="lg:w-[50%] w-full mx-auto">
          <div className="lg:w-[84%] lg:h-[84%] w-[90%] h-[90%] mx-auto lg:mx-0">
            <Image
              src="/img/woman-techie.jpg"
              alt="Woman Techie"
              width={200}
              height={200}
              layout="responsive"
              quality={100}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Column (Text and Logos) */}
        <div className="w-[92%] mx-auto lg:w-[50%]">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 lg:mt-0">
            Our Trusted Partners
          </h3>
          <h1 className="text-lg md:text-xl font-semibold mt-3">
            Unmatched Excellence in the World of Software Tech
          </h1>
          <p className="text-sm md:text-base leading-6 mt-6 font-medium w-full lg:w-[70%]">
            Our partners are the best in the industry. They have helped us grow and we are proud to
            be associated with them. We are always looking for new partners to join us on our mission
            to provide quality education to everyone.
          </p>

          {/* Partner Logos and Reviews */}
          <div className="flex flex-col lg:flex-row items-center gap-7 mt-12">
            {/* Partner Logos */}
            <div className='flex items-center -space-x-3'>
                    {partnersImages.map((partner, i) => (
                        <div
                        key={i}
                        className="w-16 h-16 rounded-full border-2 border-accent overflow-hidden relative shadow-md"
                        >
                        <Image
                            src={partner.src}
                            alt={partner.src}
                            width={partner.size}
                            height={partner.size}
                            className="object-cover w-full h-full"
                        />
                        </div>
                    ))} 
                </div>

            {/* Reviews */}
            <div className="text-center lg:text-left">
              <p className="text-xl font-medium text-gray-600">
                Excellent <strong>200+</strong>
              </p>
              <p className="text-sm lg:text-base">Customer reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;