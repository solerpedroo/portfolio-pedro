"use client";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Transition,
} from "motion/react";
import {
  useId,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

const panelEase = [0.22, 1, 0.36, 1] as const;
const panelTransition: Transition = {
  duration: 0.48,
  ease: panelEase,
};
const iconTransition: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 26,
};

export function AnimatedDetails({
  id,
  className = "",
  triggerClassName = "",
  panelClassName = "",
  summary,
  children,
  defaultOpen = false,
  icon = true,
}: {
  id?: string;
  className?: string;
  triggerClassName?: string;
  panelClassName?: string;
  summary: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  icon?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const reduced = useReducedMotion();
  const panelId = useId();

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen((value) => !value);
    }
  }

  return (
    <div
      id={id}
      className={`animated-details${open ? " is-open" : ""}${className ? ` ${className}` : ""}`}
    >
      <button
        type="button"
        className={`animated-details__trigger${triggerClassName ? ` ${triggerClassName}` : ""}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={onKeyDown}
      >
        <span className="animated-details__summary">{summary}</span>
        {icon && (
          <motion.span
            className="expand-sign"
            aria-hidden="true"
            animate={{ rotate: open ? 45 : 0, scale: open ? 1.05 : 1 }}
            transition={reduced ? { duration: 0 } : iconTransition}
          >
            +
          </motion.span>
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            className={`animated-details__panel${panelClassName ? ` ${panelClassName}` : ""}`}
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={
              reduced
                ? { height: "auto", opacity: 1 }
                : { height: "auto", opacity: 1 }
            }
            exit={
              reduced
                ? { height: 0, opacity: 0 }
                : { height: 0, opacity: 0 }
            }
            transition={reduced ? { duration: 0 } : panelTransition}
          >
            <motion.div
              className="animated-details__panel-inner"
              initial={reduced ? false : { y: -10 }}
              animate={{ y: 0 }}
              exit={reduced ? undefined : { y: -6 }}
              transition={
                reduced
                  ? { duration: 0 }
                  : { duration: 0.42, ease: panelEase, delay: 0.04 }
              }
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
