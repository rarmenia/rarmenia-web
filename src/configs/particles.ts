import { IOptions, RecursivePartial } from 'tsparticles-engine';

export const Links: RecursivePartial<IOptions> = {
  style: {
    position: 'absolute',
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: { min: 0.3, max: 0.7 },
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 3.5 },
    },
  },
  detectRetina: true,
};
