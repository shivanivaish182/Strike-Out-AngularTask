import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

export const AngularAnimation = [

  trigger('colorState', [
      state('true', style({opacity: '1', background: '#EEF3EE'})),
      transition('0 <=> 1', animate('200ms ease'))
    ]),   
    trigger("openClose", [
      state("open",style({color: "#a5a1b4"})),
      state("inInputState", style({})),
      state("inChkboxState", style({})),
      state("closed", style({})),    
    ]),
   trigger('rotatedState', [
    state('default', style({ transform: 'rotate(0deg)',})),
    state('rotated', style({ transform: 'rotate(180deg)' , })),
    state('scale', style({ transform: 'scale(0.8) rotate(180deg)', })),
    state('scaleBig', style({ transform: 'scale(1.0) rotate(180deg)',})),
    state('scaleSmall', style({ transform: 'scale(0.2)',})),
    state('scaleLarger', style({ transform: 'scale(1.3)',})),

    transition('rotated => default', animate('1s ease-out')),
    transition('default => rotated', animate('0.5s ease-in')),
    transition('rotated => scale', animate('0.2s ease-out')),
    transition('scale => scaleBig', animate('0.1s ease-out')),
    transition('scaleSmall => scaleLarger', animate('0.4s ease-out')),
    transition('scaleLarger => default', animate('0.4s ease-out'))
        ]),
    trigger('textOpacity', [
    state('normal', style({ opacity: '1',})),
    state('light', style({ opacity: '0.6', })),
      transition('normal => light', animate('1.3s'))
    ])
];
