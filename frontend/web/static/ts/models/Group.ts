class Group {
    private _id : number;
    private _name : string;
    private _members : User[];

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get members(): User[] {
        return this._members;
    }

    set members(value: User[]) {
        this._members = value;
    }
}