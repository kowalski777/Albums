import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaAlbumsComponent } from './tarjeta-albums.component';

describe('TarjetaAlbumsComponent', () => {
  let component: TarjetaAlbumsComponent;
  let fixture: ComponentFixture<TarjetaAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
