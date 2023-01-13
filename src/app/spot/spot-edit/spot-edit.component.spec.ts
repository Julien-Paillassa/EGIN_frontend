import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotEditComponent } from './spot-edit.component';

describe('SpotEditComponent', () => {
  let component: SpotEditComponent;
  let fixture: ComponentFixture<SpotEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
