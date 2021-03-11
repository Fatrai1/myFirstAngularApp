export class Hero {
    name: string = '';
    address: string = '';
    superpower: string = '';

    constructor(properties?: Hero){
        if(properties){
            this.name=properties.name || '';
            this.address=properties.address || '';
            this.superpower=properties.superpower || '';
        }
    }
}