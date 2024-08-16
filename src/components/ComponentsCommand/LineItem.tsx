import * as React from "react";
import { ReactElement } from "react";

interface LineItemProps {
  icon: ReactElement;
  iconColor: string;
  iconBgColor: string;
  text: string;
  shortcuts: string[];
}

export function LineItem({
  icon,
  iconColor,
  iconBgColor,
  text,
  shortcuts,
}: LineItemProps) {
  return (
    <div className="flex items-center justify-between py-1 pl-1 pr-2 rounded-lg hover:bg-neutral-100 group transition-colors ease-in-out duration-150 cursor-pointer active:bg-neutral-200/70">
      <div className="flex items-center">
        <div
          className="flex items-center justify-center w-6 h-6 rounded-md"
          style={{ backgroundColor: iconBgColor }}
        >
          <div style={{ color: iconColor }}>{icon}</div>
        </div>
        <span className="ml-2 text-neutral-500 text-sm font-semibold">
          {text}
        </span>
      </div>
      <div className="flex space-x-1">
        {shortcuts.map((shortcut, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-5 h-5 rounded-sm bg-gray-100 text-neutral-500 text-xs font-medium group-hover:bg-white transition-colors ease-in-out duration-150"
          >
            {shortcut}
          </div>
        ))}
      </div>
    </div>
  );
}
