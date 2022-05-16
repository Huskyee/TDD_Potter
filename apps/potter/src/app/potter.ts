export class Potter {
    private _total = 0;
    private _unitPrice = 8;
    private _books = [0, 0, 0, 0, 0];
    private _numberOfTypes = 0;
    
    buy(booksIndices: number[]) {
        this.calOriginalPrice(booksIndices);
        this.calNumberOfTypes();
        this.calTotal();
    }

    get price() {
        return this._total;
    }

    private calNumberOfTypes() {
        for(let i=0; i<this._books.length; i++) {
            if(this._books[i]) {
                this._numberOfTypes++;
            }
        }
    }

    private calTotal() {
        this._total *= (1 - this.getDiscount());
    }

    private calOriginalPrice(booksIndices: number[]) {
        for(let i=0; i<booksIndices.length; i++) {
            this.updateBooks(booksIndices[i]);
            this._total += this._unitPrice;
        }
    }

    private updateBooks(bookIndex: number) {
        this._books[bookIndex]++;
    }

    private getDiscount() {
        let discount = 0;
        switch(this._numberOfTypes) {
            case 2:
                discount = 0.05;
                break;
            case 3:
                discount = 0.1;
                break;
            case 4:
                discount = 0.2;
                break;
            case 5:
                discount = 0.25;
                break;
        }
        return discount;
    }
}
