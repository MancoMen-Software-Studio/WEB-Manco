import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenisInstance(lenis: Lenis) {
  lenisInstance = lenis;
}

export function getLenisInstance() {
  return lenisInstance;
}
