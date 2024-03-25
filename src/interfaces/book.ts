export interface Book {
    
        id: number,
        isbn: number,
        name: string,
        dateOfPublic: Date,
        numOfPage: number,
        pictures: [
            {
                id: number,
                url: string
            }
        ],
        categories: [
            {
                id: number,
                name: string,
                description: string
            },
        ],
        authors: [
            {
                id: number,
                name: string,
                dob: dateFns
            }
        ],
        libraries: null
    
}
