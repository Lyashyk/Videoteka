import React from 'react';

import { storiesOf } from '@storybook/react';

import ButtonIcon from './button-icon';
import IconTrash from '../icons/iconTrash/icon-trash';

storiesOf('Components|ButtonIcon', module).add('Default', () => {
  return <ButtonIcon icon={<IconTrash />} />;
});
