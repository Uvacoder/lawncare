import React, { useState } from "react";


const TransitionProvider = ({ location, children }) => {
  return (
    <TransitionProvider
      location={location}
      mode="immediate"
      enter={{
        opacity: .5,
        transform: "translate3d(0,20vh,0) scale3d(1, 1, 1) rotate(0deg)",
        config: {
          mass: 1,
          tension: 210,
          friction: 20,
          clamp: true
        },
        onRest: () => {
          console.log("Hello, World!");
        }
      }}
      usual={{
        opacity: 1,
        transform: "translate3d(0vh,0vh,0) scale3d(1, 1, 1) rotate(0deg)"
      }}
      leave={{
        opacity: 0,
        transform: "translate3d(0vh,0vh,0) scale3d(2, 2, 1) rotate(180deg)",
        config: {
          duration: 1000
        }
      }}
    >

        {children}

    </TransitionProvider>
  );
};

export default TransitionProvider;