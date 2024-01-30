import ModalWindow from "./components/ModalWindow";
import { useState } from "react";

function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-80 w-800px mx-auto flex items-center justify-center">
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="p-5 bg-colorAccent rounded-inputRounded font-bold"
        >
          Open modal
        </button>
      </div>
      <ModalWindow open={open} setOpen={setOpen}/>
    </>
  );
}

export default Modal;
// className="fixed top-0 bottom-0 left-0 right-0 bg-colorBgOverly"
