'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function SelectTheme() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
    setCurrentTheme(theme);
  };

  const renderDropdownMenuItem = (themeValue: string, label: string) => (
    <DropdownMenuCheckboxItem
      checked={currentTheme === themeValue}
      onCheckedChange={() => handleThemeChange(themeValue)}
    >
      {label}
    </DropdownMenuCheckboxItem>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='w-10 px-0'>
          <FiSun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <FiMoon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Select Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {renderDropdownMenuItem('light', 'Light')}
        {renderDropdownMenuItem('dark', 'Dark')}
        {renderDropdownMenuItem('system', 'System')}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
