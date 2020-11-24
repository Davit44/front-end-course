let format = prompt(
  "Please choose the photo format where 1 -> Small, 2 -> Middle, 3 -> Big"
);
let formatPrice;
const smallPrice = 10;
const middlePrice = 20;
const bigPrice = 30;

switch (format) {
  case "1":
    formatPrice = smallPrice;
    break;
  case "2":
    formatPrice = middlePrice;
    break;
  case "big":
    formatPrice = bigPrice;
    break;
    default:
        formatPrice = "No format found";
}
document.write(formatPrice);
