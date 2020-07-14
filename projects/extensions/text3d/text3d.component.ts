import {
  Component,
  Input,
  ContentChild,
  TemplateRef,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'mtx-text3d',
  exportAs: 'mtxText3d',
  host: {
    'class': 'mtx-text3d',
    '[style.transform]': 'transform',
  },
  templateUrl: './text3d.component.html',
  styleUrls: ['./text3d.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxText3dComponent {
  @ContentChild(TemplateRef, { static: false }) template: TemplateRef<any>;

  @Input() text = '';

  @Input() num = 20;

  @Input() rotateX = 60;
  @Input() rotateY = 0;
  @Input() rotateZ = 0;

  arr = [];

  get transform() {
    return `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`;
  }

  constructor() {
    for (let i = 1; i <= this.num; i++) {
      this.arr.push(i);
    }
  }
}
