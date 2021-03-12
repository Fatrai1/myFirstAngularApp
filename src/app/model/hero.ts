export class Hero {
    id?: number = 0;
    name: string = '';
    address: string = '';
    superpower: string = '';

    constructor(properties?: Hero){
        if(properties){
            this.id=properties.id || 0;
            this.name=properties.name || '';
            this.address=properties.address || '';
            this.superpower=properties.superpower || '';
        }
    }
}