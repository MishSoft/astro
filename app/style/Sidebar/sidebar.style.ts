import clsx from "clsx";
export const sidebarWrapper = (isActive: boolean) =>
  clsx("fixed inset-0 z-50 transition-opacity duration-300", {
    "bg-black/40 backdrop-blur-sm opacity-100 pointer-events-auto": isActive,
    "opacity-0 pointer-events-none": !isActive,
  });
export const asydeContainer = (isActive: boolean) =>
  clsx(
    "fixed overflow-y-auto top-0 left-0 h-full w-80 bg-slate-50 border-r border-gray-300 flex flex-col transform transition-transform duration-300",
    {
      "translate-x-0": isActive,
      "-translate-x-full": !isActive,
    },
  );

export const navContainer = "flex-1 px-4 space-y-1";

export const sideItem = "flex flex-col";
export const sideItemBtn = (isActive: boolean) =>
  clsx(
    "flex items-center justify-between w-full p-3 rounded-lg transition-all duration-200 text-slate-600 hover:bg-slate-200",
    {
      "bg-white shadow-sm text-blue-600": isActive,
    },
  );

export const sideItemChild = "flex items-center gap-3";

export const sideItemIcon = (isActive: boolean) =>
  clsx("text-slate-400", {
    "text-blue-600": isActive,
  });

export const sideItemSpan = "font-medium text-sm";

export const accordingWrapper = (isOpen: boolean) =>
  clsx("overflow-hidden transition-all duration-300 max-h-0", {
    "max-h-250 mt-1": isOpen,
  });

export const accordingContainer =
  "ml-4 border-l-2 border-slate-200 pl-2 space-y-1";
export const accordingItem = (isNestedOpen: boolean) =>
  clsx(
    "flex items-center justify-between py-2 px-4 rounded-md text-sm transition-colors text-slate-500 hover:bg-slate-100 hover:text-slate-800",
    {
      "bg-slate-200 text-slate-900": isNestedOpen,
    },
  );

export const accordingIcon = "text-xs opacity-70";
export const accordingLink =
  "block py-2 px-8 text-xs text-slate-400 hover:text-blue-500 hover:bg-blue-50 transition-all rounded-md";
