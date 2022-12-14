import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ListRepositoryROComponent } from './list-repository-ro.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
    BrowserAnimationsModule,
    NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchTriggerService } from '../global-search/search-trigger.service';
import { SessionService } from '../../services/session.service';

describe('ListRepositoryRoComponent', () => {
    let component: ListRepositoryROComponent;
    let fixture: ComponentFixture<ListRepositoryROComponent>;
    const mockSearchTriggerService = {
        closeSearch: () => {},
    };
    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [
                BrowserAnimationsModule,
                ClarityModule,
                TranslateModule.forRoot(),
                FormsModule,
                RouterTestingModule,
                NoopAnimationsModule,
                HttpClientTestingModule,
            ],
            declarations: [ListRepositoryROComponent],
            providers: [
                TranslateService,
                SessionService,
                {
                    provide: SearchTriggerService,
                    useValue: mockSearchTriggerService,
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListRepositoryROComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
