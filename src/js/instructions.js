import { loadHeader, addToggle, colorHeader, setClick } from "./utils";

(async () => {
    await loadHeader();
    addToggle();
    colorHeader();
  })();

  setClick();