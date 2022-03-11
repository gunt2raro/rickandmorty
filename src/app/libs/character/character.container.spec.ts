import { of } from "rxjs"
import { DebugElement } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Character } from "./models/character"
import { MatIconModule } from "@angular/material/icon"
import { MatListModule } from "@angular/material/list"
import { CharacterService } from "./character.service"
import { CharacterContainer } from "./character.container"
import { MatButtonModule } from "@angular/material/button"
import { RouterTestingModule } from "@angular/router/testing";
import { BreadCrumbStore } from "../breadcrumb/breadcrumb.store"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { BreadCrumbModule } from "../breadcrumb/breadcrumb.module"

describe('Character container', () => {
    let de: DebugElement
    let component: CharacterContainer
    let fixture: ComponentFixture<CharacterContainer>
    let characterMock: Character

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            imports: [
                CommonModule,
                MatListModule,
                MatIconModule,
                MatButtonModule,
                BreadCrumbModule,
                RouterTestingModule,
            ],
            declarations: [
                CharacterContainer
            ],
            providers: [
                { 
                    provide: BreadCrumbStore, 
                    useValue: {
                        changeTitle: (title: string) => {}
                    }
                },
                { provide: CharacterService, useValue: {} }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CharacterContainer),
        component = fixture.componentInstance;
        de = fixture.debugElement
        characterMock = {
            name: "Rick Sanchez",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            type: "",
            gender: "Male",
            species: "Human",
            origin: {
                name: "Earth"
            },
            location: {
                id: 1,
                name: "Earth"
            },
            status: "Alive",
        }
        component.character$ = of(characterMock)
        fixture.detectChanges();
    })

    it('should create character', () => {
        expect(component).toBeTruthy()
    })

    it('should show gender', () => {
        expect(
            de.nativeElement
                .querySelector('#gender')
                .textContent
        ).toContain(characterMock.gender)
    })

    it('should show species', () => {
        expect(
            de.nativeElement
                .querySelector('#species')
                .textContent
        ).toContain(characterMock.species)
    })

    it('should show origin', () => {
        expect(
            de.nativeElement
                .querySelector('#origin')
                .textContent
        ).toContain(characterMock.origin.name)
    })

    it('should show name', () => {
        expect(
            de.nativeElement
                .querySelector('#name')
                .textContent
        ).toContain(characterMock.name)
    })

    it('should render image', () => {
        expect(
            de.nativeElement
                .querySelector('.img-thumbnail')
                .src
        ).toContain(characterMock.image);
    })

    it('should show alive status icon', () => {
        expect(
            de.nativeElement
                .querySelector('.status-icon')
                .textContent
        ).toContain('hdr_strong')
    })

    it('should be alive', () => {
        expect(
            de.nativeElement
                .querySelector('#status')
                .textContent
        ).toContain(characterMock.status)
    })
})