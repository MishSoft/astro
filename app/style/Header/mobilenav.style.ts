import clsx from 'clsx';
export const mobilenavWrapper = (isNavActive: boolean) => clsx(
  "-top-100 px-5 duration-300 ease-in -z-1 py-2 md:px-20 md:py-5 absolute md:hidden w-full left-0",
  {
    "top-full": isNavActive,
  },
);
export const mobilenavContainer =
  "rounded-4xl shadow-xs w-full px-5 py-10 bg-white/10 backdrop-blur-xl text-white border border-gray-500";

  export const mobilenavUl = "flex flex-col items-center gap-5";

export const mobilenavLi = (isActive: boolean) => clsx(
  "font-semibold",
  {
    "text-red-500": isActive
  }
)
