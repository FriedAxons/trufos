import { useEffect, useState } from 'react';

import { RendererEventService } from '@/services/event/renderer-event-service';
import { GithubIcon } from '@/components/icons';
import { SettingsModal } from '@/components/shared/settings/SettingsModal';
import { Divider } from '@/components/shared/Divider';
import { SidebarFooter } from '@/components/ui/sidebar';

export function FooterBar() {
  const [appVersion, setAppVersion] = useState<string>(undefined);

  useEffect(() => {
    RendererEventService.instance.getAppVersion().then(setAppVersion);
  }, []);

  return (
    <SidebarFooter className="mt-auto">
      <Divider />
      <div className="flex items-center justify-between">
        {/* Version text on the left */}
        <span className="text-xs text-gray-500">{appVersion ?? null}</span>

        <div className="flex items-center gap-1">
          {/* Icons on the right */}
          {/* GitHub Icon */}
          <a href="https://github.com/EXXETA/trufos" target="_blank" rel="noopener noreferrer">
            <GithubIcon /> {/* Adjust the size as needed */}
          </a>
          <SettingsModal />
        </div>
      </div>
    </SidebarFooter>
  );
}
