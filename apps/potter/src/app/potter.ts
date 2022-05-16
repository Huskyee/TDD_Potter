export class Potter {
    private _total = 0;
    private _unitPrice = 8;
    private _shoppingCart = [0, 0, 0, 0, 0];

    buy(booksIndices: number[]) {
        this.calOriginalPrice(booksIndices);
        while(!this.isShoppingCartEmpty()) {
            let numberOfTypes = this.calNumberOfTypes();
            let discount = this.getDiscount(numberOfTypes);
            this.calTotal(discount);
        }
    }

    get price() {
        return this._total;
    }

    private isShoppingCartEmpty() {
        for(let i=0; i<this._shoppingCart.length; i++) {
            if(this._shoppingCart[i]) {
                return false;
            }
        }
        return true;
    }

    private calNumberOfTypes() {
        let numberOfTypes = 0;
        for(let i=0; i<this._shoppingCart.length; i++) {
            if(this._shoppingCart[i]) {
                numberOfTypes++;
                this._shoppingCart[i]--;
            }
        }
        return numberOfTypes;
    }

    private calTotal(discount: number) {
        this._total -= discount;
        this._total = Math.round(this._total * 100) / 100;
    }

    private calOriginalPrice(booksIndices: number[]) {
        for(let i=0; i<booksIndices.length; i++) {
            this.updateBooks(booksIndices[i]);
            this._total += this._unitPrice;
        }
    }

    private updateBooks(bookIndex: number) {
        this._shoppingCart[bookIndex]++;
    }

    private getDiscount(numberOfTypes: number) {
        let discountRate = 0;
        switch(numberOfTypes) {
            case 2:
                discountRate = 0.05;
                break;
            case 3:
                discountRate = 0.1;
                break;
            case 4:
                discountRate = 0.2;
                break;
            case 5:
                discountRate = 0.25;
                break;
        }
        let discount = discountRate * this._unitPrice * numberOfTypes;
        return discount;
    }
}
