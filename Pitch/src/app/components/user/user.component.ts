import { Component, OnInit } from '@angular/core';
import { TranslateProvider } from '../../providers';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    public User: {
        id: number;
        firstname: string;
        lastname: string;
        email: string;
        street: string;
        phone: string;
    };
     public states = [
        {
            id: 1,
            value: 'NY'
        },
        {
            id: 2,
            value: 'CA'
        },
        {
            id: 3,
            value: 'Greater London'
        },
        {
            id: 4,
            value: 'Paris'
        },
        {
            id: 5,
            value: 'SP'
        },
        {
            id: 6,
            value: 'Kanto'
        },
        {
            id: 7,
            value: 'Delhi'
        }
    ];
    public cities = [
        {
            id: 1,
            value: 'New York'
        },
        {
            id: 2,
            value: 'Los Angeles'
        },
        {
            id: 3,
            value: 'London'
        },
        {
            id: 4,
            value: 'Paris'
        },
        {
            id: 5,
            value: 'São Paulo'
        },
        {
            id: 6,
            value: 'Tokyo'
        },
        {
            id: 7,
            value: 'New Delhi'
        }
    ];
    constructor(private translate: TranslateProvider) { }

    ngOnInit() { }

    getName() {
        return 'Giuseppe Maffia';
    }
    getEmail() {
        return this.User.email;
    }
    getStreet() {
        return this.User.street;
    }
}
