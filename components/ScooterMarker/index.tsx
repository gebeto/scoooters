import ewingsIcon from "./icon-ewings.svg";
import kiwiIcon from "./icon-kiwi.svg";
import boltIcon from "./icon-bolt.svg";
import { ScooterService } from "../../entitites/Scooter";

export const iconMapping = {
  [ScooterService.bolt]: boltIcon,
  [ScooterService.ewings]: ewingsIcon,
  [ScooterService.kiwi]: kiwiIcon,
};
