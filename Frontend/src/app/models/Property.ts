import { IPropertyBase } from 'src/app/models/IPropertyBase';

export class Property implements IPropertyBase {
    Id: number;
    SellRent: number;
    Name: string;
    PType: string;
    Price: number;
    BuiltArea: string;
    Address: string;
    City: string;
    RTM: number;
    Security?: number;
    AvailableFrom?: string;
    photo?: string;
    Description?: string;
}
