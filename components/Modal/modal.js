import { Dialog } from "@headlessui/react";

export default function Modal({ children, isOpen, setIsOpen }) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 overflow-y-auto ">
        <div className="flex min-h-full items-center justify-center ">
          {/* The actual dialog panel  */}
          <Dialog.Panel className=" rounded-[20px] mx-auto  md:w-auto  bg-white">
            {/* ... */}
            {children}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

{
  /* Full-screen container to center the panel */
}
