import { DownloadIcon, SearchIcon, Settings2Icon } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Button } from './ui/button';

function PageHeader() {
  return (
    <div className='flex flex-col gap-4 lg:flex-row lg:justify-between'>
      <h1 className='text-xl font-semibold lg:text-2xl'>
        Welcome back, Andrzej
      </h1>
      <div className='flex gap-3'>
        <div className='flex max-lg:hidden'>
          <ThemeToggle />

          <Button
            variant='ghost'
            size='icon'
            aria-label='Search'
          >
            <SearchIcon />
          </Button>
        </div>

        <div className='flex items-center gap-3'>
          <Button variant='outline'>
            <Settings2Icon />

            <span>Customize</span>
          </Button>

          <Button variant='outline'>
            <DownloadIcon />

            <span>Export</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
