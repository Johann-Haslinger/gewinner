import { useEffect } from "react";

export const useDisableScrollAndZoom = () => {
  useEffect(() => {
    // Funktion zum Deaktivieren des Scrollens
    const preventScroll = (event: Event) => {
      event.preventDefault();
    };

    // Funktion zum Deaktivieren des Zoomens
    const preventZoom = (event: WheelEvent | TouchEvent) => {
      if ((event as WheelEvent).ctrlKey) {
        event.preventDefault();
      }
    };

    // Scroll- und Zoom-Ereignisse blockieren
    document.addEventListener("wheel", preventScroll, { passive: false });
    document.addEventListener("touchmove", preventScroll, { passive: false });
    document.addEventListener("gesturestart", preventZoom as any, { passive: false });
    document.addEventListener("gesturechange", preventZoom as any, { passive: false });

    // Cleanup: Ereignisse entfernen
    return () => {
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("gesturestart", preventZoom as any);
      document.removeEventListener("gesturechange", preventZoom as any);
    };
  }, []);
};

