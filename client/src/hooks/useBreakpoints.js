import { useMediaQuery } from 'react-responsive';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwindcss/defaultConfig';

const Tailwind = resolveConfig(tailwindConfig);

export default function useBreakpoint(breakpoint) {
  return useMediaQuery({
    query: `(min-width: ${Tailwind.theme.screens[breakpoint]})`,
  })
}