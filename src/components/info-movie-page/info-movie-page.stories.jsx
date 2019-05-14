import React from 'react';

import { storiesOf } from '@storybook/react';

import InfoMoviePage from './info-movie-page';

const data = {
  id: 0,
  name: 'Blazing Saddles',
  releaseYear: '1974',
  format: 'VHS',
  stars:
    'Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn'
};

storiesOf('Components|InfoMoviePage', module).add('Default', () => {
  return (
    <InfoMoviePage
      name={data.name}
      releaseYear={data.releaseYear}
      format={data.format}
      stars={data.stars}
      src={false}
    />
  );
});
