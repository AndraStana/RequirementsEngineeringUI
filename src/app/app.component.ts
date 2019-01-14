import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'Application';

 

 constructor(private elementRef: ElementRef,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  iconRegistry.addSvgIcon(
      'logout',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logout.svg'));
}


ngAfterViewInit(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#e5e5e5';
}




}
