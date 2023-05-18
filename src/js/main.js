import { addToggle, colorHeader, loadHeader } from "./utils";

(async () => {
  await loadHeader();
  addToggle();
  colorHeader();
})();