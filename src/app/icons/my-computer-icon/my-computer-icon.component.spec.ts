import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComputerIconComponent } from './my-computer-icon.component';

describe('MyComputerIconComponent', () => {
  let component: MyComputerIconComponent;
  let fixture: ComponentFixture<MyComputerIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComputerIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComputerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
