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
        className="pointer absolute bottom-12 right-8 block rounded-lg  bg-white/90 p-2 px-4 text-lg  hover:bg-white capitalize text-black transition md:mt-2 md:hidden font-bold"
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
            <div className="fixed inset-0 bg-black/70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-semibold capitalize text-white md:text-lg xl:text-xl text-center"
                  >
                    <h1 className="pt-8 text-base font-bold uppercase tracking-widest">
                      Vaara Irudhi
                    </h1>
                    <h1 className="mb-4 mt-2 text-sm font-semibold uppercase tracking-widest">
                      Community run latest events page happening in Chennai.
                    </h1>
                    <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
                      We cover all the latest events in Chennai
                    </p>
                    {/* <a
              className="z-10 px-3 py-2 mt-2 text-sm font-semibold text-black transition bg-white border border-white rounded-lg pointer hover:bg-white/10 hover:text-white md:mt-2"
              href="https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-cloudinary&project-name=nextjs-image-gallery&repository-name=with-cloudinary&env=NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET,CLOUDINARY_FOLDER&envDescription=API%20Keys%20from%20Cloudinary%20needed%20to%20run%20this%20application"
              target="_blank"
              rel="noreferrer"
            >
              Subscribe for updates
            </a> */}
                    <h3 className="text-base font-semibold capitalize text-white md:text-lg xl:text-xl mb-8">
                      join our newsletter
                    </h3>
                  </Dialog.Title>
                  <form className="flex flex-col gap-5">
                    <input
                      type="email"
                      className="rounded-sm border-none px-3 py-2 text-base text-black placeholder:px-1.5 placeholder:capitalize placeholder:text-gray-500 focus-within:border-none focus-within:outline-none focus-within:ring-0 md:w-[250px] md:text-lg lg:w-[275px] placeholder:text-center"
                      placeholder="Drop your Email Id"
                    />
                    <button
                      type="submit"
                      className="pointer mt-2 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold capitalize text-black transition hover:bg-white/10 hover:text-white md:mt-2"
                    >
                      enroll now
                    </button>
                  </form>
                  <div className="mt-8 px-2 text-center text-white/80">
                    Powered by{" "}
                    <div className="text-sm">
                      <a
                        href="https://webibee.com/"
                        target="_blank"
                        className="pr-2 font-bold hover:text-white"
                        rel="noreferrer"
                      >
                        Webibee
                      </a>
                      |
                      <a
                        href="https://webibee.com/"
                        target="_blank"
                        className="pl-2 font-bold hover:text-white"
                        rel="noreferrer"
                      >
                        SolveforCulture
                      </a>
                    </div>
                  </div>
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
