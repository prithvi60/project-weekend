import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const ModalForMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="absolute block p-2 text-lg font-semibold text-black capitalize transition bg-white border border-white rounded-lg md:hidden pointer bottom-5 right-10 md:mt-2 animate-pulse"
      >
        Subscribe
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[1000]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white/90" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-black shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-semibold text-white capitalize md:text-lg xl:text-xl"
                  ></Dialog.Title>
                  <form className="flex flex-col gap-5">
                    <input
                      type="email"
                      className="rounded-sm border-none px-3 py-2 text-base text-black placeholder:px-1.5 placeholder:capitalize placeholder:text-gray-500 focus-within:border-none focus-within:outline-none focus-within:ring-0 md:w-[250px] md:text-lg lg:w-[275px] "
                      placeholder="Enter your Email here"
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 mt-2 text-sm font-semibold text-black capitalize transition bg-white border border-white rounded-lg pointer hover:bg-white/10 hover:text-white md:mt-2"
                    >
                      enroll me
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalForMobile;
