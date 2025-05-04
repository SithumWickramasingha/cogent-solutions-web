import { FocusCards } from "../focus-cards";

export function Speakers() {
  const cards = [
    {
      title: "Mr. Marwan Abouzeid",
      des:"Head of IT Governance and Charge Management",
      src: "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/3s.jpg",
    },
    {
      title: "Mr. Karim El Mourabet",
      des:"Head of IT Governance and Charge Management",
      src: "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/4s.jpg",
    }, 
    {
      title: "Mr. Narendra Mistry",
      des:"Head of IT Governance and Charge Management",
      src: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/6s.jpg',
    },
    {
      title: "Ms.Siobhan Byron",
      des:"Head of IT Governance and Charge Management",
      src: "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/5s.jpg",
    },
    {
      title: "Mr. Marwan Abouzeid",
      des:"Head of IT Governance and Charge Management",
      src: "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/8s.png",
    },
    {
      title: "Mr. Karim El Mourabet",
      des:"Head of IT Governance and Charge Management",
      src: "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/4s.jpg",
    }, 
    {
      title: "Mr. Narendra Mistry",
      src: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/6s.jpg',
    },
    {
      title: "Valley of life",
      src: "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/7s.png",
    },
    {
      title: "Valley of life",
      src: "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/7s.png",
    },
    {
      title: "Valley of life",
      src: "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/7s.png",
    }
  ];

  return(
    <section className="px-4 sm:px-6 lg:px-20 py-10">
    <div className="text-white text-center mb-10">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our Speakers</h1>
    </div>
    <FocusCards cards={cards} />
  </section>
  );
}

export default Speakers;
