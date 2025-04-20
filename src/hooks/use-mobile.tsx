import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    // Set initial value
    setMatches(mediaQuery.matches);
    
    // Create event listener for when the media query changes
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    
    // Add event listener
    mediaQuery.addEventListener("change", handler);
    
    // Clean up function to remove event listener
    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, [query]); // Only run if the query changes
  
  return matches;
}
