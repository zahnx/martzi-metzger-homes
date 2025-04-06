function SocialItem({ size, icon, link, color }) {
  return (
    <a href={link}>
      <i
        className={icon}
        style={{
          color: color,
          fontSize: size,
        }}
      ></i>
    </a>
  );
}

export default SocialItem;
