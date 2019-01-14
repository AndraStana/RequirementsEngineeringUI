export class Student{
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    gender:  number;
    address: string;
    description: string;
    hasCV: boolean;
}

export class basicInternship{
    position: string;
    company: string;
}


export class newsfeedInternship extends basicInternship{
    description: string;
    recruitingStartDate: Date;
    recruitingEndDate: Date;
    positionPhoto: string;
    companyPhoto: string;
}