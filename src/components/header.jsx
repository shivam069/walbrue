import { Fragment } from 'react'
import logo from '../assets/logo.png'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import { useState } from 'react'

const navigation = [
  { name: 'Home' },
  { name: 'About' },
  { name: 'Products' },
  { name: 'Contact' },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  
  useEffect(()=>{
  // Intersection Observer options
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
};

// Function to handle intersection changes
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // If the element is in view, remove background color
            document.getElementById('nav').style.backgroundColor = setNavbarBackground('transparent');
        } else {
            // If the element is not in view, add background color
            document.getElementById('nav').style.backgroundColor = setNavbarBackground('#00BFC2');
        }
    });
}

// Create an intersection observer with the callback and options
const observer = new IntersectionObserver(handleIntersection, options);

// Target the element you want to observe
const targetElement = document.getElementById('head');

// Start observing the target element
 observer.observe(targetElement)},[])

  function handleclick(target){
    console.log("Target:", target);
    document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    
  }
  return (
    <Disclosure style={{backgroundColor: navbarBackground, transition: 'background-color 0.3s ease'}}
     as="nav" id='nav' className="sticky top-0  bg-transparent z-10">
      {({ open }) => (
        <>
          <div className="mx-0 px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-14 py-2 w-auto"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block md:ml-auto">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                           'text-gray-100 hover:text-black pt-5',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        onClick={() => handleclick(item.name)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden ">
            <div style={{backgroundColor: '#00BFC2'}} className=" z-20 space-y-1 px-2 pb-3 pt-2 relative drop-shadow-md">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  className={classNames(
                     'text-gray-100  hover:text-black pt-5',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  onClick={() => handleclick(item.name)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
