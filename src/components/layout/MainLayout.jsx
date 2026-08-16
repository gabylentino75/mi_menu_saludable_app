import React from 'react';
import { Header } from './Header';
import { BottomNav } from './BottomNav';
import { SideMenu } from './SideMenu';

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-cream-100 dark:bg-mirtilo-800 text-mirtilo-800 dark:text-cream-100 transition-colors">
      <Header />
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 pt-4 pb-24">
        {children}
      </main>
      <BottomNav />
      <SideMenu />
    </div>
  );
};
