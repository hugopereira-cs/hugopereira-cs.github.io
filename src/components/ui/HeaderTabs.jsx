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
      <div className="flex flex-col">
        <div>&lt;Dev</div>
        <div className="pl-1.5">Hugo</div>
        <div className="pl-1.5">Pereira /&gt;</div>
      </div>
    </>
  );

  return (
    <Tabs.Root value={currentTab} onValueChange={handleTabChange}>
      <Tabs.List className="h-18 w-auto flex flex-row justify-center items-center px-4 mb-8 border-b border-brand-border">
        <div className="w-auto flex flex-row gap-2 text-sm md:gap-24 md:text-base text-brand-text-secondary">
          <TabItem value="home" title="Home" isSelected={currentTab === 'home'} />
          <TabItem value="projects" title="Projetos" isSelected={currentTab === 'projects'} />
        </div>

        <div className="p-px bg-brand-gradient rounded-2xl mx-2 md:mx-24 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          <div className="bg-brand-surface rounded-[calc(var(--radius-2xl)-1px)] h-14 w-18 flex items-center justify-center font-bold text-xs">
            <div className="bg-brand-gradient bg-clip-text text-transparent">{logo}</div>
          </div>
        </div>

        <div className="w-auto flex flex-row gap-4 text-sm md:gap-24 md:text-base text-brand-text-secondary">
          <TabItem value="about" title="Sobre" isSelected={currentTab === 'about'} />
          <TabItem value="contact" title="Contato" isSelected={currentTab === 'contact'} />
        </div>
      </Tabs.List>
    </Tabs.Root>
  );
}
