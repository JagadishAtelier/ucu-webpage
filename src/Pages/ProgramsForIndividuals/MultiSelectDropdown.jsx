import { useState, useRef, useEffect } from "react";
import { Form } from "react-bootstrap";
import { ChevronDown } from "lucide-react";

function MultiSelectDropdown({ label }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const dropdownRef = useRef(null);

  const OPTIONS = [
    "(A) XEL/Enterprise Programs",
    "(B) CXO Academy",
    "(C) Executive PG Certificate Programs",
    "(D) Executive Ph.D",
    "(E) MDPs - Management Development Programs",
    "(F) Academic Accelerator - Faculty Development Programs",
    "(G) Leadership Coach Academy"
  ];

  const toggleSelect = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="multi-select-wrapper" ref={dropdownRef}>
      <Form.Label className="PFID-form-label">{label}*</Form.Label>

      <div
        className="multi-select-box"
        onClick={() => setOpen(!open)}
      >
        {selected.length > 0 ? selected.join(", ") : "Select options"}
        <ChevronDown size={16} className="ms-auto" />
      </div>

      {open && (
        <div className="multi-select-dropdown">
          {OPTIONS.map((option, index) => (
            <label key={index} className="multi-select-item">
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => toggleSelect(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiSelectDropdown;
