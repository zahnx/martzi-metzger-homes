function SellBtn({ buttonText, onClick, isSelected }) {
  return (
    <button
      className={`getsold-btn ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      {buttonText}
      <span>
        {isSelected ? (
          <i class="bi bi-arrow-right"></i>
        ) : (
          <i class="bi bi-arrow-down-right"></i>
        )}
      </span>
    </button>
  );
}

export default SellBtn;
