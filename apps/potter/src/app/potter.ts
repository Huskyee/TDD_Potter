export class Potter {
    private _total = 0;
    private _unitPrice = 8;
    private _books = [0, 0, 0, 0, 0];
    private _numberOfTypes = 0;
    buy(booksIndices: number[]) {
        for(let i=0; i<booksIndices.length; i++) {
            this._books[booksIndices[i]] += 1;
            this._total += this._unitPrice;
        }
        for(let i=0; i<this._books.length; i++) {
            if(this._books[i]) {
                this._numberOfTypes++;
            }
        }
        if(this._numberOfTypes == 2) {
            this._total *= 0.95;
        }
        else if(this._numberOfTypes == 3) {
            this._total *= 0.9;
        }
        else if(this._numberOfTypes == 4) {
            this._total *= 0.8;
        }
        else if(this._numberOfTypes == 5) {
            this._total *= 0.75;
        }
    }

    get price() {
        return this._total;
    }
}
