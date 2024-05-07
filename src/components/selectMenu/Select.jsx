import "./Select.css";
import { useEffect, useRef, useState } from "react";
import { CrossIcon, LeftArrowIcon } from "../../assets/Icons";

export function Select({
  id,
  title,
  multiple,
  value,
  onChange,
  options,
  placeholder,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef(null);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOption(option) {
    if (multiple) {
      // Check if the option already exists in the value array based on its value property
      const optionExists = value.some((v) => v.value === option.value);
      if (optionExists) {
        // Remove the option if it already exists
        onChange(value.filter((o) => o.value !== option.value));
      } else {
        // Add the option if it doesn't exist
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option) {
    return multiple ? false : option?.value === value?.value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      if (e.target != containerRef.current) return;
      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen((prev) => !prev);
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case "ArrowUp":
        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case "Escape":
          setIsOpen(false);
          break;
      }
    };
    containerRef.current?.addEventListener("keydown", handler);

    return () => {
      containerRef.current?.removeEventListener("keydown", handler);
    };
  }, [isOpen, highlightedIndex, options]);

  return (
    <div
      id={id}
      tabIndex={0}
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      className={`select-container`}
    >
      <span className={"select-value"}>
        {multiple
          ? value?.map((v, i) => (
              <span key={v.value + i} className={"select-option-badge"}>
                {v.label}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    selectOption(v);
                  }}
                  className={"select-remove-btn"}
                >
                  <CrossIcon size={10} />
                </button>
              </span>
            ))
          : value?.label}
        {multiple && value.length === 0 ? (
          <span className={"select-placeholder"}>{placeholder}</span>
        ) : (
          !value && <span className={"select-placeholder"}>{placeholder}</span>
        )}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
        className={"select-clear-btn"}
      >
        <CrossIcon size={14} />
      </button>
      <div className={"select-divider"}></div>
      <div className={"select-caret"}>
        <LeftArrowIcon size={18} />
      </div>
      <ul className={`${"select-options"} ${isOpen ? "select-show" : ""}`}>
        {options?.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.value + index}
            className={`select-option ${
              isOptionSelected(option) ? "select-selected" : ""
            } ${index === highlightedIndex ? "select-highlighted" : ""}`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
