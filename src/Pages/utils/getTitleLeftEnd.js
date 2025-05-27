export function getTitleLeftEnd(width) {
  if (width <= 600) {
    return 22; // móvil
  } else if (width <= 1000) {
    return 13; // tablet
  } else if (width <= 1500) {
    return 6; // laptop
  } else {
    return 4; // desktop grande
  }
}