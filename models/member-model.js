export class Member {

    static instance;


    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.street = '';
        this.zipCode = '';
        this.city = '';
        this.country = '';
        this.zipCode = '';
        this.picture = '';
    }


    update(member) {
        if (member) {
            this.firstName = member.firstName ? member.firstName : '';
            this.lastName = member.lastName ? member.lastName : '';
            this.street = member.street ? member.street : '';
            this.zipCode = member.zipCode ? member.zipCode : '';
            this.city = member.city ? member.city : '';
            this.country = member.country ? member.country : '';
            this.zipCode = member.zipCode ? member.zipCode : '';
            this.picture = member.picture ? member.picture : '';
        }

    }

}