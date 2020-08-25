import { ReactNode } from "react";
import React from "react";

import { Navigation } from "./Navigation";

export const Layout = ({ children }: { children?: ReactNode }) => (
  <>
    <div className={"app"}>
      <Navigation />
      <main>{children}</main>
    </div>

    <style>
      {`
            .app {
                display: flex;
                flex-direction: column;
                min-height: 100%;
                max-width: 1500px;
                margin: 0 auto;
                background: #cccccc;    
            }       
            
            main {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
            }     
          `}
    </style>
    <style jsx global>{`
      html,
      body,
      #__next {
        height: 100%;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
          Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </>
);
