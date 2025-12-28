import { useCallback, useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Lightbox from './components/Lightbox/Lightbox';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import SkipLink from './components/SkipLink/SkipLink';
import HomePage from './pages/HomePage/HomePage';
import WorkPage from './pages/WorkPage/WorkPage';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const headerRef = useRef(null);
  const lastFocusedElementRef = useRef(null);
  const lightboxBackdropRef = useRef(null);
  const lightboxContentRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [lightboxClosing, setLightboxClosing] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openLightbox = (item) => {
    lastFocusedElementRef.current = document.activeElement;
    setLightboxClosing(false);
    setLightbox(item);
  };

  const closeLightbox = useCallback(() => {
    if (!lightbox || lightboxClosing) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const backdrop = lightboxBackdropRef.current;
    const content = lightboxContentRef.current;

    const finishClose = () => {
      setLightbox(null);
      setLightboxClosing(false);
      if (
        lastFocusedElementRef.current &&
        typeof lastFocusedElementRef.current.focus === 'function'
      ) {
        lastFocusedElementRef.current.focus();
      }
    };

    if (prefersReducedMotion || !backdrop || !content) {
      finishClose();
      return;
    }

    setLightboxClosing(true);
    gsap.killTweensOf([backdrop, content]);
    gsap
      .timeline({ onComplete: finishClose })
      .to(
        content,
        {
          autoAlpha: 0,
          y: 12,
          scale: 0.98,
          duration: 0.25,
          ease: 'power2.out'
        },
        0
      )
      .to(
        backdrop,
        {
          autoAlpha: 0,
          duration: 0.2,
          ease: 'power2.out'
        },
        0
      );
  }, [lightbox, lightboxClosing]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const root = document.documentElement;
    document.body.classList.add('loaded');

    let rafId = null;

    const updateScrollState = () => {
      rafId = null;
      const scrollTop = window.scrollY || window.pageYOffset;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;

      root.style.setProperty('--scroll-progress', progress.toString());

      if (prefersReducedMotion) {
        root.style.setProperty('--bg-shift', '0px');
        root.style.setProperty('--hero-shift', '0px');
        root.style.setProperty('--hero-shift-soft', '0px');
      } else {
        const bgShift = Math.min(scrollTop * 0.08, 120);
        const heroShift = Math.min(scrollTop * 0.06, 80);
        root.style.setProperty('--bg-shift', `${-bgShift}px`);
        root.style.setProperty('--hero-shift', `${-heroShift}px`);
        root.style.setProperty('--hero-shift-soft', `${-heroShift * 0.6}px`);
      }

      if (headerRef.current) {
        headerRef.current.classList.toggle('is-scrolled', scrollTop > 8);
      }
    };

    const onScroll = () => {
      if (rafId !== null) {
        return;
      }
      rafId = window.requestAnimationFrame(updateScrollState);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateScrollState();

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      gsap.set('.reveal', { autoAlpha: 1, y: 0 });
      return;
    }

    const parseDelay = (element) => {
      const raw = window
        .getComputedStyle(element)
        .getPropertyValue('--delay')
        .trim();

      if (!raw) {
        return 0;
      }

      if (raw.endsWith('ms')) {
        return Number.parseFloat(raw) / 1000;
      }

      if (raw.endsWith('s')) {
        return Number.parseFloat(raw);
      }

      const numeric = Number.parseFloat(raw);
      return Number.isNaN(numeric) ? 0 : numeric;
    };

    const ctx = gsap.context(() => {
      const revealItems = gsap.utils.toArray('.reveal');

      revealItems.forEach((element) => {
        const delay = parseDelay(element);
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            delay,
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [location.pathname]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.querySelector(location.hash);
        if (target) {
          target.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            block: 'start'
          });
          return;
        }
      }

      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });

    setMenuOpen(false);
    setLightbox(null);
    setLightboxClosing(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!lightbox) {
      document.body.classList.remove('lightbox-open');
      return;
    }

    document.body.classList.add('lightbox-open');
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('lightbox-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightbox, closeLightbox]);

  useEffect(() => {
    if (!lightbox) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const backdrop = lightboxBackdropRef.current;
    const content = lightboxContentRef.current;

    if (!backdrop || !content) {
      return;
    }

    gsap.killTweensOf([backdrop, content]);

    if (prefersReducedMotion) {
      gsap.set(backdrop, { autoAlpha: 1 });
      gsap.set(content, { autoAlpha: 1, y: 0, scale: 1 });
      return;
    }

    gsap.set(backdrop, { autoAlpha: 0 });
    gsap.set(content, { autoAlpha: 0, y: 20, scale: 0.98 });
    gsap.to(backdrop, { autoAlpha: 1, duration: 0.25, ease: 'power2.out' });
    gsap.to(content, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: 'power3.out'
    });
  }, [lightbox]);

  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <Header
        ref={headerRef}
        menuOpen={menuOpen}
        onToggleMenu={toggleMenu}
        onCloseMenu={closeMenu}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage onOpenLightbox={openLightbox} />} />
      </Routes>

      <Lightbox
        lightbox={lightbox}
        onClose={closeLightbox}
        backdropRef={lightboxBackdropRef}
        contentRef={lightboxContentRef}
      />

      <Footer />
    </>
  );
};

export default App;
