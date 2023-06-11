import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Store, StoreModule } from '@ngrx/store';
import { WeatherState } from './store';
import { WeatherService } from './services/weather.service';
import { of } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let store: Store<WeatherState>;
  let weatherService: WeatherService;
  let translateService: TranslateService;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
      imports: [
        TranslateModule.forRoot(),
        StoreModule.forRoot({}),
        HttpClientTestingModule
      ],
      providers: [
        WeatherService,
        TranslateService,
        Store,
        ApiService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    weatherService = TestBed.inject(WeatherService);
    translateService = TestBed.inject(TranslateService);
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadCityWeather action', () => {
    spyOn(store, 'dispatch');
    const event = { lat: 35.6895, lon: 139.6917 };
    component.selectedCity(event);
    expect(store.dispatch).toHaveBeenCalledWith(
      jasmine.objectContaining({ lat: 35.6895, lon: 139.6917, type: '[Weather] loadCityWeather ' })
    );
  });

  it('should call getCityDetail function', () => {
    spyOn(weatherService, 'getCityDetail').and.returnValue(of([]));
    const term = 'Tokyo';
    const result = component.getCityListCallbackFunction(term);
    expect(weatherService.getCityDetail).toHaveBeenCalledWith(term);
    result.subscribe((response) => {
      expect(response).toEqual([]);
    });
  });

  it('should call translate.use function', () => {
    spyOn(translateService, 'use');
    const lang = 'en';
    component.changeLangulage(lang);
    expect(translateService.use).toHaveBeenCalledWith(lang);
  });


  it('should have a selectedCity function', () => {
    expect(component.selectedCity).toBeDefined();
  });

  it('should have a getCityListCallbackFunction function', () => {
    expect(component.getCityListCallbackFunction).toBeDefined();
  });

  it('should have a changeLangulage function', () => {
    expect(component.changeLangulage).toBeDefined();
  });



  it('should render a form with an input field', () => {
    const form = fixture.nativeElement.querySelector('form');
    expect(form).toBeDefined(); // check if the form exists
    const input = fixture.nativeElement.querySelector('form input');
    expect(input).toBeDefined(); // check if the input exists
  });

});
