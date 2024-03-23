import { OniKoto } from "./libs/koto";
import { OniShamisen } from "./libs/shamisen";
import { OniTaiko } from "./libs/taiko";

export const banks: Bank[] = [
  {
    label: "Taiko",
    sounds: [OniTaiko],
  },
  {
    label: "Shamisen",
    sounds: [OniShamisen],
  },
  {
    label: "Koto",
    sounds: [OniKoto],
  },
];
