import { entries, kebabCase } from 'lodash';
import { CSSProperties } from 'react';

const asCssString = ([key, value]: [string, unknown]) =>
  `${kebabCase(key)}:${value}`;

export const toCssString = (style: CSSProperties) =>
  entries(style).map(asCssString).join(';');
