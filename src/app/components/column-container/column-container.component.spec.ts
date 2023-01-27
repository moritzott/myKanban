import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnContainerComponent } from './column-container.component';

describe('ColumnContainerComponent', () => {
  let component: ColumnContainerComponent;
  let fixture: ComponentFixture<ColumnContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
