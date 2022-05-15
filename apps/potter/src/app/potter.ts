export class Potter {
    private _total = 0;
    private _unitPrice = 8;
    buy(booksIndices: number[]) {
        if(booksIndices.length) {
            this._total += this._unitPrice;
        }
    }

    get price() {
        return this._total;
    }
}
