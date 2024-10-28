import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleportsComponent } from './teleports.component';

describe('TeleportsComponent', () => {
  let component: TeleportsComponent;
  let fixture: ComponentFixture<TeleportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeleportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeleportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
