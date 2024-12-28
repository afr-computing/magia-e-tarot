'use client'
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

const navigation = [
  { name: 'Magia e Tarot', href: '#' },
  {name: 'Sobre', href: '#'},
  { name: 'Trabalhos', href: '#' },
  { name: 'Testemunhos', href: '#testemunhos' },
  { name: 'Loja Luz da Alma', href: '#', onClick:() => window.open('https://www.instagram.com/loja_luzdaalma/', '_blank') },
]

export const HeaderMenu = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <>
      <div className="hidden md:fixed md:flex md:items-center md:gap-x-12 top-0 z-10 p-4" style={{left: '50%', transform: 'translate(-50%)'}}>
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="text-base font-semibold text-white" onClick={item.onClick}>
            {item.name}
          </a>
        ))}
      </div>
      <div className="fixed md:hidden z-10 p-6 flex w-full justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-8" />
            </button>
      </div>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-indigo-900 px-6 py-6 lg:max-w-sm lg:ring-1 lg:ring-gray-900/10">
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
                            className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-white"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </Dialog>
    </>
  )
}
