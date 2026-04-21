import * as Tabs from '@radix-ui/react-tabs';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TabItem } from './TabItem';

export function HeaderTabs() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState('home');

  // Sincronizar aba com URL quando mudar
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setCurrentTab('home');
    else setCurrentTab(path.replace('/', ''));
  }, [location.pathname]);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    navigate(tab === 'home' ? '/' : `/${tab}`);
  };

  const logo = (
    <>
      <div>&lt;Dev</div>
      <div className="pl-1.5">Hugo</div>
      <div className="pl-1.5">Pereira /&gt;</div>
    </>
  );

  return (
    <Tabs.Root value={currentTab} onValueChange={handleTabChange}>
      <Tabs.List className="h-16 w-auto flex flex-row justify-center items-center px-4 mb-8 border-b border-brand-border">
        <div className="w-auto flex flex-row gap-4 text-sm md:gap-24 md:text-base text-brand-text-secondary">
          <TabItem value="home" title="Home" isSelected={currentTab === 'home'} />
          <TabItem value="projects" title="Projetos" isSelected={currentTab === 'projects'} />
        </div>

        <span className="h-12 w-18 text-xs font-bold mx-2 md:mx-24 bg-brand-gradient bg-clip-text text-transparent min-h-[3em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          {logo}
        </span>

        <div className="w-auto flex flex-row gap-4 text-sm md:gap-24 md:text-base text-brand-text-secondary">
          <TabItem value="about" title="Sobre" isSelected={currentTab === 'about'} />
          <TabItem value="contact" title="Contato" isSelected={currentTab === 'contact'} />
        </div>
      </Tabs.List>
    </Tabs.Root>
  );
}
