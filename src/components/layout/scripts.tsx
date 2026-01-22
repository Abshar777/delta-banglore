'use client';
import { useEffect } from 'react';

const Scripts = () => {
  useEffect(() => {
    const scriptGroups = [
      // ✅ Core libs loaded first
      [
        '/assets/vendor/jquery/jquery.min.js',
        '/assets/vendor/gsap/gsap.min.js',
      ],
      // ✅ Animation & plugin scripts (parallel load)
      [
        '/assets/vendor/gsap/ScrollToPlugin.min.js',
        '/assets/vendor/gsap/ScrollTrigger.min.js',
        '/assets/vendor/lenis.min.js',
      ],
      // ✅ Utility scripts
      [
        '/assets/vendor/isotope/imagesloaded.pkgd.min.js',
        '/assets/vendor/isotope/isotope.pkgd.min.js',
        '/assets/vendor/isotope/packery-mode.pkgd.min.js',
      ],
      // ✅ UI components
      [
        '/assets/vendor/fancybox/js/fancybox.umd.js',
        '/assets/vendor/swiper/js/swiper-bundle.min.js',
      ],
      // ✅ Your main theme file last
      ['/assets/js/theme.js'],
    ];

    const loadedScripts = new Set<string>();

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (loadedScripts.has(src) || document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = true; // non-blocking
        script.defer = true;
        script.onload = () => {
          loadedScripts.add(src);
          resolve();
        };
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };

    const loadGroups = async () => {
      for (const group of scriptGroups) {
        await Promise.all(group.map(src => loadScript(src)));
      }
      console.log('✅ All scripts loaded (optimized)');
    };

    loadGroups();

    return () => {
      loadedScripts.forEach(src => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) script.remove();
      });
    };
  }, []);

  return null;
};

export default Scripts;
