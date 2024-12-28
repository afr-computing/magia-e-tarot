'use client'

import { MESSAGE, PHONE_NUMBER } from "@/app/constants";
import { Button, Carousel, Typography } from "@material-tailwind/react";
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from "react";

const navigation = [
  { name: 'Magia e Tarot', href: '#' },
  {name: 'Sobre', href: '#'},
  { name: 'Trabalhos', href: '#' },
  { name: 'Testemunhos', href: '#testemunhos' },
  { name: 'Loja luz da alma', href: '#', onClick:() => window.open('https://www.instagram.com/loja_luzdaalma/', '_blank') },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const onClickSchedule = () => {
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${MESSAGE}`, '_blank');
  };

  return (
    <div>
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
              <a href="#" className="-m-1.5 p-1.5">
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
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 lg:py-32 h-[100vh] flex lg:items-center justify-center">
        <img src="hero.jpg" alt="hero" className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-30" />
        <div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white lg:text-7xl">Magia e Tarot</h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-300 lg:text-xl/8">Clareza para a sua alma, poder para a sua vida</p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white lg:grid-cols-2 md:flex lg:gap-x-10">
              <a href="#">Sobre <span aria-hidden="true">&rarr;</span></a>
              <a href="#">Trabalhos <span aria-hidden="true">&rarr;</span></a>
              <a href="#testemunhos">Testemunhos <span aria-hidden="true">&rarr;</span></a>
              <a href="instagram://user?username=loja_luzdaalma" onClick={() => window.open('https://www.instagram.com/loja_luzdaalma/', '_blank')}>Loja luz da alma <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button color="indigo" onClick={onClickSchedule}>Agendar consulta</Button>
          </div>
        </div>
        </div>
      </div>
      <div id="testemunhos" className="h-[100vh]">
      <Carousel >
      <div className="relative h-full w-full">
        <img
          src="witness1.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus hendrerit diam, sed rhoncus ipsum dictum at. Duis id aliquam nisl. Sed placerat, nisl ac fringilla finibus, dui ante iaculis magna, accumsan porta nibh nibh vel nunc. Praesent euismod neque varius arcu ultricies congue. Suspendisse posuere erat quis ornare lacinia. Proin condimentum turpis sed enim mattis ultricies. Sed vel scelerisque ligula.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="witness2.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus hendrerit diam, sed rhoncus ipsum dictum at. Duis id aliquam nisl. Sed placerat, nisl ac fringilla finibus, dui ante iaculis magna, accumsan porta nibh nibh vel nunc. Praesent euismod neque varius arcu ultricies congue. Suspendisse posuere erat quis ornare lacinia. Proin condimentum turpis sed enim mattis ultricies. Sed vel scelerisque ligula.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="witness3.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus hendrerit diam, sed rhoncus ipsum dictum at. Duis id aliquam nisl. Sed placerat, nisl ac fringilla finibus, dui ante iaculis magna, accumsan porta nibh nibh vel nunc. Praesent euismod neque varius arcu ultricies congue. Suspendisse posuere erat quis ornare lacinia. Proin condimentum turpis sed enim mattis ultricies. Sed vel scelerisque ligula.
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
      </div>
    </div>
  );
}
