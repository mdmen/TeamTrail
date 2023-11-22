'use client';

import { useState } from 'react';
import {
  AutoComplete,
  type AutoCompleteCompleteEvent,
} from 'primereact/autocomplete';
import { Search } from 'lucide-react';
import { cn } from '@/lib/helpers';

interface City {
  label: string;
  code: string;
  items: { label: string; value: string }[];
}

interface GlobalSearchProps {
  rounded?: boolean;
  onFocus?(event: React.FocusEvent): void;
  onBlur?(event: React.FocusEvent): void;
}

export function GlobalSearchInput({
  rounded,
  onFocus = () => {},
  onBlur = () => {},
}: GlobalSearchProps) {
  const [selectedCity, setSelectedCity] = useState<City>();
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const groupedCities: City[] = [
    {
      label: 'Germany',
      code: 'DE',
      items: [
        { label: 'Berlin', value: 'Berlin' },
        { label: 'Frankfurt', value: 'Frankfurt' },
        { label: 'Hamburg', value: 'Hamburg' },
        { label: 'Munich', value: 'Munich' },
      ],
    },
    {
      label: 'USA',
      code: 'US',
      items: [
        { label: 'Chicago', value: 'Chicago' },
        { label: 'Los Angeles', value: 'Los Angeles' },
        { label: 'New York', value: 'New York' },
        { label: 'San Francisco', value: 'San Francisco' },
      ],
    },
    {
      label: 'Japan',
      code: 'JP',
      items: [
        { label: 'Kyoto', value: 'Kyoto' },
        { label: 'Osaka', value: 'Osaka' },
        { label: 'Tokyo', value: 'Tokyo' },
        { label: 'Yokohama', value: 'Yokohama' },
      ],
    },
  ];

  const groupedItemTemplate = (item: City) => {
    return (
      <div className="align-items-center flex">
        img
        <div>{item.label}</div>
      </div>
    );
  };

  const search = (event: AutoCompleteCompleteEvent) => {
    let query = event.query;
    let _filteredCities: City[] = [];

    for (let country of groupedCities) {
      let filteredItems = country.items.filter(
        (item) => item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1,
      );

      if (filteredItems && filteredItems.length) {
        _filteredCities.push({ ...country, ...{ items: filteredItems } });
      }
    }

    setFilteredCities(_filteredCities);
  };

  return (
    <div className="relative w-full">
      <AutoComplete
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        onFocus={(e) => onFocus(e)}
        onBlur={(e) => onBlur(e)}
        suggestions={filteredCities}
        completeMethod={search}
        field="label"
        optionGroupLabel="label"
        optionGroupChildren="items"
        optionGroupTemplate={groupedItemTemplate}
        placeholder="Search..."
        className={cn(
          'w-full [&_.p-autocomplete-input]:w-full [&_.p-autocomplete-input]:pl-10',
          {
            '[&_.p-autocomplete-input]:rounded-full': rounded,
          },
        )}
      />
      <div className="pointer-events-none absolute left-0 top-0 grid aspect-square h-full">
        <Search size="1.5rem" className="m-auto text-[--surface-400]" />
      </div>
    </div>
  );
}
