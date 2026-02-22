import clsx from "clsx";

export const sidebarWrapper = (isActive: boolean) =>
  clsx("fixed inset-0 z-[60] transition-opacity duration-500", {
    "bg-black/60 backdrop-blur-xl opacity-100 pointer-events-auto": isActive,
    "opacity-0 pointer-events-none": !isActive,
  });

export const asydeContainer = (isActive: boolean) =>
  clsx(
    "fixed overflow-y-auto top-0 left-0 h-full w-80 bg-[#020617]/80 backdrop-blur-2xl border-r border-white/10 flex flex-col transform transition-all duration-500 ease-in-out z-[70]",
    {
      "translate-x-0 shadow-[20px_0_50px_rgba(0,0,0,0.5)]": isActive,
      "-translate-x-full": !isActive,
    },
  );

export const navContainer = "flex-1 px-4 py-6 space-y-2";

export const sideItem = "flex flex-col mb-1";

export const sideItemBtn = (isActive: boolean) =>
  clsx(
    "flex items-center justify-between w-full p-3.5 rounded-xl transition-all duration-300 group",
    {
      "bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]":
        isActive,
      "text-slate-400 hover:bg-white/5 hover:text-slate-200": !isActive,
    },
  );

export const sideItemChild = "flex items-center gap-3";

export const sideItemIcon = (isActive: boolean) =>
  clsx("text-lg transition-transform duration-300 group-hover:scale-110", {
    "text-blue-400": isActive,
    "text-slate-500": !isActive,
  });

export const sideItemSpan = "font-semibold text-[15px] tracking-wide";

export const accordingWrapper = (isOpen: boolean) =>
  clsx("overflow-hidden transition-all duration-500 ease-in-out", {
    "max-h-[500px] opacity-100 mt-2 mb-4": isOpen,
    "max-h-0 opacity-0": !isOpen,
  });

export const accordingContainer =
  "ml-6 border-l border-slate-800 pl-4 space-y-1";

export const accordingItem = (isNestedOpen: boolean) =>
  clsx(
    "flex items-center justify-between py-2.5 px-4 rounded-lg text-[13px] transition-all duration-200",
    {
      "bg-white/5 text-blue-300 font-medium": isNestedOpen,
      "text-slate-500 hover:text-slate-200 hover:bg-white/5": !isNestedOpen,
    },
  );

export const accordingIcon = "text-[10px] opacity-50 group-hover:opacity-100";

export const accordingLink =
  "block py-2 px-4 text-[12px] text-slate-500 hover:text-blue-400 border-l border-transparent hover:border-blue-500/50 transition-all ml-2";
