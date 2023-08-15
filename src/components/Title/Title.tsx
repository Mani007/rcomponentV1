import React from 'react';
import { useEffect } from 'react';
// Custom hook for setting up the page title
function useTitle(title: string): void {
  useEffect(() => {
    //const prevTitle = document.title;
    document.title = title; // this is needed for setting the new title

    return () => {
      //document.title = prevTitle;
      document.title = title;
      
    };
  }, [title]);
};

export default function Title(): JSX.Element {
  useTitle('New Title Test');

  return (<div>My Component with new title</div>);
}