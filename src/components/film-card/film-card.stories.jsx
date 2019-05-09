import React from 'react';

import { storiesOf } from '@storybook/react';

import FilmCard from './film-card';

storiesOf('Components|FilmCard', module).add('Default', () => {
  return (
    <div style={{ padding: '32px', backgroundColor: '#101010' }}>
      <div style={{ width: '280px' }}>
        <FilmCard src={false} name={'Forsage'} />
      </div>
    </div>
  );
});
