import React, { useEffect } from 'react';
import type { Preview } from '@storybook/nextjs-vite';
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo'
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;
      
      useEffect(() => {
        const htmlTag = document.documentElement;
        const bodyTag = document.body;
        
        if (theme === 'dark') {
          htmlTag.classList.add('dark');
          bodyTag.style.backgroundColor = '#0a0a0a';
          bodyTag.style.color = '#ededed';
        } else {
          htmlTag.classList.remove('dark');
          bodyTag.style.backgroundColor = '#ffffff';
          bodyTag.style.color = '#171717';
        }
      }, [theme]);

      return <Story />;
    },
  ],
};

export default preview;
