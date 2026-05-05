"use client";

import { useState, useRef, useEffect, useId } from "react";
import type { PricingLocation } from "@/types/pricing";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  value: string;
  onChange: (id: string, label: string) => void;
  locations: PricingLocation[];
  placeholder: string;
  excludeId?: string;
};

export default function LocationSearch({
  value,
  onChange,
  locations,
  placeholder,
  excludeId,
}: Props) {
  const { isArabic } = useLanguage();
  const displayLabel = (l: PricingLocation) => (isArabic ? l.labelAr : l.label);

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();

  const selectedLocation = locations.find((l) => l.id === value);
  const selectedLabel = selectedLocation ? displayLabel(selectedLocation) : "";

  const q = query.trim().toLowerCase();
  const filtered = locations
    .filter((l) => l.id !== excludeId)
    .filter(
      (l) =>
        !q ||
        l.label.toLowerCase().includes(q) ||
        l.labelAr.toLowerCase().includes(q)
    )
    .sort((a, b) =>
      displayLabel(a).localeCompare(displayLabel(b), isArabic ? "ar" : "en")
    );

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (id: string, label: string) => {
    onChange(id, label);
    setOpen(false);
    setQuery("");
    inputRef.current?.blur();
  };

  const handleClear = (e: React.MouseEvent) => {
    e.preventDefault();
    onChange("", "");
    setQuery("");
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          value={open ? query : selectedLabel}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => { setOpen(true); setQuery(""); }}
          placeholder={placeholder}
          autoComplete="off"
          className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-4 pr-10 text-sm text-slate-900 outline-none transition focus:border-sky-300 focus:ring-3 focus:ring-sky-100 placeholder:text-slate-400 rtl:pl-10 rtl:pr-4"
        />

        {value && !open ? (
          <button
            onMouseDown={handleClear}
            aria-label="Clear"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition hover:bg-slate-200 hover:text-slate-600 rtl:left-3 rtl:right-auto"
          >
            <svg viewBox="0 0 16 16" fill="currentColor" className="h-2.5 w-2.5">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 rtl:left-3.5 rtl:right-auto"
          >
            <circle cx="11" cy="11" r="8" />
            <path strokeLinecap="round" d="m21 21-4.35-4.35" />
          </svg>
        )}
      </div>

      {open && (
        <ul
          id={listId}
          role="listbox"
          className="absolute z-50 mt-1 max-h-64 w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white py-1 shadow-xl"
        >
          {filtered.length === 0 ? (
            <li className="px-4 py-3 text-sm text-slate-400">No results</li>
          ) : (
            filtered.map((l) => (
              <li
                key={l.id}
                role="option"
                aria-selected={l.id === value}
                onMouseDown={() => handleSelect(l.id, displayLabel(l))}
                className={`cursor-pointer px-4 py-2.5 text-sm transition ${
                  l.id === value
                    ? "bg-sky-50 font-semibold text-sky-700"
                    : "text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                }`}
              >
                {displayLabel(l)}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
