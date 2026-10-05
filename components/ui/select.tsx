"use client";

import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { createPortal } from "react-dom";

type Option = { value: string; label: string };

/** Select-only combobox. The portal keeps the menu outside clipped disclosures. */
export function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
}) {
  const id = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const search = useRef({ text: "", time: 0 });
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const selected = Math.max(
    0,
    options.findIndex((option) => option.value === value),
  );

  function show() {
    setActive(selected);
    setOpen(true);
  }

  function choose(index: number) {
    onChange(options[index].value);
    setOpen(false);
    trigger.current?.focus({ preventScroll: true });
  }

  useLayoutEffect(() => {
    if (!open) return;
    const position = () => {
      if (!trigger.current || !menu.current) return;
      const rect = trigger.current.getBoundingClientRect();
      const below = innerHeight - rect.bottom - 16;
      const above = rect.top - 16;
      const upward = below < 180 && above > below;
      Object.assign(menu.current.style, {
        left: `${Math.max(8, rect.left)}px`,
        width: `${Math.min(rect.width, innerWidth - 16)}px`,
        maxHeight: `${Math.max(44, Math.min(320, upward ? above : below))}px`,
        top: upward ? "auto" : `${rect.bottom + 8}px`,
        bottom: upward ? `${innerHeight - rect.top + 8}px` : "auto",
      });
    };
    position();
    addEventListener("resize", position);
    addEventListener("scroll", position, true);
    return () => {
      removeEventListener("resize", position);
      removeEventListener("scroll", position, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    menu.current?.children[active]?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!trigger.current?.contains(target) && !menu.current?.contains(target))
        setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [open]);

  function keyboard(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Tab") {
      setOpen(false);
      return;
    }
    if (event.key === "Escape") {
      if (open) {
        event.preventDefault();
        event.stopPropagation();
        setOpen(false);
      }
      return;
    }
    if (
      ["ArrowDown", "ArrowUp", "Home", "End", "Enter", " "].includes(event.key)
    ) {
      event.preventDefault();
      if (!open) {
        show();
        return;
      }
      if (event.key === "Enter" || event.key === " ") {
        choose(active);
        return;
      }
      setActive((index) =>
        event.key === "Home"
          ? 0
          : event.key === "End"
            ? options.length - 1
            : Math.max(
                0,
                Math.min(
                  options.length - 1,
                  index + (event.key === "ArrowDown" ? 1 : -1),
                ),
              ),
      );
      return;
    }
    if (
      event.key.length === 1 &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.altKey
    ) {
      const now = Date.now();
      search.current.text =
        now - search.current.time > 700
          ? event.key
          : search.current.text + event.key;
      search.current.time = now;
      const index = options.findIndex((option) =>
        option.label
          .toLocaleLowerCase()
          .startsWith(search.current.text.toLocaleLowerCase()),
      );
      if (index !== -1) {
        setActive(index);
        setOpen(true);
      }
    }
  }

  return (
    <div className="design-select">
      <button
        ref={trigger}
        type="button"
        className="design-select__trigger"
        role="combobox"
        aria-label={`${label}: ${options[selected]?.label ?? ""}`}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={open ? id : undefined}
        aria-activedescendant={open ? `${id}-${active}` : undefined}
        onKeyDown={keyboard}
        onClick={() => (open ? setOpen(false) : show())}
        onBlur={() => setOpen(false)}
      >
        <span>{options[selected]?.label}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open &&
        createPortal(
          <div
            ref={menu}
            id={id}
            className="design-select__menu"
            role="listbox"
            aria-label={label}
            data-lenis-prevent
          >
            {options.map((option, index) => (
              <div
                key={option.value}
                id={`${id}-${index}`}
                role="option"
                aria-selected={option.value === value}
                className="design-select__option"
                data-active={index === active}
                onPointerMove={() => setActive(index)}
                onPointerDown={(event) => event.preventDefault()}
                onClick={() => choose(index)}
              >
                <span>{option.label}</span>
                {option.value === value && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                )}
              </div>
            ))}
          </div>,
          document.body,
        )}
    </div>
  );
}
