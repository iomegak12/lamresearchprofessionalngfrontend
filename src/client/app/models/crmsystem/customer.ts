class Customer {
    constructor(public customerId: number,
        public customerName: string, public address: string,
        public email: string, public phone: string,
        public credit: number, public status: boolean, public remarks: string) {
    }

    toString() {
        let formattedMessage =
            `${this.customerId}, ${this.customerName}, ${this.address}, ${this.email}` +
            `${this.phone}, ${this.credit}, ${this.status}, ${this.remarks}`;

            return formattedMessage;
    }
}

export {
    Customer
};
