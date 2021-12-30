import React, { useState } from "react";
import "./styles.css";

export function Dropdown({ title, gray, setValue, badge, listings }) {
  const [visible, setVisible] = useState(false);

  const handleClick = (value) => {
    setValue(value);
    setVisible(false);
  };
  return (
    <div class="dropdown">
      <button
        class={`btn btn-secondary dropdown-toggle ${gray ? "grayColor" : ""}`}
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="dropdown-title">
          {badge && <span className="dropdown-badge">{badge}</span>} {title}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path
            d="M8.44531 0.433594L9.5 1.48828L5 5.98828L0.5 1.48828L1.55469 0.433594L5 3.87891L8.44531 0.433594Z"
            fill="#0A70B0"
          />
        </svg>
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {listings.map(
          (item, index) =>
            index > 0 && (
              <a
                class="dropdown-item"
                onClick={() => handleClick(item, index)}
                key={item}
              >
                {item}
              </a>
            )
        )}
      </div>
    </div>
  );
}
