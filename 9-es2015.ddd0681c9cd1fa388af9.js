(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+9my":function(s,a){s.exports='<span class="hljs-comment">/** No CSS for this example */</span>\n'},"+alR":function(s,a,n){"use strict";n.r(a),a.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'progress-example',\n  templateUrl: 'app.component.html',\n  styleUrls: ['app.component.scss'],\n})\nexport class AppComponent {\n  type = 'info';\n  value = 50;\n  striped = false;\n  animate = false;\n  height = 16;\n  foreground = '';\n  background = '';\n}\n"},"4IsC":function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'progress-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n  styleUrls: [<span class="hljs-string">\'./app.component.scss\'</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {}\n'},"5B/8":function(s,a,n){"use strict";n.r(a),a.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'progress-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {}\n"},"6Ntb":function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Progress configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Type:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"type"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"info"</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"success"</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"warning"</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"danger"</span>&gt;</span>Danger<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Progress:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">"0"</span> <span class="hljs-attr">max</span>=<span class="hljs-string">"100"</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"value"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"striped"</span> [<span class="hljs-attr">labelPosition</span>]=<span class="hljs-string">"\'before\'"</span>&gt;</span>Striped<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"striped"</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"animate"</span> [<span class="hljs-attr">labelPosition</span>]=<span class="hljs-string">"\'before\'"</span>&gt;</span>Animate\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Height:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">max</span>=<span class="hljs-string">"16"</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"height"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>Foreground color<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-color-picker</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"foreground"</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mtx-color-picker</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>Background color<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-color-picker</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"background"</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mtx-color-picker</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">type</span>]=<span class="hljs-string">"type"</span>\n              [<span class="hljs-attr">value</span>]=<span class="hljs-string">"value"</span>\n              [<span class="hljs-attr">striped</span>]=<span class="hljs-string">"striped"</span> [<span class="hljs-attr">animate</span>]=<span class="hljs-string">"animate"</span>\n              [<span class="hljs-attr">height</span>]=<span class="hljs-string">"height + \'px\'"</span>\n              [<span class="hljs-attr">foreground</span>]=<span class="hljs-string">"foreground"</span> [<span class="hljs-attr">background</span>]=<span class="hljs-string">"background"</span>&gt;</span>\n  {{height&gt;=14 ? value + \'%\' : \'\'}}\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n'},GRrf:function(s,a,n){"use strict";n.r(a),a.default='<mtx-progress [value]="40" foreground="#3949AB">40%</mtx-progress>\n<mtx-progress [value]="70" [striped]="true" foreground="#6D4C41">70%</mtx-progress>\n<mtx-progress [value]="60" [striped]="true" foreground="#880E4F" background="#FCE4EC">60%\n</mtx-progress>\n'},IS1p:function(s,a,n){"use strict";n.r(a),n.d(a,"ProgressModule",(function(){return C}));var t=n("sEIs"),l=n("M0ag"),e=n("EM62"),p=n("2kYt"),c=n("Pg5x");function o(s,a){if(1&s&&(e.Ub(0),e.Rb(1,"example-viewer",2),e.Tb()),2&s){const s=a.$implicit;e.Cb(1),e.nc("exampleData",s)}}function r(s,a){if(1&s&&(e.Ub(0),e.Hc(1,o,2,1,"ng-container",1),e.Tb()),2&s){const s=a.ngIf;e.Cb(1),e.nc("ngForOf",s.examples)}}let g=(()=>{class s{constructor(s){this.route=s}}return s.\u0275fac=function(a){return new(a||s)(e.Qb(t.a))},s.\u0275cmp=e.Kb({type:s,selectors:[["app-progress"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(s,a){1&s&&(e.Hc(0,r,2,1,"ng-container",0),e.jc(1,"async")),2&s&&e.nc("ngIf",e.kc(1,1,a.route.data))},directives:[p.t,p.s,c.a],pipes:[p.b],styles:[""]}),s})();var i=n("F1o0"),h=n("nIj0"),m=n("v9BS"),j=n("+Tre"),u=n("29Wa"),d=n("s4/8"),b=n("3EDn");function f(s,a){if(1&s){const s=e.Xb();e.Wb(0,"mat-checkbox",6),e.ec("ngModelChange",(function(a){return e.yc(s),e.ic().animate=a})),e.Jc(1,"Animate "),e.Vb()}if(2&s){const s=e.ic();e.nc("ngModel",s.animate)("labelPosition","before")}}const x={title:"Configurable progress",component:(()=>{class s{constructor(){this.type="info",this.value=50,this.striped=!1,this.animate=!1,this.height=16,this.foreground="",this.background=""}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=e.Kb({type:s,selectors:[["progress-example"]],decls:39,vars:16,consts:[[3,"ngModel","ngModelChange"],["value","info"],["value","success"],["value","warning"],["value","danger"],["min","0","max","100",3,"ngModel","ngModelChange"],[3,"ngModel","labelPosition","ngModelChange"],[3,"ngModel","labelPosition","ngModelChange",4,"ngIf"],["min","1","max","16",3,"ngModel","ngModelChange"],[3,"type","value","striped","animate","height","foreground","background"]],template:function(s,a){1&s&&(e.Wb(0,"h2"),e.Jc(1,"Progress configuration"),e.Vb(),e.Wb(2,"section"),e.Wb(3,"label"),e.Jc(4,"Type:"),e.Vb(),e.Wb(5,"mat-radio-group",0),e.ec("ngModelChange",(function(s){return a.type=s})),e.Wb(6,"mat-radio-button",1),e.Jc(7,"Info"),e.Vb(),e.Wb(8,"mat-radio-button",2),e.Jc(9,"Success"),e.Vb(),e.Wb(10,"mat-radio-button",3),e.Jc(11,"Warning"),e.Vb(),e.Wb(12,"mat-radio-button",4),e.Jc(13,"Danger"),e.Vb(),e.Vb(),e.Vb(),e.Wb(14,"section"),e.Wb(15,"label"),e.Jc(16,"Progress:"),e.Vb(),e.Wb(17,"mat-slider",5),e.ec("ngModelChange",(function(s){return a.value=s})),e.Vb(),e.Vb(),e.Wb(18,"section"),e.Wb(19,"mat-checkbox",6),e.ec("ngModelChange",(function(s){return a.striped=s})),e.Jc(20,"Striped"),e.Vb(),e.Hc(21,f,2,2,"mat-checkbox",7),e.Vb(),e.Wb(22,"section"),e.Wb(23,"label"),e.Jc(24,"Height:"),e.Vb(),e.Wb(25,"mat-slider",8),e.ec("ngModelChange",(function(s){return a.height=s})),e.Vb(),e.Vb(),e.Wb(26,"section"),e.Wb(27,"mat-form-field"),e.Wb(28,"mat-label"),e.Jc(29,"Foreground color"),e.Vb(),e.Wb(30,"mtx-color-picker",0),e.ec("ngModelChange",(function(s){return a.foreground=s})),e.Vb(),e.Vb(),e.Wb(31,"mat-form-field"),e.Wb(32,"mat-label"),e.Jc(33,"Background color"),e.Vb(),e.Wb(34,"mtx-color-picker",0),e.ec("ngModelChange",(function(s){return a.background=s})),e.Vb(),e.Vb(),e.Vb(),e.Wb(35,"h2"),e.Jc(36,"Result"),e.Vb(),e.Wb(37,"mtx-progress",9),e.Jc(38),e.Vb()),2&s&&(e.Cb(5),e.nc("ngModel",a.type),e.Cb(12),e.nc("ngModel",a.value),e.Cb(2),e.nc("ngModel",a.striped)("labelPosition","before"),e.Cb(2),e.nc("ngIf",a.striped),e.Cb(4),e.nc("ngModel",a.height),e.Cb(5),e.nc("ngModel",a.foreground),e.Cb(4),e.nc("ngModel",a.background),e.Cb(3),e.nc("type",a.type)("value",a.value)("striped",a.striped)("animate",a.animate)("height",a.height+"px")("foreground",a.foreground)("background",a.background),e.Cb(1),e.Lc(" ",a.height>=14?a.value+"%":"","\n"))},directives:[i.b,h.l,h.o,i.a,m.a,j.a,p.t,u.c,u.g,d.a,b.a],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:1em}.mat-checkbox[_ngcontent-%COMP%], .mat-form-field[_ngcontent-%COMP%]{margin-right:1rem}"]}),s})(),files:[{file:"app.component.html",content:n("6Ntb"),filecontent:n("Yk3m")},{file:"app.component.ts",content:n("UATY"),filecontent:n("+alR")},{file:"app.component.scss",content:n("gLVF"),filecontent:n("POz3")}]},k={title:"Custom Color",component:(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=e.Kb({type:s,selectors:[["progress-example"]],decls:6,vars:5,consts:[["foreground","#3949AB",3,"value"],["foreground","#6D4C41",3,"value","striped"],["foreground","#880E4F","background","#FCE4EC",3,"value","striped"]],template:function(s,a){1&s&&(e.Wb(0,"mtx-progress",0),e.Jc(1,"40%"),e.Vb(),e.Wb(2,"mtx-progress",1),e.Jc(3,"70%"),e.Vb(),e.Wb(4,"mtx-progress",2),e.Jc(5,"60%\n"),e.Vb()),2&s&&(e.nc("value",40),e.Cb(2),e.nc("value",70)("striped",!0),e.Cb(2),e.nc("value",60)("striped",!0))},directives:[b.a],styles:[""]}),s})(),files:[{file:"app.component.html",content:n("sqhv"),filecontent:n("GRrf")},{file:"app.component.ts",content:n("4IsC"),filecontent:n("5B/8")},{file:"app.component.scss",content:n("+9my"),filecontent:n("x04E")}]};let C=(()=>{class s{}return s.\u0275mod=e.Ob({type:s}),s.\u0275inj=e.Nb({factory:function(a){return new(a||s)},imports:[[l.a,t.i.forChild([{path:"",component:g,data:{examples:[x,k]}}])]]}),s})()},POz3:function(s,a,n){"use strict";n.r(a),a.default=".mat-radio-button {\n  margin: 1em;\n}\n\n.mat-checkbox,\n.mat-form-field {\n  margin-right: 1rem;\n}\n"},UATY:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'progress-example\'</span>,\n  templateUrl: <span class="hljs-string">\'app.component.html\'</span>,\n  styleUrls: [<span class="hljs-string">\'app.component.scss\'</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  <span class="hljs-keyword">type</span> = <span class="hljs-string">\'info\'</span>;\n  value = <span class="hljs-number">50</span>;\n  striped = <span class="hljs-literal">false</span>;\n  animate = <span class="hljs-literal">false</span>;\n  height = <span class="hljs-number">16</span>;\n  foreground = <span class="hljs-string">\'\'</span>;\n  background = <span class="hljs-string">\'\'</span>;\n}\n'},Yk3m:function(s,a,n){"use strict";n.r(a),a.default='<h2>Progress configuration</h2>\n\n<section>\n  <label>Type:</label>\n  <mat-radio-group [(ngModel)]="type">\n    <mat-radio-button value="info">Info</mat-radio-button>\n    <mat-radio-button value="success">Success</mat-radio-button>\n    <mat-radio-button value="warning">Warning</mat-radio-button>\n    <mat-radio-button value="danger">Danger</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <label>Progress:</label>\n  <mat-slider min="0" max="100" [(ngModel)]="value"></mat-slider>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="striped" [labelPosition]="\'before\'">Striped</mat-checkbox>\n  <mat-checkbox *ngIf="striped" [(ngModel)]="animate" [labelPosition]="\'before\'">Animate\n  </mat-checkbox>\n</section>\n\n<section>\n  <label>Height:</label>\n  <mat-slider min="1" max="16" [(ngModel)]="height"></mat-slider>\n</section>\n\n<section>\n  <mat-form-field>\n    <mat-label>Foreground color</mat-label>\n    <mtx-color-picker [(ngModel)]="foreground">\n    </mtx-color-picker>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Background color</mat-label>\n    <mtx-color-picker [(ngModel)]="background">\n    </mtx-color-picker>\n  </mat-form-field>\n</section>\n\n<h2>Result</h2>\n\n<mtx-progress [type]="type"\n              [value]="value"\n              [striped]="striped" [animate]="animate"\n              [height]="height + \'px\'"\n              [foreground]="foreground" [background]="background">\n  {{height>=14 ? value + \'%\' : \'\'}}\n</mtx-progress>\n'},gLVF:function(s,a){s.exports='<span class="hljs-selector-class">.mat-radio-button</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1em</span>;\n}\n\n<span class="hljs-selector-class">.mat-checkbox</span>,\n<span class="hljs-selector-class">.mat-form-field</span> {\n  <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">1rem</span>;\n}\n'},sqhv:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"40"</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">"#3949AB"</span>&gt;</span>40%<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"70"</span> [<span class="hljs-attr">striped</span>]=<span class="hljs-string">"true"</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">"#6D4C41"</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">striped</span>]=<span class="hljs-string">"true"</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">"#880E4F"</span> <span class="hljs-attr">background</span>=<span class="hljs-string">"#FCE4EC"</span>&gt;</span>60%\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n'},x04E:function(s,a,n){"use strict";n.r(a),a.default="/** No CSS for this example */\n"}}]);