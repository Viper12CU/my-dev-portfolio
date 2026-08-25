declare module "isotope-layout" {
  interface IsotopeOptions {
    itemSelector?: string;
    layoutMode?: string;
    filter?: string;
    sortBy?: string;
  }
  export default class Isotope {
    constructor(element: HTMLElement, options: IsotopeOptions);
    arrange(options: IsotopeOptions): void;
  }
}

declare module "imagesloaded" {
  function imagesLoaded(
    element: HTMLElement | NodeListOf<Element>,
    callback: () => void
  ): void;
  export default imagesLoaded;
}

declare module "typed.js" {
  interface TypedOptions {
    strings?: string[];
    loop?: boolean;
    typeSpeed?: number;
    backSpeed?: number;
    backDelay?: number;
  }
  export default class Typed {
    constructor(element: HTMLElement, options: TypedOptions);
  }
}

declare module "swiper" {
  interface SwiperOptions {
    loop?: boolean;
    speed?: number;
    autoplay?: { delay: number };
    slidesPerView?: string | number;
    pagination?: {
      el: string;
      type: string;
      clickable: boolean;
    };
    modules?: unknown[];
  }
  export default class Swiper {
    constructor(element: HTMLElement, options: SwiperOptions);
  }
}

declare module "swiper/modules" {
  export const Navigation: unknown;
  export const Pagination: unknown;
  export const Autoplay: unknown;
}

declare module "aos" {
  interface AOSOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    offset?: number;
    delay?: number;
    anchorPlacement?: string;
    rootMargin?: string;
    throttleDelay?: number;
    debounceDelay?: number;
    disableMutationObserver?: boolean;
    disableFocus?: boolean;
    startEvent?: string;
    animatedClassName?: string;
    initClassName?: string;
    useClassNames?: boolean;
    disableMobile?: boolean;
  }
  const AOS: {
    init(options?: AOSOptions): void;
    refresh(): void;
    refreshHard(): void;
  };
  export default AOS;
}

declare module "@srexi/purecounterjs" {
  export default class PureCounter {
    constructor();
  }
}
