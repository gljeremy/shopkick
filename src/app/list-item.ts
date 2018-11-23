export class ListItem {
    constructor(title: string) {
        this.title = title;
    }

    id: number;
    isDone: boolean;
    title: string;
    category: string;
}