function SocialItem({ size, icon, link, color, ariaLabel }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
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
