export function getTitleLeftEnd(width) {
  if (width <= 600) {
    return 22; // móvil
  } else if (width <= 1400) {
    return -10; // tablet
  } else {
    return 4; // desktop grande
  }
}