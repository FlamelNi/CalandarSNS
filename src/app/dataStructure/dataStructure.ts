
export class Event {
    
    private owner: String = '';

    name: String = '';
    date: String = '';
    startTime: String = '';
    endTime: String = '';
    location: String = '';
    
    // use enums
    private privacyLevel: String = '';
    
    constructor(owner: String) {
        this.owner = owner;
    }

}

