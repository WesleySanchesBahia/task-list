import { Component, ElementRef, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-item',
  imports: [],
  templateUrl: './input-item.component.html',
  styleUrl: './input-item.component.scss',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputItemComponent),
      multi: true,
    }
  ]
})
export class InputItemComponent  implements ControlValueAccessor {
  @ViewChild("inputElement", { static: true }) inputElement!:ElementRef<any>
  constructor(){

  }
  value: string = '';
  inputId: string = 'custom-input';
  label: string = 'Custom Input';
  type: string = 'text';

  private onChange = (value: any) => {};
  public onTouched = () => {};

  // Função chamada ao alterar o valor
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }

  // Métodos necessários para o ControlValueAccessor
  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  focus(){
    this.inputElement.nativeElement.focus();
  }
}
