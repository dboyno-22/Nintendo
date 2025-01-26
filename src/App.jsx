import './App.css'
import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton,} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Carousel, Typography, IconButton } from "@material-tailwind/react";
import Glide from '@glidejs/glide'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from 'swiper/react';








const sliderConfiguration = {
  type: 'carousel',
  perView: 4,
  perTouch: 4,
  gap: 15,
  swipeThreshold: false,
  dragThreshold: false,
  bound: true,
};

const LINKS = [
  {
    title: "About Nintendo",
    items: ["Careers", "Corporate Social Resposibility"],
  },
  {
    title: "Shop",
    items: ["Games", "Hardware", "Merchandise", "Sales & deals","Exclusives", "Online service", "Exclusives", "Online service", "Nintendo NY store"],
  },
  {
    title: "My Nintendo Store orders",
    items: ["Order details", "Shipping info", "Returns & exchanges", "FAQ"],
  },
  {
    title: "Support",
    items: ["Nintendo Switch", "Nintendo Account", "Other Systems", "Repairs", "Nintendo product recycling"],
  },
  {
    title: "Parents",
    items: ["Info for parents", "Parental controls", "Events", "Help center"],
  },
  {
    title: "Privacy",
    items: ["Privacy policy", "Cookies and interest-based ads"],
  },
  {
    title: "Community",
    items: ["Community guidelines", "Online safety principles"],
  }
];
 
const currentYear = new Date().getFullYear();




