import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCryptosComponent } from './top-cryptos.component';

describe('TopCryptosComponent', () => {
  let component: TopCryptosComponent;
  let fixture: ComponentFixture<TopCryptosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopCryptosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopCryptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
