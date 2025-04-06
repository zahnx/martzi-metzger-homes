import SocialItem from "./SocialItem";

const socialIcons = [
  {
    id: 1,
    icon: "bi bi-facebook",
    link: "",
  },
  {
    id: 2,
    icon: "bi bi-instagram",
    link: "",
  },
  {
    id: 3,
    icon: "bi bi-linkedin",
    link: "",
  },
  {
    id: 4,
    icon: "bi bi-yelp",
    link: "",
  },
];

function Socials({ size, delay = "1" }) {
  return (
    <div className="social-links" data-animation="textInUp" data-delay={delay}>
      {socialIcons.map((icon) => (
        <SocialItem
          icon={icon.icon}
          link={icon.link}
          color="#fff"
          key={icon.id}
          size={size}
        />
      ))}
    </div>
  );
}

export default Socials;