const navigation = [
  { name: 'Support', icon: <FontAwesomeIcon icon="fa-solid fa-message" />, href: '#', current: true },
  { name: 'Wish List',  icon: <FontAwesomeIcon icon="fa-solid fa-heart" />, href: '#', current: true },
  { name: 'Cart',  icon: <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />, href: '#', current: true },
  { name: 'Log in / Sign up',  icon: <FontAwesomeIcon icon="fa-solid fa-user" />, href: '#', current: true }

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




function App() {
  var ref = React.useRef();

  React.useEffect(() => {
    const slider = new Glide(ref.current, sliderConfiguration);
    slider.mount();
  }, [ref]); 

  


  return (
    <>
      <Disclosure as="nav" className="nav" >
        <div className="nav1">
          <div className="flex h-13  justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center  sm:justify-start">
              <div className="logoImg flex">
                <div className='logoArea'>
                 <svg viewBox="0 0 97 24" xmlns="http://www.w3.org/2000/svg" width="69" role="presentation" alt="" data-testid="NintendoRacetrackLogoIcon" size="69" color="white"><path d="M17.945 14.157l-4.85-7.838H9.609V17.59h3.486V9.752l4.85 7.838h3.456V6.32h-3.486l.03 7.837zm27.554-4.04V8.993H43.68v-1.52h-3.395v1.52h-1.849v1.124h1.85v7.473h3.394v-7.473h1.82zM23.341 17.56h3.364v-7.474h-3.364v7.474zm0-8.932h3.395V6.319H23.34v2.309zm59.17.942c-2.728 0-4.941 1.883-4.941 4.192s2.213 4.193 4.94 4.193c2.729 0 4.942-1.884 4.942-4.193 0-2.309-2.213-4.192-4.941-4.192zm1.364 5.772c0 1.185-.698 1.67-1.364 1.67-.667 0-1.395-.485-1.395-1.67v-3.16c0-1.184.697-1.67 1.395-1.67.666 0 1.364.486 1.364 1.67v3.16zm-10.73-4.891c-.547-.304-1.123-.608-1.91-.669-2.426-.212-4.305 1.945-4.305 3.92 0 2.612 2 3.554 2.304 3.706 1.152.516 2.607.547 3.88-.274v.426h3.334V6.32h-3.334c.03 0 .03 2.4.03 4.13zm.03 3.342v1.336c0 1.155-.789 1.458-1.334 1.458-.546 0-1.334-.303-1.334-1.458v-2.673c0-1.155.788-1.458 1.334-1.458.515 0 1.333.303 1.333 1.458v1.337zM34.616 9.752c-1.122.03-2.031.516-2.698 1.124v-.79h-3.365v7.474h3.365v-4.922c0-.638.697-1.367 1.607-1.367.909 0 1.546.73 1.546 1.367v4.922h3.364v-4.071c0-2.947-2.546-3.798-3.82-3.737zm27.433 0a4.075 4.075 0 0 0-2.698 1.124v-.79h-3.365v7.474h3.365v-4.922c0-.638.697-1.367 1.606-1.367.91 0 1.546.73 1.546 1.367v4.922h3.365v-4.071c0-2.947-2.546-3.798-3.82-3.737zm-7.063 4.101c0-2.309-2.243-4.253-4.971-4.253-2.759 0-4.972 1.884-4.972 4.193 0 2.308 2.213 4.192 4.972 4.192 2.273 0 4.213-1.306 4.789-3.068H51.44v.455c0 1.367-.91 1.671-1.394 1.671-.515 0-1.425-.304-1.425-1.67v-1.55l6.366.03zm-6.123-2.643a1.391 1.391 0 0 1 1.182-.668c.455 0 .91.213 1.182.668.212.365.212.82.212 1.458H48.62c0-.637.03-1.063.243-1.458zm39.921-3.493c0-.365-.272-.547-.818-.547h-.758v1.914h.455v-.79h.242l.364.79h.515l-.424-.851c.273-.091.424-.273.424-.516zm-.879.273h-.242v-.547h.212c.273 0 .424.091.424.274 0 .212-.12.273-.394.273zm.03-1.58c-.94 0-1.727.79-1.727 1.732s.788 1.732 1.728 1.732 1.727-.79 1.727-1.732a1.73 1.73 0 0 0-1.727-1.732zm0 3.13a1.413 1.413 0 0 1-1.394-1.398c0-.76.637-1.398 1.395-1.398.757 0 1.394.638 1.394 1.398 0 .76-.637 1.397-1.394 1.397zM84.148 0H12.64C5.062-.03 0 5.438 0 11.97c0 6.53 5.062 11.939 12.67 11.939h71.508c7.608 0 12.67-5.408 12.67-11.94C96.818 5.44 91.726 0 84.148 0zm-.03 20.993H12.671c-6.033.03-9.7-4.041-9.7-9.023 0-4.983 3.698-8.993 9.7-9.023h71.446c6.002 0 9.7 4.04 9.7 9.023 0 4.982-3.668 9.023-9.7 9.023z" fill="currentColor"></path></svg>
                </div>
              </div>
              <div className="search w-full max-w-sm min-w-[800px]">
                <div className="searchbar relative mt-4">
                  <div className="absolute top-1 left-1 flex items-center">
                    <button id="dropdownButton" className="rounded border border-transparent py-1 px-1.9 text-center flex items- text-sm transition-all text-slate-800">
                      <span id="dropdownSpan" className="text-ellipsis overflow-hidden">All categories</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    <div className="h-6 border-l border-slate-200 ml-1"></div>
                    <div id="dropdownMenu" className="min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 hidden w-full bg-white border border-slate-200 rounded-md shadow-lg z-10">
                      <ul id="dropdownOptions">
                        <li className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="Themes">Themes</li>
                        <li className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="Plugins">Plugins</li>
                        <li className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="Snippets">Snippets</li>
                      </ul>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Search games, hardware, news etc" />
              
                  <button
                    className="searchButton absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mr-1.5">
                      <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                    </svg>
              
                    Search
                  </button> 
                </div>   
              </div>
              <div className="hidden sm:ml-6 sm:block" id='icon-nav'>
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      icon={item.icon}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'top-button' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-bold',
                      )}
                    >
                       <span className='navoneIcons'>{item.icon}</span> 
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 ">
            {navigation.map((item) => (
              <DisclosureButton 
                key={item.name}
                icon={item.icon}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'top-button' : 'text-gray-300',
                  'block rounded-md px-3 py-2 font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>



      <div className='SecondNav'>
        <Menu as="div" className="UnderNav justify-center">
          <div>
            <MenuButton className="menu-button flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="16" role="presentation" alt="" data-testid="MyNintendoTileIcon" size="16" color="currentColor"><path d="M26.667 0H5.333A5.333 5.333 0 0 0 0 5.333v21.334A5.333 5.333 0 0 0 5.333 32h21.334A5.333 5.333 0 0 0 32 26.667V5.333A5.333 5.333 0 0 0 26.667 0zm-5.105 22.423a5.212 5.212 0 0 1-2.37-.602 10.482 10.482 0 0 1-13.67-1.608.803.803 0 0 1 1.228-1.036 8.866 8.866 0 0 0 11.914 1.04.803.803 0 0 1 .986-.005 3.461 3.461 0 0 0 5.41-2.888 3.495 3.495 0 0 0-3.39-3.416c-.016 0-.036 0-.063-.002a.962.962 0 0 0-.12.003.806.806 0 0 1-.778-.455 6.54 6.54 0 0 0-5.992-3.848c-2.82 0-5.738 1.802-5.738 4.819-.003.818.35 1.596.969 2.132l1.688-3.147a.803.803 0 0 1 1.423.015l.982 1.926.983-1.926a.8.8 0 0 1 .71-.438c.3 0 .574.164.716.428l2.076 3.933a.8.8 0 0 1-.03.804.802.802 0 0 1-1.391-.054l-1.353-2.564-.995 1.95a.803.803 0 0 1-1.431-.001l-1-1.96-1.384 2.58a.805.805 0 0 1-1.046.349 4.563 4.563 0 0 1-2.524-4.027C7.372 10.403 11.107 8 14.717 8a8.081 8.081 0 0 1 7.209 4.308 5.063 5.063 0 0 1-.363 10.115z" fill="red" fillRule="evenodd"></path></svg>My Nintendo Store
              <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5" />
            </MenuButton>
          </div>
          <div>
            <MenuButton className="menu-button1 flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation" alt="" data-testid="DPadIcon" size="16" color="currentColor"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fillRule="evenodd" clipRule="evenodd" fill="currentColor"></path></svg>Games
              <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5" />
            </MenuButton>
          </div>
          <div>
            <MenuButton className="menu-button1 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation" alt="" data-testid="SwitchIcon" size="16" color="currentColor"><path d="M13.54 0a.18.18 0 0 1 .17.17v31.66a.15.15 0 0 1-.17.17H8.11a6.86 6.86 0 0 1-6.85-6.8V6.74A6.81 6.81 0 0 1 8.11 0h5.43zm10.4 0a6.77 6.77 0 0 1 6.8 6.74V25.2a6.82 6.82 0 0 1-6.85 6.8h-5.43a.15.15 0 0 1-.17-.17V.17c0-.11.11-.17.22-.17h5.43zM7.49 19.6a1.26 1.26 0 1 0 0 2.51 1.32 1.32 0 0 0 1.31-1.25 1.28 1.28 0 0 0-1.31-1.26zm17-3.6a2.86 2.86 0 0 0-2.85 2.86A2.86 2.86 0 1 0 24.51 16zm-14.28.86a1.26 1.26 0 1 0 0 2.51 1.35 1.35 0 0 0 1.31-1.26 1.32 1.32 0 0 0-1.29-1.25zm-5.49 0a1.26 1.26 0 1 0 0 2.51 1.36 1.36 0 0 0 1.32-1.26 1.28 1.28 0 0 0-1.3-1.25zm2.75-2.69a1.26 1.26 0 1 0 0 2.52 1.37 1.37 0 0 0 1.33-1.26 1.28 1.28 0 0 0-1.31-1.26zm17-4a1.36 1.36 0 0 0-1.31 1.26 1.32 1.32 0 1 0 1.31-1.26zm-17-5.08a2.86 2.86 0 1 0 0 5.71 2.86 2.86 0 0 0 2.85-2.86 2.82 2.82 0 0 0-2.83-2.85zm19.77 2.4a1.26 1.26 0 1 0 1.31 1.25 1.32 1.32 0 0 0-1.29-1.25zm-5.43 0a1.26 1.26 0 1 0 1.31 1.25 1.29 1.29 0 0 0-1.29-1.25zm2.68-2.75A1.36 1.36 0 0 0 23.2 6a1.32 1.32 0 1 0 1.31-1.26z" fill="currentColor" fillRule="evenodd"></path></svg>Nintenedo Switch
              <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5" />
            </MenuButton>
          </div>
          <div>
            <MenuButton className="menu-button1 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation" alt="" data-testid="NewsIcon" size="16" color="currentColor"><path fill="currentColor" d="M31.92 3.62a1.945 1.945 0 0 0-1.953-1.932H1.874A1.945 1.945 0 0 0-.08 3.62v10.068h32zm-32 11.692v7.201a2.027 2.027 0 0 0 1.954 1.998h8.711a2.777 2.777 0 0 1 2.178 1.073q2.97 4.736 3.315 4.728.344-.009 3.315-4.837a2.677 2.677 0 0 1 2.177-.964h8.398a2.027 2.027 0 0 0 1.953-1.998v-7.201zm14 5.15c0 .056-.07.1-.155.1H3.077c-.086 0-.156-.044-.156-.1v-1.051c0-.055.07-.1.156-.1h10.688c.086 0 .156.045.156.1z"></path></svg>News & Events
              <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5" />
            </MenuButton>
          </div>
          <div>
            <MenuButton className="menu-button1 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation" alt="" data-testid="StarPlayNintendoIcon" size="16" color="currentColor"><path d="M18.9 19.1c-.9 0-1-1.5-1-3.4s0-3.5 1-3.4c.9.1 1.1 1.4 1.1 3.3-.1 2-.2 3.5-1.1 3.5m-5.8 0c-.9 0-1-1.6-1-3.4 0-1.9.2-3.2 1.1-3.3 1-.1 1 1.5 1 3.4-.1 1.8-.2 3.3-1.1 3.3M32 12.4c-.1-.3-1.4-.6-5.6-1.1-2.6-.3-5.1-.5-5.2-.5-.2 0-.4-.2-.5-.4-.6-1.6-1.3-3.3-2-4.8C17.1 1.8 16.4.7 15.9.7c-.4 0-1 1.1-2.8 5-1.1 2.4-2 4.8-2 4.8-.1.2-.3.4-.5.4 0 0-2.5.1-5.1.4-4.1.4-5.4.7-5.5 1-.1.4.8 1.3 3.9 4.2 1.9 1.8 3.9 3.4 3.9 3.4.2.1.2.3.2.4v.1s-.6 2.5-1.2 5.1c-.6 3-1.1 5.4-.7 5.7.4.4 1.8-.5 5.2-2.4 2.3-1.3 4.4-2.7 4.5-2.7.2-.1.4-.1.6 0 0 0 2.2 1.4 4.4 2.7 3.4 2 4.7 2.7 5.2 2.4.4-.3 0-2.1-.7-5.7-.5-2.6-1.2-5.1-1.2-5.1v-.1c0-.2.1-.3.2-.4 0 0 1.9-1.6 3.9-3.3 3-2.9 3.9-3.9 3.8-4.2" fillRule="evenodd" clipRule="evenodd" fill="currentColor"></path></svg>Play Nintendo
              <ChevronDownIcon aria-hidden="true" className="arrow -mr-1 size-5"/>
            </MenuButton>
          </div>



        </Menu>
      </div>

      <div className='ThirdNav'>
        <Menu as="div" className="UnderNav1 justify-center">
          <div className='thirdnav1'>
            <p className="thirdnav2 w-full justify-center gap-x-1.5 rounded-md  text-md font-medium text-gray-900">
            <svg data-name="Layer 2 copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="ShippingTruckArrowIcon" color="currentColor" size="24"><path d="M6.57 27.352a3.373 3.373 0 1 1 3.372-3.372 3.376 3.376 0 0 1-3.373 3.372zm17.288 0a3.373 3.373 0 1 1 3.372-3.372 3.376 3.376 0 0 1-3.372 3.372z" fill="currentColor"></path><path d="M31.519 14.29l-3.889-3.888a1.643 1.643 0 0 0-1.161-.481h-4.4V4.648H3.436A3.327 3.327 0 0 0 0 7.831V23.98h2.196a4.373 4.373 0 0 1 8.746 0h8.535a4.373 4.373 0 0 1 8.746 0h2.134A1.643 1.643 0 0 0 32 22.336v-6.884a1.643 1.643 0 0 0-.481-1.162zM15.87 12.94l-3.946 3.946a.44.44 0 0 1-.311.13.445.445 0 0 1-.169-.034.44.44 0 0 1-.271-.407v-1.918H7.412a.44.44 0 0 1-.44-.44V11.04a.44.44 0 0 1 .44-.44h3.762V8.683a.44.44 0 0 1 .751-.311l3.946 3.946a.44.44 0 0 1 0 .622zm12.422 2.26a.66.66 0 0 1-.66.66h-4.718a.66.66 0 0 1-.66-.66v-2.834a.66.66 0 0 1 .66-.66h3.156a.66.66 0 0 1 .467.193l1.561 1.562a.66.66 0 0 1 .194.466z" fill="currentColor"></path></svg><strong>Free shipping</strong> on orders $50 or more. <strong><u>Restrictions apply</u></strong>
            </p>
          </div>
          <div>
            <p className='divider'>|</p>
          </div>
          <div>
            <p className="thirdnav2 flex w-full justify-center gap-x-1.5 text-md font-medium text-gray-900 "> <svg data-name="My Nintendo points" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="MyNintendoPointsIcon" color="currentColor" size="24"><path fill="currentColor" d="M31.7 13.474a11.843 11.843 0 0 0-.734-2.336 12.781 12.781 0 0 0-1.135-2.102 13.331 13.331 0 0 0-1.501-1.835 11.276 11.276 0 0 0-1.836-1.502 12.78 12.78 0 0 0-2.102-1.134 13.589 13.589 0 0 0-2.336-.734 12.638 12.638 0 0 0-5.005 0 1 1 0 0 0-.334.133A12.652 12.652 0 0 0 0 15.977 12.703 12.703 0 0 0 12.68 28.69a12.851 12.851 0 0 0 4.07-.668 1 1 0 0 0 .334.134 12.493 12.493 0 0 0 2.503.267 12.758 12.758 0 0 0 2.503-.267 11.843 11.843 0 0 0 2.335-.734 12.78 12.78 0 0 0 2.103-1.135 13.332 13.332 0 0 0 1.835-1.501 11.275 11.275 0 0 0 1.501-1.836A12.78 12.78 0 0 0 31 20.849a13.589 13.589 0 0 0 .734-2.335A12.493 12.493 0 0 0 32 16.01a15.954 15.954 0 0 0-.3-2.536zM12.68 26.287a10.088 10.088 0 0 1-7.274-3.036 10.27 10.27 0 0 1-3.003-7.308A10.088 10.088 0 0 1 5.438 8.67 10.323 10.323 0 0 1 20.02 23.285a10.405 10.405 0 0 1-7.341 3.003zm16.717-8.275a12.07 12.07 0 0 1-.567 1.869 10.503 10.503 0 0 1-.934 1.701 8.722 8.722 0 0 1-1.235 1.469 12.52 12.52 0 0 1-1.468 1.234 10.504 10.504 0 0 1-1.702.935 7.539 7.539 0 0 1-1.869.567c-.333.067-.7.133-1.034.167.4-.3.768-.634 1.135-.968A12.8 12.8 0 0 0 21.689 7a10.593 10.593 0 0 0-1.134-1 9.569 9.569 0 0 1 1.034.166 12.07 12.07 0 0 1 1.869.568 10.503 10.503 0 0 1 1.702.934 8.723 8.723 0 0 1 1.468 1.235 12.52 12.52 0 0 1 1.234 1.468 10.504 10.504 0 0 1 .935 1.702 7.539 7.539 0 0 1 .567 1.868 10.27 10.27 0 0 1 .2 2.036 8.392 8.392 0 0 1-.167 2.035z"></path><path fill="currentColor" d="M15.082 14.141a6.515 6.515 0 0 0-.767-.066c-.067-.2-.2-.434-.3-.701-.468-1.035-.768-1.502-1.335-1.502s-.868.467-1.335 1.502c-.1.233-.233.5-.3.7-.2.034-.467.034-.734.067-1.135.134-1.669.267-1.836.768a.735.735 0 0 0-.033.267c0 .4.234.734 1.068 1.468a6.793 6.793 0 0 0 .567.5c-.067.2-.1.468-.167.735a7.634 7.634 0 0 0-.167 1.2.949.949 0 0 0 .334.802.797.797 0 0 0 .467.166 3.271 3.271 0 0 0 1.502-.6c.233-.134.467-.267.667-.4.2.1.4.266.668.4.967.567 1.501.734 1.935.467a.922.922 0 0 0 .4-.834 8.175 8.175 0 0 0-.166-1.201c-.067-.267-.134-.534-.167-.768a6.795 6.795 0 0 0 .567-.5c.8-.735 1.068-1.068 1.068-1.469a.735.735 0 0 0-.034-.267c-.233-.433-.767-.6-1.902-.734z"></path><path fill="currentColor" d="M12.713 8.035a7.928 7.928 0 0 0-5.606 13.547 1.18 1.18 0 1 0 1.669-1.668 5.612 5.612 0 0 1-1.635-3.937 5.473 5.473 0 0 1 1.635-3.938 5.553 5.553 0 0 1 3.937-1.635 5.473 5.473 0 0 1 3.938 1.635 1.18 1.18 0 1 0 1.668-1.668 7.906 7.906 0 0 0-5.606-2.336z"></path></svg>
              Earn <strong><u>My Nintendo Points</u></strong> on digital games
            </p>
          </div>
        </Menu>
      </div>

      <main>
        <div className='landing'>
          <div className='gameFront'>
            <nav aria-label="Breadcrumb">
              <ol role="list" className="navList mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <li>
                  <div className="flex items-center">
                    <a href="#" className="mr-2 text-sm font-medium text-gray-900">Store</a>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <a href="#" className="mr-2 text-sm font-medium text-gray-900">Games</a>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>

                <li className="text-sm">
                  <a href="#" aria-current="page" className="sm1 text-gray-700 hover:text-gray-600">Stardew Valley</a>
                </li>
              </ol>
            </nav>

            <div className='gameFI'>
              <div className='carousel'>



                <Carousel loop="true" className="rounded-xl"
                prevArrow={({ handlePrev }) => (
                  <IconButton
                    variant="text"
                    size="lg"
                    onClick={handlePrev}
                    className="left !absolute top-2/4 left-4 -translate-y-2/4"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" strokeWidth={2}
                    stroke="currentColor" className="h-10 w-10"><path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/></svg>
                  </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                  <IconButton
                    variant="text"
                    size="lg"
                    onClick={handleNext}
                    className="right !absolute top-2/4 !right-4 -translate-y-2/4"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" 
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-10 w-10"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
                  </IconButton>
                )}>
                  
                  <img
                    src="Images/Stardew.png"
                    alt="image 0"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="Images/Stardew1.png"
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="Images/Stardew2.png"
                    alt="image 2"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="Images/Stardew3.png"
                    alt="image 3"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="Images/Stardew4.png"
                    alt="image 4"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="Images/Stardew5.png"
                    alt="image 5"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="Images/Stardew6.png"
                    alt="image 6"
                    className="h-full w-full object-cover"
                  />
                </Carousel>


                <div ref={ref} className="glide">
                  <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                      <li className="glide__slide"><img src="Images/Stardew.png" alt="" /></li>
                      <li className="glide__slide"><img src="Images/Stardew1.png" alt="" /></li>
                      <li className="glide__slide"><img src="Images/Stardew2.png" alt="" /></li>
                      <li className="glide__slide"><img src="Images/Stardew3.png" alt="" /></li>
                      <li className="glide__slide"><img src="Images/Stardew4.png" alt="" /></li>
                      <li className="glide__slide"><img src="Images/Stardew5.png" alt="" /></li>
                      <li className="glide__slide"><img src="Images/Stardew6.png" alt="" /></li>
                    </ul>
                  </div>
                  <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--prev" data-glide-dir="<"><FontAwesomeIcon icon="fa-solid fa-angle-left" id='prev'/></button>
                    <button className="glide__arrow glide__arrow--next" data-glide-dir=">"><FontAwesomeIcon icon="fa-solid fa-angle-right" id='next'/></button>
                  </div>
                </div>

              <div className='esrb'>
                <div><img src="Images/ESRB.png" alt="" /></div>
                <div className='esrbText'>
                <p>Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated <br /> Gambling, Mild Language, Mild Blood</p>
                
                <p>Users Interact</p>
                </div>
                

              </div>

              </div>

              <div className='gameFI2'>
                <div className="ProductView">
                  
                  <h2>Stardew Valley</h2>
                  <div className='price'><h2>$14.99</h2> <FontAwesomeIcon icon="fa-regular fa-heart" id='heart-icon'/></div>
                  <div className='goldpoints'><img src="Images/goldcoin.png" alt="" id='goldcoin' /><p>Eligible for up to <strong>75</strong> Gold Points</p></div>
                  <button className='ProductButton'><FontAwesomeIcon icon="fa-solid fa-download" id='download-icon'/><p>Direct download</p></button>
                  <p>This item will be sent to your system automatically after purchase</p>
                </div>



              </div>

            </div>
          </div>

        </div >


        <div className='main'>
          <div className='GameDesc'>
            <p className='textOne'>
            You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!
              <br />
              <br />
              Now with Multiplayer! Invite 1-3 players to join you in the valley! Players can work together to build a thriving farm, share resources, and build relationships with townspeople or each other. As more hands are better...
              <br />
              <br /><button><FontAwesomeIcon icon="fa-solid fa-plus" id='plus'/> Read more</button>
            </p>
            <div className='GameImg'>
              <img className='StardewImg2' src="Images/Stardew.png" alt="" />
            </div>
          </div>
        </div>


        

        <div className='ratingDevice'>
          <div className='rating'>
            <div className='ratingTitle'>
              <h3>ESRB rating</h3>
            </div>
          <div className='esrb1'>
             <div className='esrb-container'>
                <div><img src="Images/ESRB.png" alt="" /></div>
                <div className='esrbText'>
                <p>Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated <br /> Gambling, Mild Language, Mild Blood</p>
                
                <p>Users Interact</p>
                </div>
              </div>

              </div>

          </div>

          <div className='device'>
          <div className='deviceTitle'>
              <h3>Supported play modes</h3>
          </div>
          <div className='support'>
            <div className='play'><div className='devices'><img src="Images/tv.png" alt="" /></div><p>TV</p></div>
            <div className='play'><div className='devices'><img src="Images/tabletop.png" alt="" /></div><p>Tabletop</p></div>
            <div className='play'><div className='devices'><img src="Images/handheld.png" alt="" /></div><p>Handheld</p></div>
          </div>
          </div>
        </div>

        <section className='table'>

        <div className="">
        <table className="text-left table-auto min-w text-slate-800">
          <tbody>
            <tr className="hover:bg-slate-50">
              <td className="p-4">
                <div className='table-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve" width="28" role="presentation" alt="" data-testid="CalendarIcon" size="28" color="currentColor"><path fill="currentColor" d="M21.8 19.1h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm0 8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm1.6-20.3h1.5c.5 0 .9-.4.9-.9v-5c0-.5-.4-.9-.9-.9h-1.5c-.5 0-.9.4-.9.9v5c0 .5.4.9.9.9zm-16.3 0h1.5c.5 0 .9-.4.9-.9v-5c0-.5-.4-.9-.9-.9H7.1c-.5 0-.9.4-.9.9v5c0 .5.4.9.9.9zm6.1 20.3h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9z"></path><path fill="currentColor" d="M29.5 4.3H27v2.2c0 1.2-.9 2.1-2.1 2.1h-1.5c-1.2 0-2.1-1-2.1-2.1V4.3H10.7v2.2c0 1.2-.9 2.1-2.1 2.1H7.1C5.9 8.6 5 7.6 5 6.5V4.3H2.5C1.1 4.3 0 5.4 0 6.7V29c0 1.4 1.1 2.5 2.5 2.5h27c1.4 0 2.5-1.1 2.5-2.5V6.7c0-1.3-1.1-2.4-2.5-2.4zm0 24.7h-27V10.4h27V29z"></path><path fill="currentColor" d="M13.2 19.1h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm-8.6 8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9H4.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm0-8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9H4.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9z"></path></svg>
                <p className="text-sm font-bold">
                  Release date
                </p>
                </div>
                
              </td>
              <td className="p-4">
                <p className="text-sm">
                  October 5, 2017
                </p>
              </td>
          
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="p-4">
              <div className='table-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve" width="28" role="presentation" alt="" data-testid="GroupIcon" size="28" color="currentColor"><path fill="currentColor" d="M9 13c0 3.8 3.1 6.9 6.9 6.9 3.8 0 6.9-3.1 6.9-6.9 0-3.8-3.1-6.9-6.9-6.9C12.1 6.1 9 9.2 9 13z"></path><path fill="currentColor" d="M24.3 13c0 .7-.1 1.4-.3 2h.3c3.2 0 5.8-2.6 5.8-5.9 0-3.3-2.6-5.9-5.8-5.9-1.8 0-3.5.9-4.5 2.3 2.7 1.4 4.5 4.2 4.5 7.5zM7.4 15h.3c-.2-.6-.3-1.3-.3-2 0-3.3 1.8-6.1 4.5-7.5-1.1-1.4-2.7-2.3-4.5-2.3-3.2 0-5.8 2.6-5.8 5.9 0 3.3 2.6 5.9 5.8 5.9zm5.1 5.7c-1.8-.8-3.2-2.2-4.1-3.9-.3 0-.6-.1-1-.1C3.3 16.8 0 19.6 0 23h8.2c1.2-1 2.6-1.8 4.3-2.3zm11.8-3.9c-.3 0-.7 0-1 .1-.9 1.7-2.3 3.1-4.1 3.9 1.6.5 3.1 1.3 4.2 2.3h8.2c.2-3.5-3.2-6.3-7.3-6.3zm-8.4 5.1c-4.8 0-8.7 3-9 6.7h18c-.4-3.8-4.3-6.7-9-6.7z"></path></svg>
                <p className="text-sm font-bold">
                  No. of players
                </p>
              </div>
              </td>
              <td className="p-4">
                <a className="text-sm">
                  <a href="">Single System(1)</a>  <a href="">Local wireless(1)</a>  <a href="">Online(1-4)</a>
                </a>
              </td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="p-4">
                <div className='table-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" alt="" data-testid="DPadIcon" size="28" color="currentColor"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fillRule="evenodd" clipRule="evenodd" fill="currentColor"></path></svg>
                <p className="text-sm font-bold">
                  Genre
                </p>
                </div>
              </td>
              <td className="p-4">
                <a className="text-sm">
                  Role-Playing  Simulation
                </a>
              </td>
          
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="p-4">
              <div className='table-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" alt="" data-testid="BuildingIcon" size="28" color="currentColor"><path d="M28.9 2.1C28.9 1 28 0 26.8 0H5.6C4.4 0 3.5 1 3.5 2.1v29.8H12v-6.4h7.4v6.4h9.5V2.1zm-19 25.6H6.7v-3.2h3.2v3.2zm0-5.4H6.7v-3.2h3.2v3.2zm0-5.3H6.7v-3.2h3.2V17zm0-5.3H6.7V8.5h3.2v3.2zm0-5.3H6.7V3.2h3.2v3.2zm5.2 15.9H12v-3.2h3.2v3.2zm0-5.3H12v-3.2h3.2V17zm0-5.3H12V8.5h3.2v3.2zm0-5.3H12V3.2h3.2v3.2zm5.3 15.9h-3.2v-3.2h3.2v3.2zm0-5.3h-3.2v-3.2h3.2V17zm0-5.3h-3.2V8.5h3.2v3.2zm0-5.3h-3.2V3.2h3.2v3.2zm5.3 21.3h-3.2v-3.2h3.2v3.2zm0-5.4h-3.2v-3.2h3.2v3.2zm0-5.3h-3.2v-3.2h3.2V17zm0-5.3h-3.2V8.5h3.2v3.2zm0-5.3h-3.2V3.2h3.2v3.2z" fillRule="evenodd" clipRule="evenodd" fill="currentColor"></path></svg>
                <p className="text-sm font-bold">
                 Publisher
                </p>

              </div>
              </td>
              <td className="p-4">
                <a className="text-sm">
                  ConcernedApe
                </a>
              </td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="p-4">
                <div className='table-icon'>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" role="presentation" alt="" data-testid="WrenchIcon" size="28" color="currentColor"><path fill="currentColor" d="M23.0616 18.5338L15.0011 10.4733C15.3211 9.62528 15.4939 8.70691 15.4939 7.75014C15.4971 3.46868 12.0284 0 7.74694 0C6.78697 0 5.8686 0.175994 5.02383 0.492784L10.0125 5.48142L5.48142 10.0125L0.492784 5.02383C0.172794 5.8718 0 6.79017 0 7.74694C0 12.0252 3.46868 15.4939 7.74694 15.4939C8.70691 15.4939 9.62528 15.3179 10.4701 15.0011L18.5306 23.0616C19.7817 24.3128 21.8105 24.3128 23.0616 23.0616C24.3128 21.8105 24.3128 19.7817 23.0616 18.5306V18.5338ZM20.4921 21.9193C19.6729 21.9193 19.0106 21.2569 19.0106 20.4377C19.0106 19.6185 19.6729 18.9562 20.4921 18.9562C21.3113 18.9562 21.9737 19.6185 21.9737 20.4377C21.9737 21.2569 21.3113 21.9193 20.4921 21.9193Z"></path></svg>
                <p className="text-sm font-bold">
                  ESRB rating
                </p>
                </div>
              </td>
              <td className="p-4">
                <a className="text-sm">
                  Everyone 10+
                </a>
              </td>
              
            </tr>

            <tr className="hover:bg-slate-50">
              <td className="p-4">
                <div className='table-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" alt="" data-testid="GearIcon" size="28" color="currentColor"><path d="M30.6 13.1h-2.4c-.3-1.4-.8-2.6-1.5-3.8l1.7-1.7c.5-.5.5-1.4 0-1.9l-2.1-2.1c-.5-.5-1.4-.5-1.9 0l-1.7 1.7c-1.2-.7-2.4-1.3-3.8-1.5V1.4c0-.7-.6-1.4-1.4-1.4h-3c-.7 0-1.4.6-1.4 1.4v2.4c-1.4.4-2.6.8-3.8 1.5L7.6 3.6c-.5-.5-1.4-.5-1.9 0L3.6 5.7c-.6.5-.6 1.4 0 1.9l1.7 1.7c-.7 1.2-1.3 2.4-1.5 3.8H1.3c-.7 0-1.4.6-1.4 1.4v3c0 .7.6 1.4 1.4 1.4h2.4c.3 1.4.8 2.6 1.5 3.8l-1.7 1.7c-.5.5-.5 1.4 0 1.9l2.1 2.1c.6.5 1.4.5 2 0l1.7-1.7c1.2.7 2.4 1.3 3.8 1.5v2.5c0 .7.6 1.4 1.4 1.4h3c.7 0 1.4-.6 1.4-1.4v-2.4c1.4-.3 2.6-.8 3.8-1.5l1.7 1.7c.5.5 1.4.5 1.9 0l2.1-2.1c.5-.5.5-1.4 0-1.9l-1.7-1.7c.7-1.2 1.3-2.4 1.5-3.8h2.4c.7 0 1.4-.6 1.4-1.4v-3c.1-.9-.6-1.5-1.4-1.5zM16 21.6c-3.1 0-5.6-2.5-5.6-5.6 0-3.1 2.5-5.6 5.6-5.6 3.1 0 5.6 2.5 5.6 5.6-.1 3.1-2.6 5.6-5.6 5.6z" fillRule="evenodd" clipRule="evenodd" fill="currentColor"></path></svg>
                <p className="text-sm font-bold">
                  Supported play modes
                </p>
                </div>
              </td>
              <td className="p-4">
                <p className="text-sm">
                  Tv mode, Tablestop mode, Handheld mode
                </p>
              </td>
              
            </tr>

            <tr className="hover:bg-slate-50">
              <td className="p-4">
                <div className='table-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve" width="28" role="presentation" alt="" data-testid="StorageIcon" size="28" color="currentColor"><ellipse cx="16" cy="4.234" rx="13" ry="4.234" fillRule="evenodd" clipRule="evenodd" fill="currentColor"></ellipse><path fill="currentColor" d="M3 15.71v5.293c0 .408.239.781.616.935C7.085 23.35 11.362 24.192 16 24.192s8.915-.84 12.384-2.254c.377-.154.616-.527.616-.935V15.71c-3.573 1.57-8.084 2.515-13 2.515S6.573 17.28 3 15.71z"></path><path fill="currentColor" d="M3 7.852v5.292c0 .408.239.782.616.935 3.469 1.414 7.746 2.254 12.384 2.254s8.915-.84 12.384-2.254c.377-.153.616-.527.616-.935V7.852c-3.573 1.57-8.084 2.514-13 2.514S6.573 9.422 3 7.852zm26 15.767c-3.573 1.57-8.084 2.514-13 2.514S6.573 25.19 3 23.62v4.147C3 30.104 8.82 32 16 32s13-1.896 13-4.234"></path></svg>
                <p className="text-sm font-bold">
                  Game file size
                </p>
                </div>
              </td>
              <td className="p-4">
                <p className="text-sm">
                  1.5GB
                </p>
              </td>
              
            </tr>

            <tr className="hover:bg-slate-50">
              <td className="p-4">
                <div className='table-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" alt="" data-testid="GlobeIcon" size="28" color="currentColor"><path d="M16 0C11.7 0 7.7 1.7 4.7 4.7S0 11.7 0 16c0 4.3 1.7 8.3 4.7 11.3S11.7 32 16 32c8.8 0 16-7.2 16-16S24.8 0 16 0zm-5.2 4c-.5.9-1 1.9-1.4 3-.6-.2-1.3-.5-2-.8 1-1 2.2-1.7 3.4-2.2zM5.5 8.1c1 .5 2.1 1 3.2 1.4-.4 1.6-.6 3.4-.7 5.2H3c.2-2.4 1.1-4.6 2.5-6.6zM3 17.3h5.1c.1 1.8.3 3.5.7 5.2-1.1.4-2.2.8-3.2 1.4-1.5-2-2.4-4.2-2.6-6.6zm4.4 8.5c.7-.3 1.4-.6 2.1-.8.4 1.1.9 2.1 1.4 3-1.3-.5-2.5-1.2-3.5-2.2zm7.3 2.8c-1-.8-2-2.3-2.7-4.3.9-.2 1.8-.3 2.7-.4v4.7zm0-7.3c-1.1.1-2.3.2-3.4.5-.3-1.4-.5-2.9-.6-4.5h4v4zm0-6.6h-4c.1-1.6.3-3.1.6-4.5 1.1.2 2.3.4 3.4.5v4zm0-6.7c-1 0-1.8-.1-2.7-.3.7-2 1.7-3.5 2.7-4.2V8zM29 14.7h-5.1c-.1-1.8-.3-3.5-.7-5.2 1.1-.4 2.2-.8 3.2-1.4 1.5 2 2.4 4.2 2.6 6.6zm-4.4-8.5c-.7.3-1.4.6-2.1.8-.4-1.1-.9-2.2-1.4-3.1 1.3.6 2.5 1.3 3.5 2.3zm-7.3-2.7c1 .8 1.9 2.3 2.6 4.2-.8.2-1.7.3-2.6.3V3.5zm0 7.2c1.1-.1 2.3-.2 3.4-.4.3 1.4.5 2.9.6 4.5h-3.9v-4.1zm0 17.8V24c.9.1 1.8.2 2.6.4-.6 1.8-1.6 3.4-2.6 4.1zm0-7.2v-4h3.9c-.1 1.6-.3 3.1-.6 4.5-1-.2-2.1-.4-3.3-.5zm3.8 6.8c.5-.9 1-1.9 1.4-3.1.7.2 1.4.5 2.1.9-1 .9-2.2 1.6-3.5 2.2zm5.4-4.2c-1-.5-2.1-1-3.2-1.4.4-1.6.6-3.4.7-5.1h5c-.2 2.3-1.1 4.5-2.5 6.5z" fillRule="evenodd" clipRule="evenodd" fill="currentColor"></path></svg>
                <p className="text-sm font-bold">
                  Supported languages
                </p>
                </div>
              </td>
              <td className="p-4">
                <p className="text-sm">
                English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Simplified Chinese, <br /> Spanish, Traditional Chinese
                </p>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
      </section>

      <section className='onlinePlay'>

      <div className='online'>
        <div className='onlineSec'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 66" width="200" role="presentation" alt=""  data-testid="NsoHorizontalLogoIcon" size="200" color="currentColor"><polygon fill="#E60012" points="0 0 250 0 250 66 0 66"></polygon><path d="M29.7610313,24.0037881 C29.7610313,25.9086441 31.3184219,27.4528305 33.240125,27.4528305 C35.1618281,27.4528305 36.7192187,25.9086441 36.7192187,24.0037881 C36.7192187,22.0993814 35.1618281,20.5556441 33.240125,20.5556441 C31.3184219,20.5556441 29.7610313,22.0993814 29.7610313,24.0037881 Z M41.5762656,13 L33.4879844,13 C28.2480469,13 24,17.2108051 24,22.4052542 L24,40.2747881 C24,45.4687881 28.2480469,49.6791441 33.4879844,49.6791441 L41.5762656,49.6791441 C41.72625,49.6791441 41.8476875,49.558322 41.8476875,49.4105508 L41.8476875,13.2690424 C41.8476875,13.1203729 41.72625,13 41.5762656,13 Z M38.8643125,46.7223729 L33.4879844,46.7223729 C31.7497969,46.7223729 30.1167344,46.0517881 28.8883125,44.8341356 C27.6594375,43.6169322 26.983375,41.9977373 26.983375,40.2747881 L26.983375,22.4052542 C26.983375,20.6823051 27.6594375,19.0631102 28.8878594,17.8463559 C30.1162813,16.6282542 31.7497969,15.9572203 33.4879844,15.9572203 L38.8643125,15.9572203 L38.8643125,46.7223729 Z M51.5155625,13 L45.7907812,13 C45.6575625,13 45.5501719,13.1068983 45.5501719,13.2393983 L45.5501719,49.4105508 C45.5501719,49.558322 45.6711562,49.6791441 45.8206875,49.6791441 L51.5155625,49.6791441 C56.7559531,49.6791441 61.0035469,45.4687881 61.0035469,40.2747881 L61.0035469,22.4052542 C61.0035469,17.2108051 56.7559531,13 51.5155625,13 L51.5155625,13 Z M52.8708594,36.882339 C50.8041562,36.882339 49.1294062,35.221822 49.1294062,33.1736864 C49.1294062,31.1255508 50.8041562,29.4654831 52.8708594,29.4654831 C54.9366562,29.4654831 56.6118594,31.1255508 56.6118594,33.1736864 C56.6118594,35.221822 54.9366562,36.882339 52.8708594,36.882339 L52.8708594,36.882339 Z M127.711703,45.4099492 L127.711703,19.5724492 L122.177687,19.5724492 L122.177687,36.2378051 L109.202,19.5724492 L103.950734,19.5724492 L103.950734,45.4099492 L109.221484,45.4099492 L109.221484,28.1813559 L123.094812,45.4099492 L127.711703,45.4099492 Z M83.5388125,18.7343305 C75.761375,18.7343305 69.4565937,24.8935593 69.4565937,32.4909746 C69.4565937,40.088839 75.761375,46.2480678 83.5388125,46.2480678 C91.3171562,46.2480678 97.6219375,40.0883898 97.6219375,32.4909746 C97.6219375,24.8935593 91.3171562,18.7343305 83.5388125,18.7343305 Z M83.5388125,40.9902881 C78.9640625,40.9902881 75.2543281,37.1846186 75.2543281,32.4914237 C75.2543281,27.7977797 78.9640625,23.9930085 83.5388125,23.9930085 C88.1149219,23.9930085 91.8242031,27.7977797 91.8242031,32.4914237 C91.8242031,37.1846186 88.1149219,40.9902881 83.5388125,40.9902881 L83.5388125,40.9902881 Z M140.889031,19.5724492 L135.291125,19.5724492 L135.291125,45.4099492 L155.173344,45.4099492 L155.173344,40.3713559 L140.889484,40.3713559 L140.889484,19.5724492 L140.889031,19.5724492 Z M166.203312,19.5724492 L160.605406,19.5724492 L160.605406,45.4095 L166.203312,45.4095 L166.203312,19.5724492 Z M226.680094,24.6110424 L226.680094,19.5724492 L205.158016,19.5724492 L205.158016,45.4099492 L226.680094,45.4099492 L226.680094,40.3713559 L210.756375,40.3713559 L210.756375,34.5346186 L225.907516,34.5346186 L225.907516,29.7511441 L210.756375,29.7511441 L210.756375,24.6110424 L226.680094,24.6110424 Z M192.009234,36.2378051 L179.034,19.5724492 L173.782281,19.5724492 L173.782281,45.4099492 L179.053484,45.4099492 L179.053484,28.1813559 L192.926359,45.4099492 L197.542797,45.4099492 L197.542797,19.5724492 L192.008781,19.5724492 L192.008781,36.2378051 L192.009234,36.2378051 Z" id="Shape" fill="#FFFFFF" className='online1'></path></svg>
        <p id='play-online'>Play online, access classic NES™ and Super NES™ <br /> games, and more with a Nintendo Switch Online <br /> membership.</p>
        <p>This game supports: <a>Online Play</a> <a>Save Data Cloud</a></p>
        <button>Learn more</button>
        </div>
        
        
        <div className='controller'>
        <img src="Images/controller.png" alt="" className='online2'/>
        </div>
      </div>

      </section>


      <div className='viewed'>
        <div>
          <h2>More like this</h2>
        </div>
        <div>
        <Swiper className='swipe'
          loop={true}
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className='card'><div><img src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000004651/a52346fa3eeb45c7ccd23985e659a21df452a802bd0b105f666ab6231fd468ab" alt="" /><div  className='card-info'><h3>My Time Portia</h3><p id='date'>9/29/22</p></div><div className='card-info1'><span id='sale'>Sale ends: 9 days</span>
          <div className='pricing'>
            <p>$7.99</p><p id='prev-price'>$19.99</p>
            <span id='discount'><svg id='tags' viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#e60012"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#e60012" d="M16 0h-3.9a.34.34 0 0 0-.1.01.984.984 0 0 0-.6.28L.25 11.44a.985.985 0 0 0-.25.66 1.04 1.04 0 0 0 .27.69.038.038 0 0 1 .02.02l4.88 4.89c.01 0 .01 0 .01.01a1.014 1.014 0 0 0 1.42 0L17.71 6.6a.984.984 0 0 0 .28-.6.34.34 0 0 0 .01-.1V2zm-1 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path><text x="-5" y="-11" id='tag-text' fill="white">-85%</text> </g></svg></span>
            
            
            
            
            </div><a href="#" className="productView2 mr-2 text-sm font-medium text-gray-900">Nintendo Switch</a></div></div>
            <div className='save'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#e60012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
            </SwiperSlide>

            <SwiperSlide className='card'><div><img src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000035808/c7e2f6fa63ac0ababd1c5806a3cf7da9de6a845aeca106c707f4204c817fdd40" alt="" /><div  className='card-info'><h3>Potion Permit</h3><p id='date'>9/29/22</p></div><div className='card-info1'><span id='sale'>Sale ends: 9 days</span>
          <div className='pricing'>
            <p>$7.99</p><p id='prev-price'>$19.99</p>
            <span id='discount'><svg id='tags' viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#e60012"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#e60012" d="M16 0h-3.9a.34.34 0 0 0-.1.01.984.984 0 0 0-.6.28L.25 11.44a.985.985 0 0 0-.25.66 1.04 1.04 0 0 0 .27.69.038.038 0 0 1 .02.02l4.88 4.89c.01 0 .01 0 .01.01a1.014 1.014 0 0 0 1.42 0L17.71 6.6a.984.984 0 0 0 .28-.6.34.34 0 0 0 .01-.1V2zm-1 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path><text x="-5" y="-11" id='tag-text' fill="white">-85%</text> </g></svg></span>
            
            </div><a href="#" className="productView2 mr-2 text-sm font-medium text-gray-900">Nintendo Switch</a></div></div>
            <div className='save'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#e60012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
            </SwiperSlide>

          <SwiperSlide className='card'><div><img src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000048967/06239b4e0fc9c468b2e031e7df0add51a23f0c2dd2b4fb6107d1cd886675043b" alt="" /><div  className='card-info'><h3>Ooblets</h3><p id='date'>9/29/22</p></div><div className='card-info1'><span id='sale'>Sale ends: 9 days</span>
          <div className='pricing'>
            <p>$7.99</p><p id='prev-price'>$19.99</p>
            <span id='discount'><svg id='tags' viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#e60012"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#e60012" d="M16 0h-3.9a.34.34 0 0 0-.1.01.984.984 0 0 0-.6.28L.25 11.44a.985.985 0 0 0-.25.66 1.04 1.04 0 0 0 .27.69.038.038 0 0 1 .02.02l4.88 4.89c.01 0 .01 0 .01.01a1.014 1.014 0 0 0 1.42 0L17.71 6.6a.984.984 0 0 0 .28-.6.34.34 0 0 0 .01-.1V2zm-1 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path><text x="-5" y="-11" id='tag-text' fill="white">-50%</text> </g></svg></span>
            
            </div><a href="#" className="productView2 mr-2 text-sm font-medium text-gray-900">Nintendo Switch</a></div></div>
            <div className='save'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#e60012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
            </SwiperSlide>

            <SwiperSlide className='card'><div ><img src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000028856/fd32dfc61be7d9f6d8f6d3e979b347d24386331dffe8410809704a8d38caf96d" alt="" /><div className='card-info'><h3>Bear and Breakfast</h3><p id='date'>9/29/22</p></div><div className='card-info1'><span id='sale'>Sale ends: 4 days</span>
          <div className='pricing'>
            <p>$7.99</p><p id='prev-price'>$19.99</p>
            <span id='discount'><svg id='tags' viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#e60012"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#e60012" d="M16 0h-3.9a.34.34 0 0 0-.1.01.984.984 0 0 0-.6.28L.25 11.44a.985.985 0 0 0-.25.66 1.04 1.04 0 0 0 .27.69.038.038 0 0 1 .02.02l4.88 4.89c.01 0 .01 0 .01.01a1.014 1.014 0 0 0 1.42 0L17.71 6.6a.984.984 0 0 0 .28-.6.34.34 0 0 0 .01-.1V2zm-1 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path><text x="-5" y="-11" id='tag-text' fill="white">-35%</text> </g></svg></span>
            
            </div><a href="#" className="productView2 mr-2 text-sm font-medium text-gray-900">Nintendo Switch</a></div></div>
            <div className='save'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#e60012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
            </SwiperSlide>

            <SwiperSlide className='card'><div ><img src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000042326/bdf80cbf9dc396b710189e940e2590a12f42eadfe89085f4c51fb6d34784c22a" alt="" /><div className='card-info'><h3>Wytchwood</h3><p id='date'>9/29/22</p></div><div className='card-info1'><span id='sale'>Sale ends: 9 days</span>
          <div className='pricing'>
            <p>$7.99</p><p id='prev-price'>$19.99</p>
            <span id='discount'><svg id='tags' viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#e60012"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#e60012" d="M16 0h-3.9a.34.34 0 0 0-.1.01.984.984 0 0 0-.6.28L.25 11.44a.985.985 0 0 0-.25.66 1.04 1.04 0 0 0 .27.69.038.038 0 0 1 .02.02l4.88 4.89c.01 0 .01 0 .01.01a1.014 1.014 0 0 0 1.42 0L17.71 6.6a.984.984 0 0 0 .28-.6.34.34 0 0 0 .01-.1V2zm-1 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path><text x="-5" y="-11" id='tag-text' fill="white">-35%</text> </g></svg></span>
            
            </div><a href="#" className="productView2 mr-2 text-sm font-medium text-gray-900">Nintendo Switch</a></div></div>
            <div className='save'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#e60012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
            </SwiperSlide>

            <SwiperSlide className='card'><div ><img src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000054980/ae5d3e439ec21bf7502f950be283b530b44c0aca811dc035c4cc596f03c17562" alt="" /><div className='card-info'><h3>Fae Farm</h3><p id='date'>9/29/22</p></div><div className='card-info1'><span id='sale'>Sale ends: 9 days</span>
          <div className='pricing'>
            <p>$7.99</p><p id='prev-price'>$19.99</p>
            <span id='discount'><svg id='tags' viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#e60012"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#e60012" d="M16 0h-3.9a.34.34 0 0 0-.1.01.984.984 0 0 0-.6.28L.25 11.44a.985.985 0 0 0-.25.66 1.04 1.04 0 0 0 .27.69.038.038 0 0 1 .02.02l4.88 4.89c.01 0 .01 0 .01.01a1.014 1.014 0 0 0 1.42 0L17.71 6.6a.984.984 0 0 0 .28-.6.34.34 0 0 0 .01-.1V2zm-1 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path><text x="-5" y="-11" id='tag-text' fill="white">-25%</text> </g></svg></span>
            
            </div><a href="#" className="productView2 mr-2 text-sm font-medium text-gray-900">Nintendo Switch</a></div></div>
            <div className='save'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#e60012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
            </SwiperSlide>

            <SwiperSlide className='card'><div ><img src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000032052/e018d597844e528acda9c4cea06f01e3e8a09967b5f16d9e021b2ecda9682277" alt="" /><div className='card-info'><h3>Garden Story</h3><p id='date'>9/29/22</p></div><div className='card-info1'><span id='sale'>Sale ends: 9 days</span>
          <div className='pricing'>
            <p>$7.99</p><p id='prev-price'>$19.99</p>
            <span id='discount'><svg id='tags' viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#e60012"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#e60012" d="M16 0h-3.9a.34.34 0 0 0-.1.01.984.984 0 0 0-.6.28L.25 11.44a.985.985 0 0 0-.25.66 1.04 1.04 0 0 0 .27.69.038.038 0 0 1 .02.02l4.88 4.89c.01 0 .01 0 .01.01a1.014 1.014 0 0 0 1.42 0L17.71 6.6a.984.984 0 0 0 .28-.6.34.34 0 0 0 .01-.1V2zm-1 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path><text x="-5" y="-11" id='tag-text' fill="white">-15%</text> </g></svg></span>
            
            </div><a href="#" className="productView2 mr-2 text-sm font-medium text-gray-900">Nintendo Switch</a></div></div>
            <div className='save'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#e60012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
            </SwiperSlide>

            <SwiperSlide className='card'><div ><img src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/games/switch/l/littlewood-switch/hero" alt="" /><div className='card-info'><h3>Littlewood</h3><p id='date'>9/29/22</p></div><div className='card-info1'><span id='sale'>Sale ends: 5 days</span>
          <div className='pricing'>
            <p>$7.99</p><p id='prev-price'>$19.99</p>
            <span id='discount'><svg id='tags' viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#e60012"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#e60012" d="M16 0h-3.9a.34.34 0 0 0-.1.01.984.984 0 0 0-.6.28L.25 11.44a.985.985 0 0 0-.25.66 1.04 1.04 0 0 0 .27.69.038.038 0 0 1 .02.02l4.88 4.89c.01 0 .01 0 .01.01a1.014 1.014 0 0 0 1.42 0L17.71 6.6a.984.984 0 0 0 .28-.6.34.34 0 0 0 .01-.1V2zm-1 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path><text x="-5" y="-11" id='tag-text' fill="white">-65%</text> </g></svg></span>
            
            </div><a href="#" className="productView2 mr-2 text-sm font-medium text-gray-900">Nintendo Switch</a></div></div>
            <div className='save'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#e60012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
            </SwiperSlide>

            <SwiperSlide className='card'><div ><img src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000009167/aa76ed4ae6eed8a8160643e1ff1b9f964468270b9ed6a26fdae8bb4f91576ba1" alt="" /><div className='card-info'><h3>Dragon Quest Builders 2</h3><p id='date'>9/29/22</p></div><div className='card-info1'><span id='sale'>Sale ends: 7 days</span>
          <div className='pricing'>
            <p>$7.99</p><p id='prev-price'>$19.99</p>
            <span id='discount'><svg id='tags' viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#e60012"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#e60012" d="M16 0h-3.9a.34.34 0 0 0-.1.01.984.984 0 0 0-.6.28L.25 11.44a.985.985 0 0 0-.25.66 1.04 1.04 0 0 0 .27.69.038.038 0 0 1 .02.02l4.88 4.89c.01 0 .01 0 .01.01a1.014 1.014 0 0 0 1.42 0L17.71 6.6a.984.984 0 0 0 .28-.6.34.34 0 0 0 .01-.1V2zm-1 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path><text x="-5" y="-11" id='tag-text' fill="white">-20%</text> </g></svg></span>
            
            </div><a href="#" className="productView2 mr-2 text-sm font-medium text-gray-900">Nintendo Switch</a></div></div>
            <div className='save'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#e60012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
            </SwiperSlide>


          <SwiperSlide className='card'><div ><img src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000050794/19a36bc849f6645fd90f97c1cd77e8e40a757968ee399c29c73b2e3e8d9da3b9" alt="" /><div className='card-info'><h3>Let's Build a Zoo</h3><p id='date'>9/29/22</p></div><div className='card-info1'><span id='sale'>Sale ends: 6 days</span>
          <div className='pricing'>
            <p>$7.99</p><p id='prev-price'>$19.99</p>
            <span id='discount'><svg id='tags' viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#e60012"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#e60012" d="M16 0h-3.9a.34.34 0 0 0-.1.01.984.984 0 0 0-.6.28L.25 11.44a.985.985 0 0 0-.25.66 1.04 1.04 0 0 0 .27.69.038.038 0 0 1 .02.02l4.88 4.89c.01 0 .01 0 .01.01a1.014 1.014 0 0 0 1.42 0L17.71 6.6a.984.984 0 0 0 .28-.6.34.34 0 0 0 .01-.1V2zm-1 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path><text x="-5" y="-11" id='tag-text' fill="white">-10%</text> </g></svg></span>
            
            </div><a href="#" className="productView2 mr-2 text-sm font-medium text-gray-900">Nintendo Switch</a></div></div>
            <div className='save'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#e60012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
            </SwiperSlide>

          <SwiperSlide className='card'><div ><img src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000040812/aaed8882d691d0f6920791bbe29c0276e710ec58867defd9b941d8d906bb9d69" alt="" /><div className='card-info'><h3>Cat Cafe Manager</h3><p id='date'>4/12/22</p></div><div className='card-info1'><span id='sale'>Sale ends: 5 days</span>
          <div className='pricing'>
            <p>$7.99</p><p id='prev-price'>$19.99</p>
            <span id='discount'><svg id='tags' viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#e60012"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#e60012" d="M16 0h-3.9a.34.34 0 0 0-.1.01.984.984 0 0 0-.6.28L.25 11.44a.985.985 0 0 0-.25.66 1.04 1.04 0 0 0 .27.69.038.038 0 0 1 .02.02l4.88 4.89c.01 0 .01 0 .01.01a1.014 1.014 0 0 0 1.42 0L17.71 6.6a.984.984 0 0 0 .28-.6.34.34 0 0 0 .01-.1V2zm-1 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path><text x="-5" y="-11" id='tag-text' fill="white">-50%</text> </g></svg></span>
            
            </div><a href="#" className="productView2 mr-2 text-sm font-medium text-gray-900">Nintendo Switch</a></div></div>
            <div className='save'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#e60012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
            </SwiperSlide>

          <SwiperSlide className='card'><div ><img src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000069094/3cec49477676460bd7187eedeffa6e347abea286d3d0f79b068d21f3a84aaa53" alt="" /><div className='card-info'><h3>Moonstone Island</h3><p id='date'>6/19/24</p></div><div className='card-info1'><span id='sale'>Sale ends: 4 days</span>
          <div className='pricing'>
            <p>$7.99</p><p id='prev-price'>$19.99</p>
            <span id='discount'><svg id='tags' viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#e60012"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#e60012" d="M16 0h-3.9a.34.34 0 0 0-.1.01.984.984 0 0 0-.6.28L.25 11.44a.985.985 0 0 0-.25.66 1.04 1.04 0 0 0 .27.69.038.038 0 0 1 .02.02l4.88 4.89c.01 0 .01 0 .01.01a1.014 1.014 0 0 0 1.42 0L17.71 6.6a.984.984 0 0 0 .28-.6.34.34 0 0 0 .01-.1V2zm-1 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path><text x="-5" y="-11" id='tag-text' fill="white">-85%</text> </g></svg></span>
            
            </div><a href="#" className="productView2 mr-2 text-sm font-medium text-gray-900">Nintendo Switch</a></div></div>
            <div className='save'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#e60012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
            </SwiperSlide>


          <SwiperSlide className='card'><div ><img src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000035711/e20cef68d8e08b6115e8880f1f4dca2ce901236eb887d77b32f1555108b72317" alt="" /><div className='card-info'><h3>Cozy Grove</h3><p id='date'>9/29/22</p></div><div className='card-info1'><span id='sale'>Sale ends: 3 days</span>
          <div className='pricing'>
            <p>$7.99</p><p id='prev-price'>$19.99</p>
            <span id='discount'><svg id='tags' viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#e60012"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#e60012" d="M16 0h-3.9a.34.34 0 0 0-.1.01.984.984 0 0 0-.6.28L.25 11.44a.985.985 0 0 0-.25.66 1.04 1.04 0 0 0 .27.69.038.038 0 0 1 .02.02l4.88 4.89c.01 0 .01 0 .01.01a1.014 1.014 0 0 0 1.42 0L17.71 6.6a.984.984 0 0 0 .28-.6.34.34 0 0 0 .01-.1V2zm-1 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path><text x="-5" y="-11" id='tag-text' fill="white">-15%</text> </g></svg></span>
            
            </div><a href="#" className="productView2 mr-2 text-sm font-medium text-gray-900">Nintendo Switch</a></div></div>
            <div className='save'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#e60012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
            </SwiperSlide>
            
          <SwiperSlide className='card'><div ><img src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/games/switch/s/summer-in-mara-switch/hero" alt="" /><div className='card-info'><h3>Summer in Mara</h3><p id='date'>9/29/22</p></div><div className='card-info1'><span id='sale'>Sale ends: 4 days</span>
          <div className='pricing'>
            <p>$7.99</p><p id='prev-price'>$19.99</p>
            <span id='discount'><svg id='tags' viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#e60012"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#e60012" d="M16 0h-3.9a.34.34 0 0 0-.1.01.984.984 0 0 0-.6.28L.25 11.44a.985.985 0 0 0-.25.66 1.04 1.04 0 0 0 .27.69.038.038 0 0 1 .02.02l4.88 4.89c.01 0 .01 0 .01.01a1.014 1.014 0 0 0 1.42 0L17.71 6.6a.984.984 0 0 0 .28-.6.34.34 0 0 0 .01-.1V2zm-1 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path><text x="-5" y="-11" id='tag-text' fill="white">-25%</text> </g></svg></span>
            
            </div><a href="#" className="productView2 mr-2 text-sm font-medium text-gray-900">Nintendo Switch</a></div></div>
            <div className='save'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#e60012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
            </SwiperSlide>

          <SwiperSlide className='card'><div ><img src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/games/switch/t/turnip-boy-commits-tax-evasion-switch/hero" alt="" /><div className='card-info'><h3>Turnip Boy Commits Tax Evasion </h3><p id='date'>9/29/22</p></div><div className='card-info1'><span id='sale'>Sale ends: 8 days</span>
          <div className='pricing'>
            <p>$7.99</p><p id='prev-price'>$19.99</p>
            <span id='discount'><svg id='tags' viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#e60012"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#e60012" d="M16 0h-3.9a.34.34 0 0 0-.1.01.984.984 0 0 0-.6.28L.25 11.44a.985.985 0 0 0-.25.66 1.04 1.04 0 0 0 .27.69.038.038 0 0 1 .02.02l4.88 4.89c.01 0 .01 0 .01.01a1.014 1.014 0 0 0 1.42 0L17.71 6.6a.984.984 0 0 0 .28-.6.34.34 0 0 0 .01-.1V2zm-1 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path><text x="-5" y="-11" id='tag-text' fill="white">-30%</text> </g></svg></span>
            
            </div><a href="#" className="productView2 mr-2 text-sm font-medium text-gray-900">Nintendo Switch</a></div></div>
            <div className='save'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#e60012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
            </SwiperSlide>

          <SwiperSlide className='card'><div ><img src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000007682/0059a2013482d7e3c9c718a6a312f89e00e39a74906f2c795843db762dd092d0" alt="" /><div className='card-info'><h3>Yonder: The Cloud Catcher Chronicles</h3><p id='date'>9/29/22</p></div><div className='card-info1'><span id='sale'>Sale ends: 11 days</span>
          <div className='pricing'>
            <p>$7.99</p><p id='prev-price'>$19.99</p>
            <span id='discount'><svg id='tags' viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#e60012"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#e60012" d="M16 0h-3.9a.34.34 0 0 0-.1.01.984.984 0 0 0-.6.28L.25 11.44a.985.985 0 0 0-.25.66 1.04 1.04 0 0 0 .27.69.038.038 0 0 1 .02.02l4.88 4.89c.01 0 .01 0 .01.01a1.014 1.014 0 0 0 1.42 0L17.71 6.6a.984.984 0 0 0 .28-.6.34.34 0 0 0 .01-.1V2zm-1 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path><text x="-5" y="-11" id='tag-text' fill="white">-60%</text> </g></svg></span>
            
            </div><a href="#" className="productView2 mr-2 text-sm font-medium text-gray-900">Nintendo Switch</a></div></div>
            <div className='save'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#e60012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
            </SwiperSlide>
        </Swiper>
        </div>
      </div>

      <div className='warning'>
          <p>WARNING: If you have epilepsy or have had seizures or other unusual reactions to flashing lights or patterns, consult a doctor before playing video games. All users should read the Health and Safety Information available in the system settings before using this software.</p>
          <br />
          <p>Nintendo Switch Online membership (sold separately) and Nintendo Account required for online play. Not available in all countries. Internet access required for online features. <br />Terms apply. nintendo.com/switch-online</p>
          <br />
          <p>Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.</p>
      </div>

        </main>

        <footer className='footer relative w-full'>
          <div className='footerHeader'>
            <div>
              <img className="footerLogo" src="Images/nintendo.png" alt="" />
            </div>

            <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-10 w-10" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-10 w-10" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-10 w-10" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-10 w-10" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-10 w-10" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
          </div>

          </div>

          <div className='footerMid'>
          
      <div className="footer-links mx-auto w-full max-w-12xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-1">
          <div className="grid grid-cols-7 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant=""
                  color="black"
                  className="mb-3 font-medium"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12">
          
          
        </div>
      </div>
    

          </div>

          <div className='footerBottom'>
            <p>© Nintendo. Games are property of their respective owners. Nintendo of America Inc. Headquarters are in Redmond, Washington, USA</p>

            <a href="">Contact us</a>
            <a href="">Website feedback</a>
            <a href="">Terms of use</a>
          </div>
        </footer>
      
    </>
  )
}
export default App