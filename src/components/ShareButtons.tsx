"use client";
import { useEffect } from 'react';

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  useEffect(() => {
    // Load AddToAny script
    const script = document.createElement('script');
    script.src = 'https://static.addtoany.com/menu/page.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex gap-3">
      <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
        <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
        <a className="a2a_button_facebook"></a>
        <a className="a2a_button_email"></a>
        <a className="a2a_button_x"></a>
        <a className="a2a_button_linkedin"></a>
      </div>
    </div>
  );
} 