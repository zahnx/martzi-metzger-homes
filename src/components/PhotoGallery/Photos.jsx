function Photos({ img, selectedImg, onClick, ariaLabel }) {
  return (
    <button
      className={`photos-btn ${selectedImg ? "selected" : ""}`}
      style={{
        backgroundImage: `url(./${img}.webp)`,
      }}
      aria-label={ariaLabel}
      onClick={onClick}
    ></button>
  );
}

export default Photos;
