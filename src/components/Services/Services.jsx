import ServiceItem from "./ServiceItem";

const services = [
  {
    id: 1,
    title: "Real Estate Done Right",
    icon: `bi bi-house-door`,
    description:
      "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
  },
  {
    id: 2,
    title: "Commercial & Residential",
    icon: `bi bi-building`,
    description:
      "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
  },
  {
    id: 3,
    title: "Rely on Expertise",
    icon: `bi bi-lightbulb`,
    description:
      "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container-fluid pw-1800 text-center">
        <h2 data-animation="fadeSlowInUp" data-delay="3">
          Tailored Services for Your Real Estate Needs
        </h2>
        <div className="row" data-animation="fadeSlowInUp" data-delay="3">
          {services.map((service) => (
            <ServiceItem
              icon={service.icon}
              title={service.title}
              description={service.description}
              key={service.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
