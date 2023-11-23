import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDitaleUserComponent } from './book-ditale-user.component';

describe('BookDitaleUserComponent', () => {
  let component: BookDitaleUserComponent;
  let fixture: ComponentFixture<BookDitaleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDitaleUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDitaleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
