import { trigger, state, style, transition, animate } from '@angular/animations';

export const expandCollapseAnimation = trigger('expandCollapse', [
  state('collapsed', style({ height: '0px', display: 'none' })),
  state('expanded', style({ height: '*', display: 'block' })),
  transition('collapsed <=> expanded', [
    animate('300ms ease-in-out')
  ]),
]);

export const rotateAnimation = trigger('rotateIcon', [
  state('normal', style({ transform: 'rotate(0deg)' })),
  state('rotated', style({ transform: 'rotate(180deg)' })),
  transition('normal <=> rotated', [
    animate('300ms ease-in-out')
  ]),
]);
