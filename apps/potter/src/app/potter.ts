export class Potter {
    private _total = 0;
    private _unitPrice = 8;
    buy(booksIndices: number[]) {
        for(let i=0; i<booksIndices.length; i++) {
            this._total += this._unitPrice;
        }
    }

    get price() {
        return this._total;
    }
}
