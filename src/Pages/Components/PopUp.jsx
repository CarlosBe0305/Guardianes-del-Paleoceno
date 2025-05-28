import React from "react";
import "./styles/PopUp.css";

function PopUp({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

export default PopUp;