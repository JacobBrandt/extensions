import { TemplateRef } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { Observable } from 'rxjs';

/**
 * Grid
 */
export interface MtxGridColumn {
  field: string;
  header?: string | Observable<string>;
  hide?: boolean;
  disabled?: boolean;
  pinned?: 'left' | 'right';
  left?: string;
  right?: string;
  width?: string;
  resizable?: boolean;
  minWidth?: number;
  maxWidth?: number;
  sortable?: boolean | string;
  sortProp?: MtxGridColumnSortProp;
  type?: MtxGridColumnType;
  typeParameter?: MtxGridColumnTypeParameter;
  tag?: MtxGridColumnTag;
  buttons?: MtxGridColumnButton[];
  formatter?: (rowData: any, colDef?: MtxGridColumn) => void;
  cellTemplate?: TemplateRef<any> | null;
  showExpand?: boolean;
  description?: string;
  summary?: ((data: any[], colDef?: MtxGridColumn) => void) | string;
  class?: string;
}

/**
 * Column type
 */

export declare type MtxGridColumnType =
  | 'tag'
  | 'button'
  | 'link'
  | 'image'
  | 'boolean'
  | 'number'
  | 'currency'
  | 'percent'
  | 'date';

/**
 * Column type parameter
 */
export interface MtxGridColumnTypeParameter {
  currencyCode?: string;
  display?: string | boolean;
  digitsInfo?: string;
  format?: string;
  locale?: string;
  timezone?: string;
}

/**
 * Column sort properties
 */
export interface MtxGridColumnSortProp {
  arrowPosition?: 'before' | 'after';
  disableClear?: boolean;
  id?: string;
  start?: 'asc' | 'desc';
}

/**
 * Tag
 */
export interface MtxGridColumnTag {
  [key: number]: MtxGridColumnTagValue;
  [key: string]: MtxGridColumnTagValue;
}

export interface MtxGridColumnTagValue {
  text?: string;
  color?: string;
}

/**
 * Button
 */
export interface MtxGridColumnButton {
  type?: 'basic' | 'icon';
  text?: string | Observable<string>;
  icon?: string;
  color?: 'primary' | 'accent' | 'warn';
  class?: string;
  click?: (record: any) => void;
  pop?: boolean;
  popTitle?: string | Observable<string>;
  popDescription?: string | Observable<string>;
  popOkColor?: '' | 'primary' | 'accent' | 'warn';
  popOkText?: string | Observable<string>;
  popCloseColor?: '' | 'primary' | 'accent' | 'warn';
  popCloseText?: string | Observable<string>;
  children?: MtxGridColumnButton[];
  iif?: (record: any) => boolean;
  tooltip?: string | Observable<string>;
  disabled?: boolean;
}

/**
 * Column selection
 */
export interface MtxGridColumnSelectionItem {
  label: string | Observable<string>;
  field: string;
  show?: boolean;
  hide?: boolean;
  disabled?: boolean;
}

/**
 * Cell template
 */
export interface MtxGridCellTemplate {
  [key: string]: TemplateRef<any>;
}

/**
 * Row selection formatter
 */
export interface MtxGridRowSelectionFormatter {
  disabled?: (rowData: any, index?: number) => boolean;
  hideCheckbox?: (rowData: any, index?: number) => boolean;
}

/**
 * Row class formatter
 */
export interface MtxGridRowClassFormatter {
  [className: string]: (rowData: any, index?: number) => boolean;
}

/**
 * Column menu component
 */
export interface MtxGridColumnMenu {
  menuPanel: MatMenu;
  menuTrigger: MatMenuTrigger;
}
