import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';

import { PlusIcon } from 'lucide-react';

import { APP_SIDEBAR } from '@/constants';

function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className='relative'>
          <Avatar className='size-8'>
            <AvatarImage
              src={APP_SIDEBAR.curProfile.src}
              alt='Profile image'
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className='absolute bottom-0 right-0 size-2 rounded-full bg-emerald-500 dark:bg-emerald-400 ring-sidebar ring-1' />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side='right'
        align='end'
        className='w-60'
      >
        <DropdownMenuGroup>
          {APP_SIDEBAR.userMenu.itemsPrimary.map((item) => (
            <DropdownMenuItem key={item.title}>
              <item.Icon />
              <span>{item.title}</span>
              {item.kbd && (
                <DropdownMenuShortcut>{item.kbd}</DropdownMenuShortcut>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuRadioGroup
          value={APP_SIDEBAR.curProfile.email}
          className='gap-2 space-y-1'
        >
          <DropdownMenuLabel>Switch account</DropdownMenuLabel>
          {APP_SIDEBAR.allProfiles.map((profile) => (
            <DropdownMenuRadioItem
              key={profile.email}
              value={profile.email}
              className='data-[state=checked]:bg-secondary'
            >
              <div className='grid grid-cols-[max-content_minmax(0,1fr)] items-center gap-2'>
                <div className='relative'>
                  <Avatar>
                    <AvatarImage
                      src={profile.src}
                      alt='Profile image'
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className='absolute bottom-0 right-0 size-2 rounded-full bg-emerald-500 dark:bg-emerald-400 ring-sidebar ring-1' />
                </div>

                <div>
                  <h3 className='text-sm font-semibold'>{profile.name}</h3>

                  <p className='text-sm text-muted-foreground truncate'>
                    {profile.email}
                  </p>
                </div>
              </div>
            </DropdownMenuRadioItem>
          ))}

          <DropdownMenuItem asChild>
            <Button
              variant='outline'
              size='sm'
              className='w-full'
            >
              <PlusIcon />

              <span>Add account</span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuRadioGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {APP_SIDEBAR.userMenu.itemsSecondary.map((item) => (
            <DropdownMenuItem key={item.title}>
              <item.Icon />
              <span>{item.title}</span>
              {item.kbd && (
                <DropdownMenuShortcut>{item.kbd}</DropdownMenuShortcut>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenu;
