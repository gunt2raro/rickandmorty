import { of } from "rxjs"
import { Router } from "@angular/router"
import { DebugElement } from "@angular/core"
import { CommonModule } from "@angular/common"
import { BreadCrumbStore } from "./breadcrumb.store"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { BreadCrumbComponent } from "./breadcrumb.component"
import { ComponentFixture, TestBed } from "@angular/core/testing"

describe('Breadcrumb component', () => {

    let router = {
        navigate: jasmine.createSpy('navigate')
    }
    let de: DebugElement
    let component: BreadCrumbComponent
    let fixture: ComponentFixture<BreadCrumbComponent>
    let treeMock: any

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            imports: [
                CommonModule,
                MatIconModule,
                MatButtonModule,
            ],
            declarations: [
                BreadCrumbComponent,
            ],
            providers: [
                { 
                    provide: BreadCrumbStore, 
                    useValue: {
                        changeTitle: (title: string) => {}
                    }
                },
                { 
                    provide: Router, 
                    useValue: router
                },
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BreadCrumbComponent)
        component = fixture.componentInstance;
        de = fixture.debugElement;
        treeMock = {
            title: "Characters by Something",
            urlTree: [{
                name: 'Characters',
                url: ['characters']
            }]
        }
        component.breadcrumb$ = of(treeMock)
        fixture.detectChanges();
    })

    it('should redirect to tree url characters', () => {
        const nodes = de.nativeElement.querySelectorAll('a')
        const button = nodes[nodes.length - 1]
        button.click()
        fixture.detectChanges();
        expect(router.navigate).toHaveBeenCalledWith(['characters']);
    })

    it('should render title', () => {
        expect(
            de.nativeElement
                .querySelector('.title')
                .textContent
        ).toContain(treeMock.title)
    })
})