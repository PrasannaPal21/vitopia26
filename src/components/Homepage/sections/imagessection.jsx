import Image from "next/image";

export default function Images() {
  const imageStrapi = [
    {
      Image: {
        data: [
          { attributes: { url: "https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/vitopia/prime+Events/VSTEP+UP+CLASSICAL+A4+UPDATED.avif" } },
          { attributes: { url: "https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/vitopia/prime+Events/design-VGLAM-WESTERN-A4.avif" } },
          { attributes: { url: "https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/vitopia/prime+Events/vglam-traditional-a4-5.avif" } },
          { attributes: { url: "https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/vitopia/prime+Events/vgiggle+stand+up+comedy+A4+website.avif" } },
          { attributes: { url: "https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/vitopia/prime+Events/v-designer+(A4)-2.avif" } },
          { attributes: { url: "https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/vitopia/prime+Events/NUKKAD+NATAK+A4.avif" } },
          { attributes: { url: "https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/vitopia/prime+Events/design+-+VSTEPUP+MODERN+A4.avif" } },
        ],
      },
    },
  ];

  return (
    <div className="bg-black text-white w-full h-full md:py-6 lg:py-10 mt-3 md:mt-0">
      <div className="overflow-hidden">
        <div className="lg:grid-cols-7 hidden lg:grid">
          {imageStrapi[0].Image.data.slice(0, 7).map((item, index) => (
            <div key={index} className="w-full h-24 md:h-44 lg:h-80 relative">
              <Image
                src={item.attributes.url}
                layout="fill"
                objectFit="contain"
                alt="Displayed image"
              />
            </div>
          ))}
        </div>
        <div className="md:grid-cols-6 hidden md:grid lg:hidden">
          {imageStrapi[0].Image.data.slice(0, 6).map((item, index) => (
            <div key={index} className="w-full h-24 md:h-44 lg:h-52 relative">
              <Image
                src={item.attributes.url}
                layout="fill"
                objectFit="contain"
                alt="Displayed image"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 md:hidden">
          {imageStrapi[0].Image.data.slice(0, 4).map((item, index) => (
            <div key={index} className="w-full h-24 md:h-44 lg:h-52 relative">
              <Image
                src={item.attributes.url}
                layout="fill"
                objectFit="contain"
                alt="Displayed image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
