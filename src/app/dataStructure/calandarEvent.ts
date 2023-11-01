import { Calendar } from "@fullcalendar/core";


export enum DayOfTheWeek {
    Sunday = 0,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

export class CalandarEvent {
    
    private owner: string = '';

    name: string = '';
    date: string = '';

    // isWeekly: boolean = false;
    // make this into enum
    
    daysOfWeek = [];

    startTime: string = '';
    endTime: string = '';
    location: string = '';
    
    // use enums
    private privacyLevel: string = '';
    
    constructor(owner: string = '') {
        this.owner = owner;
    }

    set(event: CalandarEvent) {
        this.name = event.name;
        this.date = event.date;
        this.startTime = event.startTime;
        this.endTime = event.endTime;
        this.location = event.location;
        this.formatTime();
    }

    formatTime() {
        let errors = [];
        try {
            this.startTime = new Date(''.concat(this.date, ' ', this.startTime)).toISOString();
        } catch (err) {
            errors.push(err);
        }
        try {
            this.endTime = new Date(''.concat(this.date, ' ', this.endTime)).toISOString();
        } catch (err) {
            errors.push(err);
        }

        if (errors.length != 0) {
            throw new Error('date could not be formatted correctly', { cause: errors });
        }
    }

    static toFullCalandarEvents(arr: Set<CalandarEvent>) {
        var FullCalandarEvents:any[] = []
        console.log(arr);
        arr.forEach(event => {
            FullCalandarEvents.push(event.toFullCalandarEvent())
        });
        return FullCalandarEvents;
    }

    toFullCalandarEvent() {
        return {
            title: this.name,
            start: this.startTime,
            end: this.endTime,
            // daysOfWeek: this.daysOfWeek,
        };
    }

    // equals(event: CalandarEvent): boolean {
    //     return false;
    // }

    // updateTo(event: CalandarEvent) {
    //     if (!this.equals(event)) {

    //     }
    // }

}

