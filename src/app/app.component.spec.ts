import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AngularMaterialModule } from './angular-material.module';

describe('AppComponent', () => {

  let component:AppComponent;
  let fixture:ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[AngularMaterialModule,Route]
    }).compileComponents();
  }));

  beforeEach(()=>{

    fixture=TestBed.createComponent(AppComponent);

    component=fixture.componentInstance;

  })
  it('should create the app', async(() => {
   
    expect(component).toBeTruthy();
  }));
  it(`should have as title 'MetallicaApp'`, async(() => {
    
    expect(component.title).toEqual('MetallicaApp');
  }));


  it('should contain the router outlet for Routes', ()=>{

    let del=fixture.debugElement.query(By.directive(RouterOutlet));

    expect(del).not.toBeNull();



  })


});
