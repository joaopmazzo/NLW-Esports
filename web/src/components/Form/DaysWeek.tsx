import { ButtonHTMLAttributes } from "react";

interface DaysWeekProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  dayWeek: string;
}

export function DaysWeek(props: DaysWeekProps) {
  return (
    <button
      {...props}
      className="w-10 h-10 rounded bg-zinc-900 hover:bg-violet-500"
    >
      {props.dayWeek}
    </button>
  );
}
