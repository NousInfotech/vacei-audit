'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Features', 
      href: '/features',
      hasDropdown: true,
      dropdownItems: [
        { name: 'For Audit Firms', href: '/features/audit-firms' },
        { name: 'For Accounting Firms', href: '/features/accounting-firms' },
        { name: 'For Business', href: '/features/business' }
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Wizard Flow', href: '/wizard-flow' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Vacei Logo"
                width={120}
                height={40}
                className="h-9 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href || (item.hasDropdown && item.dropdownItems?.some(dropdownItem => pathname === dropdownItem.href));
              
              if (item.hasDropdown) {
                return (
                  <div key={item.name} className="relative group">
                    <button
                      className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative ${
                        isActive 
                          ? 'text-green-600' 
                          : 'text-gray-700 hover:text-green-600'
                      }`}
                      onMouseEnter={() => setIsFeaturesOpen(true)}
                      onMouseLeave={() => setIsFeaturesOpen(false)}
                    >
                      {item.name}
                      <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className={`absolute left-4 right-4 bottom-0 h-0.5 bg-green-600 transition-transform duration-300 ease-out ${
                        isActive 
                          ? 'scale-x-100' 
                          : 'transform scale-x-0 group-hover:scale-x-100'
                      }`}></span>
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 transition-all duration-300 ${
                      isFeaturesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseEnter={() => setIsFeaturesOpen(true)}
                    onMouseLeave={() => setIsFeaturesOpen(false)}>
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                            pathname === dropdownItem.href
                              ? 'text-green-600 bg-green-50'
                              : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                          }`}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative group ${
                    isActive 
                      ? 'text-green-600' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {item.name}
                  <span className={`absolute left-4 right-4 bottom-0 h-0.5 bg-green-600 transition-transform duration-300 ease-out ${
                    isActive 
                      ? 'scale-x-100' 
                      : 'transform scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button className="px-8 py-2.5 text-sm font-semibold text-white bg-vacei-green hover:bg-vacei-green/90 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-gray-700 hover:text-vacei-green hover:bg-gray-50 focus:outline-none transition-all duration-200"
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-1 pt-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-vacei-green bg-green-50'
                        : 'text-gray-700 hover:text-vacei-green hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-3 px-4">
                <button className="w-full px-6 py-3 text-sm font-semibold text-white bg-vacei-green hover:bg-vacei-green/90 rounded-lg transition-all duration-300 shadow-sm">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;