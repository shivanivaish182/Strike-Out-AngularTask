import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from "@angular/core";
import { AngularAnimation } from "../animation/animation";

@Component({
  selector: "add-task",
  templateUrl: "./add-task.component.html",
  animations: [AngularAnimation]
})
export class AddTaskComponent implements OnInit {
  @Input() inputTag: string;
  show: boolean = true;
  hideLabel: boolean = false;
  currentState: string = "open";
  isChecked: boolean = false;
  isInputOpen: boolean = true;
  isChkBoxOpen: boolean = false;
  isCrossChkBoxShow:boolean=false;
  isAddIconShow:boolean=true;
 state: string = 'scaleSmall';
 colorState:boolean = false;
 imgSrc :string="https://raw.githubusercontent.com/shivanivaish182/Angular2/master/uncheck.png";
 currentTextState ='normal';
 removeBg:boolean = false;
 
  constructor() {}
  ngOnInit() {   
  }
  onKeypress($event) {
    this.currentState = "inChkboxState";
     if(this.state === 'scaleSmall'){
       setTimeout(() => {
         debugger;
         this.state = 'scaleLarger'
    }, 300);
    setTimeout(() => {
         debugger;
         this.state = 'default'
    }, 800);
     }
     else{
       this.state = 'default';
     }
    this.inputTag = $event.currentTarget.value;  
  }

  onCheckBoxChange() {
    debugger;
    this.isChkBoxOpen = true;
    this.isCrossChkBoxShow = true;
     this.imgSrc="https://raw.githubusercontent.com/shivanivaish182/Angular2/master/checkbox-1.png";

      if(this.currentTextState == 'normal'){
         this.currentTextState = 'light';
       }

     if(this.state === 'default'){
        this.addbackgroundoninput();
       this.state = 'rotated';
       
       setTimeout(() => {
         debugger;
         this.state = 'scale'
    }, 1000);

    setTimeout(() => {
         debugger;
         this.state = 'scaleBig'      
    }, 1500);
     }
     else{
       this.state = 'default';
     }
  }

  focus()
  {
     this.addbackgroundoninput();
    this.isAddIconShow = false;
  }

  focusOut()
  {
    if(this.inputTag  == undefined || this.inputTag == "" || this.inputTag?.length == 0 )
    {
       this.isAddIconShow = true;
    }
    else{
       this.isAddIconShow = false;
    }
  }
   addbackgroundoninput(){
      console.log(this.colorState);
      this.colorState = true;    
    setTimeout(() => {
         console.log(this.colorState);
    this.colorState = false;
    this.removeBg =true;
    setTimeout(() => {
    this.removeBg =false;
    }, 500);
    }, 500);
}
}
