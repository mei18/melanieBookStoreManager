export class Category {
    private categoryId: number;
    private categoryName: string;

    constructor(categoryId: number, categoryName: string) {
        this.setCategoryId(categoryId);
        this.setCategoryName(categoryName);
    }
    getCategoryId() { return this.categoryId };
    getCategoryName() { return this.categoryName };
    
    setCategoryId(value) { this.categoryId = value};
    setCategoryName(value) { this.categoryName = value};
}
