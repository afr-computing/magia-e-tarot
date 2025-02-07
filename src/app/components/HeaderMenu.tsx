'use client'
import { useIsScroll } from '@/app/hooks/use-is-scroll';
import { Dialog, DialogPanel, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react';

const navigation = [
  { name: 'Magia e Tarot', href: '#' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Trabalhos', href: '#trabalhos' },
  /*   { name: 'Testemunhos', href: '#testemunhos' }, */
  { name: 'Loja Luz da Alma', href: '#', onClick: () => window.open('https://www.instagram.com/loja_luzdaalma/', '_blank') },
]

export const HeaderMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isScroll = useIsScroll();

  return (
    <>
      <div className={`hidden lg:fixed lg:flex lg:items-center lg:gap-x-12 top-0 z-10 p-6 w-full lg:justify-center ${isScroll ? 'bg-gray-900' : ''}`}>
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="text-base font-semibold text-white" onClick={item.onClick}>
            {item.name}
          </a>
        ))}
      </div>
      <div className={`fixed lg:hidden z-10 p-6 flex w-full justify-between items-center ${isScroll ? 'bg-gray-900' : ''}`}>
        <a href='#' className='text-xl font-bold'>Magia e Tarot</a>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="size-8" />
        </button>
      </div>
      <Transition appear show={mobileMenuOpen} as={Fragment}>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden transition duration-300 ease-out data-[closed]:opacity-0" transition>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 lg:max-w-sm lg:ring-1 lg:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5">
                <span className="sr-only">Magia e Tarot</span>
                <img
                  alt=""
                  src="lua.png"
                  className="h-12 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-8" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      onClick={() => {
                        setMobileMenuOpen(false);
                        item.onClick?.();
                      }}
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </Transition>
    </>
  )
}
