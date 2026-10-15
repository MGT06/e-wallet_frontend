import { useRef } from "react";

export function usePinInput({ length = 6, setValue, getValues, name = "pin" }) {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    const lastChar = value.slice(-1);

    setValue(`${name}.${index}`, lastChar);

    if (lastChar && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !getValues(`${name}.${index}`) && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return {
    inputRefs,
    handleChange,
    handleKeyDown,
  };
}
