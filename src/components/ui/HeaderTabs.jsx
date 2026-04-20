import * as Tabs from '@radix-ui/react-tabs';
import { Box } from './Box';
import { useState } from 'react';
import { TabItem } from './TabItem';

export function HeaderTabs() {
  const [currentTab, setCurrentTab] = useState('home');

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="h-16 w-auto flex flex-row justify-center items-center px-4 mb-8 border-b border-brand-border">
        <div className="w-auto flex flex-row gap-4 text-sm md:gap-24 md:text-base text-brand-text-secondary">
          <TabItem value="home" title="Home" isSelected={currentTab === 'home'} />
          <TabItem value="projects" title="Projects" isSelected={currentTab === 'projects'} />
        </div>

        <p className="h-12 w-10 text-xs mx-2 md:mx-24 bg-brand-gradient bg-clip-text text-transparent min-h-[3em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          Dev Hugo Pereira
        </p>

        <div className="w-auto flex flex-row gap-4 text-sm md:gap-24 md:text-base text-brand-text-secondary">
          <TabItem value="about" title="About" isSelected={currentTab === 'about'} />
          <TabItem value="contact" title="Contact" isSelected={currentTab === 'contact'} />
        </div>
      </Tabs.List>

      <Box pt="3">
        <Tabs.Content value="account">
          <h1 size="2">Make changes to your account.</h1>
        </Tabs.Content>

        <Tabs.Content value="documents">
          <h1 size="2">Access and update your documents.</h1>
        </Tabs.Content>

        <Tabs.Content value="settings">
          <h1 size="2">Edit your profile or update contact information.</h1>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
}
