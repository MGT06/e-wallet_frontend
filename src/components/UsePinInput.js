import { useRef } from 'react';

export function usePinInput({ length = 6, setValue, getValues, name = 'pin' }) {
  // Array ref untuk pegang elemen input DOM
  const inputRefs = useRef([]);

  // Handler saat mengetik angka
  const handleChange = (e, index) => {
    const value = e.target.value;
    const lastChar = value.slice(-1);

    // Set nilai di React Hook Form
    setValue(`${name}.${index}`, lastChar);

    // Pindah fokus ke input selanjutnya jika angka diisi
    if (lastChar && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handler saat menekan tombol Backspace
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !getValues(`${name}.${index}`) && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handler saat fitur Paste digunakan
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, length);
    
    // Pastikan cuma angka
    if (!/^\d+$/.test(pastedData)) return;

    pastedData.split('').forEach((char, index) => {
      setValue(`${name}.${index}`, char);
    });

    // Pindah fokus ke kotak setelah angka paste terakhir
    const nextIndex = Math.min(pastedData.length, length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  return {
    inputRefs,
    handleChange,
    handleKeyDown,
    handlePaste,
  };
}