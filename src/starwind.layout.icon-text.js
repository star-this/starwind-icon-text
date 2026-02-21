// sw-icon-text.js
import {
  createStarwindElement,
  defineElement,
} from "./starwind.elements.util.js";

const SwIconTextLayout = createStarwindElement({
  gap: { var: "--sw-icon-text-gap", type: "space" },
  size: { var: "--sw-icon-size", type: "raw" },
  align: { var: "--sw-icon-text-align", type: "raw" },
});

export function defineSwIconText() {
  defineElement("sw-icon-text", SwIconTextLayout);
}
