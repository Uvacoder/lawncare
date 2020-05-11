import React from 'react';
import Layout from './src/components/layout';
import 'lazysizes'

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};


export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `This application has been updated. ` +
        `Reload to display the latest version?`
    )
  
    if (answer === true) {
      window.location.reload()
    }
  }

export const registerServiceWorker = () => true

