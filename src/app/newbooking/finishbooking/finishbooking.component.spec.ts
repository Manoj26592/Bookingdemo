import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishbookingComponent } from './finishbooking.component';

describe('FinishbookingComponent', () => {
  let component: FinishbookingComponent;
  let fixture: ComponentFixture<FinishbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishbookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
