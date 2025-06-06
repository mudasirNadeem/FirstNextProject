'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // ✅ Import the hook
import { FileText, Home, Menu, Users } from 'lucide-react';
import clsx from 'clsx';
import { link } from 'fs';

export default function SideNav() {
  const links = [
    {name: 'dahsboard' ,  href: '/dashboard', Icon : Home},
    {name: 'Customer' , href : '/customer', icons: Users},
    {name: 'Invoice' , href : '/invoice', icons: FileText},
  ];
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  // Helper to check if link is active
  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Top Nav for mobile */}
      <div className="md:hidden flex bg-gray-800 text-white p-4 h-[80px]">
        <button onClick={toggleSidebar}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Overlay on mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white !min-w-64 p-4 space-y-4 z-30 h-screen transition-transform duration-300 
        fixed md:static top-0 left-0 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0`}
      >
        <h2 className="text-xl font-semibold">Menu</h2>
        <ul className="space-y-2">
          {links.map((link) =>(
          <li key={link.name}>
              <Link
                href={link.href}
                className={clsx(
                  'flex items-center gap-2 p-2 rounded hover:bg-gray-700',
                  isActive('/ds') && 'bg-gray-900 font-bold'
                )}
              >
                {/* <Icon className="w-5 h-5" /> */}
                <span>{link.name}</span>
              </Link>
            </li>
                      ))}
        </ul>
      </div>
    </>
  );
}
