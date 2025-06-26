import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmeViewerComponent } from './readme-viewer.component';

describe('ReadmeViewerComponent', () => {
  let component: ReadmeViewerComponent;
  let fixture: ComponentFixture<ReadmeViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadmeViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadmeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
