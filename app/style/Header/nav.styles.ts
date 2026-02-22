import clsx from "clsx";

export const navWrapper = "flex items-center text-gray-600";

export const navUl = "md:flex hidden items-center gap-10";

export const navLi = (isActive: boolean) =>
  clsx(
    "font-semibold relative",
    "after:absolute after:content-['']",
    "after:bottom-0 after:left-1/2 after:-translate-x-1/2",
    "after:h-0.5 after:rounded-full after:bg-gray-600",
    "after:duration-200 after:w-0",
    "hover:after:w-full",
    {
      "after:w-full": isActive,
    },
  );
