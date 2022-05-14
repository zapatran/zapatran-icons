import React, { ButtonHTMLAttributes, useEffect, useRef, useState } from 'react';

import * as outlineIcons from './components/outline';
import * as solidIcons from './components/solid';

const Icon = ({ onClick, children }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    onClick={onClick}
    className="p-2 border border-purple-300 rounded hover:bg-purple-100 transition-colors trasition duration-200"
  >
    <span className="">{children}</span>
  </button>
);

export const useNotification = () => {
  const [alertVisible, toggleAlert] = useState(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = (icon: string) => () => {
    timeout.current && clearTimeout(timeout.current);
    toggleAlert(false);
    const importString = `import { ${icon} } from '@zapatran/icons'`;
    navigator.clipboard.writeText(importString).then(() => toggleAlert(true));
  };

  useEffect(() => {
    if (alertVisible) {
      timeout.current = setTimeout(() => toggleAlert(false), 3000);
    }
    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, [alertVisible]);

  return {
    handleCopy,
    alertVisible,
  };
};

export const SolidIcons = () => {
  const { handleCopy, alertVisible } = useNotification();
  return (
    <>
      <div>
        {alertVisible && (
          <p className="bg-green-100 border border-green-600 text-green-800 w-56 mx-auto p-3 rounded-lg">
            Import copied
          </p>
        )}
      </div>
      <div className="flex flex-wrap gap-4">
        {Object.keys(solidIcons).map(icon => {
          const SolidIcon = solidIcons[icon as keyof typeof solidIcons];
          return (
            <Icon key={icon} onClick={handleCopy(icon)}>
              <SolidIcon />
            </Icon>
          );
        })}
      </div>
    </>
  );
};

export const OutlineIcons = () => {
  const { handleCopy, alertVisible } = useNotification();
  return (
    <>
      <div>
        {alertVisible && (
          <p className="bg-green-100 border border-green-600 text-green-800 w-56 mx-auto p-3 rounded-lg">
            Import copied
          </p>
        )}
      </div>
      <div className="flex flex-wrap gap-4">
        {Object.keys(outlineIcons).map(icon => {
          const OutlineIcon = outlineIcons[icon as keyof typeof outlineIcons];
          return (
            <Icon key={icon} onClick={handleCopy(icon)}>
              <OutlineIcon />
            </Icon>
          );
        })}
      </div>
    </>
  );
};

