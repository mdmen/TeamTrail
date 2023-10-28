'use client';

import { useRef, useState } from 'react';
import { useCurrentLocale, useChangeLocale } from '@/locales/client';
import {
  Button,
  ListBox,
  OverlayPanel,
  type ListBoxChangeEvent,
} from '@/components/ui';
import { Languages } from '@/components/icons';
import type { Locale } from '@/types';

interface Language {
  name: string;
  code: Locale;
}

const languages: Language[] = [
  { name: 'English', code: 'en' },
  { name: 'Русский', code: 'ru' },
];

const localeToCoutryCodeMap: Record<Locale, string> = {
  en: 'gb',
  ru: 'ru',
};

const languageTemplate = ({ name, code }: Language) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`flag ${localeToCoutryCodeMap[code]}`}></div>
      <div>{name}</div>
    </div>
  );
};

export function LocaleSwitcher() {
  const [isPanelVisible, setPanelVisible] = useState(false);
  const panelRef = useRef<OverlayPanel | null>(null);
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <>
      <Button
        rounded
        raised
        severity="secondary"
        aria-label="Choose language"
        aria-haspopup="listbox"
        aria-expanded={isPanelVisible}
        icon={<Languages />}
        onClick={(e) => {
          panelRef.current?.toggle(e);
        }}
      />
      <OverlayPanel
        ref={panelRef}
        onShow={() => setPanelVisible(true)}
        onHide={() => setPanelVisible(false)}
        className="[&>.p-overlaypanel-content]:px-0"
      >
        <ListBox
          value={languages.find(({ code }) => code === currentLocale)}
          options={languages}
          optionLabel="name"
          className="w-full border-none"
          itemTemplate={languageTemplate}
          onChange={({ value }: ListBoxChangeEvent) => {
            panelRef.current?.hide();

            if (!value || value === currentLocale) return;

            changeLocale(value.code);
          }}
        />
      </OverlayPanel>
    </>
  );
}
