/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react';
import Layout from './src/components/layout';

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
