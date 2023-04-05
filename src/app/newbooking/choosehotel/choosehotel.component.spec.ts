import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosehotelComponent } from './choosehotel.component';

describe('ChoosehotelComponent', () => {
  let component: ChoosehotelComponent;
  let fixture: ComponentFixture<ChoosehotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosehotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosehotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
