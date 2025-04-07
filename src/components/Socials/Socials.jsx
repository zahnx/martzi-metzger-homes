import SocialItem from "./SocialItem";

const socialIcons = [
  {
    id: 1,
    icon: "bi bi-facebook",
    link: "https://www.facebook.com/MarciHomes",
    ariaLabel: "Visit our Facebook page",
  },
  {
    id: 2,
    icon: "bi bi-instagram",
    link: "https://www.instagram.com/marciandlauren_nvrealtors",
    ariaLabel: "Visit our Instagram page",
  },
  {
    id: 3,
    icon: "bi bi-linkedin",
    link: "https://www.linkedin.com/in/marci-metzger-30642496",
    ariaLabel: "Visit our Linkedin page",
  },
  {
    id: 4,
    icon: "bi bi-yelp",
    link: "https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump",
    ariaLabel: "Visit our Yelp page",
  },
];

function Socials({ size, delay = "1", color = "#fff" }) {
  return (
    <div className="social-links" data-animation="textInUp" data-delay={delay}>
      {socialIcons.map((icon) => (
        <SocialItem
          icon={icon.icon}
          link={icon.link}
          color={color}
          key={icon.id}
          size={size}
          ariaLabel={icon.ariaLabel}
        />
      ))}
    </div>
  );
}

export default Socials;
