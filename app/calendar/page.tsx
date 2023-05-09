'use client'
import React from "react";
import { ScheduleComponent,ViewDirective,Day,Week,WorkWeek,Month,Agenda,Inject,Resize,DragAndDrop,EventSettingsModel} from "@syncfusion/ej2-react-schedule"
import {
    MdLocationPin,
    MdOutlineDescription,
    MdSubject
} from 'react-icons/md'
import { registerLicense } from '@syncfusion/ej2-base';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import {AiOutlineClockCircle} from "react-icons/ai";

const Calendar = () => {
    registerLicense('MTk2OTcyN0AzMjMxMmUzMjJlMzNmT1JvWVB2K0ZNUHREekluVGRtc1pQTFFab2F1K3kvRndodThvVGk1cE4wPQ==;Mgo+DSMBaFt+QHJqVk1lQ1BBaV1CX2BZf1l2TWlcf04QCV5EYF5SRHNfSlxgSXZWdkZhUX8=;Mgo+DSMBMAY9C3t2VFhiQlJPc0BDWHxLflF1VWJTf1Z6cVVWACFaRnZdQV1mSXZSdUVrXH9ddHNV;Mgo+DSMBPh8sVXJ1S0R+X1pBaV5HQmFJfFBmRGlZd1R1dEUmHVdTRHRcQlhjQX9Qdk1mWXtdc3I=;MTk2OTczMUAzMjMxMmUzMjJlMzNZeFAyRHA5UFZyQXk3elZ0SHhVSThkOFk5cjRpL1lvdkJLNS9NTWhQNklzPQ==;NRAiBiAaIQQuGjN/V0d+Xk9HfVpdXGZWfFN0RnNYdV54flBGcDwsT3RfQF5jTH5bd0ZjUXpedXRUQA==;ORg4AjUWIQA/Gnt2VFhiQlJPc0BDWHxLflF1VWJTf1Z6cVVWACFaRnZdQV1mSXZSdUVrXH9bcXNT;MTk2OTczNEAzMjMxMmUzMjJlMzNXaDRxcWlBMGNHOEhyUisvT0U3WTVMc0hBY2hRUm9wVlIrS3gzWFBqdE9VPQ==;MTk2OTczNUAzMjMxMmUzMjJlMzNLR3lJcEM4MTY2ZmVwWHpNd1RXbk9pVG5saEh2S2phTnlSYk9RQktqdzlNPQ==;MTk2OTczNkAzMjMxMmUzMjJlMzNDS3FUdlJISnR3bzV5bEd2Z1hnZ2N6SS9zQUgvVjAyaURnRDhIRUQ3ek5VPQ==;MTk2OTczN0AzMjMxMmUzMjJlMzNKcENiWFR1UzBBTW5OWWw4b1pNZUwxRXV0aFF5SnYvYUkxUUQvLzBzdDc4PQ==;MTk2OTczOEAzMjMxMmUzMjJlMzNmT1JvWVB2K0ZNUHREekluVGRtc1pQTFFab2F1K3kvRndodThvVGk1cE4wPQ==');
    let calendarId: string = '43303a2afa13a6c8cb7e580086eaa25c3b8a2d59c34fc7b13a6de6258eea549c@group.calendar.google.com';
    let publicKey: string = 'AIzaSyAZPjqFTAt3SshelRPTpThQKvG1jOyb6YI';
    let dataManger: DataManager = new DataManager({
        url: 'https://www.googleapis.com/calendar/v3/calendars/' + calendarId + '/events?key=' + publicKey,
        adaptor: new WebApiAdaptor(),
        crossDomain: true
    });
    function onDataBinding(e: Record<string, any>): void {
        let items: Record<string, any>[] = (e.result as Record<string, Record<string, any>[]>).items;
        let scheduleData: Record<string, any>[] = [];
        if (items.length > 0) {
            for (let event of items) {
                // console.log(event)
                let when: string = event.start.dateTime as string;
                let start: string = event.start.dateTime as string;
                let end: string = event.end.dateTime as string;
                if (!when) {
                    when = event.start.date as string;
                    start = event.start.date as string;
                    end = event.end.date as string;
                }
                scheduleData.push({
                    Id: event.id,
                    Subject: event.summary,
                    StartTime: new Date(start),
                    EndTime: new Date(end),
                    IsAllDay: !event.start.dateTime,
                    Location: event?.location,
                    hangoutLink: event?.hangoutLink,
                    Description: event.description
                });
            }
        }
        e.result = scheduleData;
    }
    const eventTemplate = (props:any) => {
        console.log(props)
        return (
            <div className="flex flex-col gap-4">
                <div className='flex flex-col md:flex-row gap-2 items-center'>
                        <MdSubject size={28}/>
                        <p>{props.Subject}</p>
                </div>
                <div className='flex flex-col md:flex-row gap-2 items-center'>
                        <MdOutlineDescription size={28}/>
                        <p>{props.Description}</p>
                </div>
                <div className='flex flex-col md:flex-row gap-2 items-center'>
                        <MdLocationPin size={28}/>
                        <p>{props.Location}</p>
                </div>
                <div className='flex flex-col md:flex-row gap-2 items-center'>
                        <AiOutlineClockCircle size={28}/>
                       <div>
                           <p>{new Date(props.StartTime).toTimeString()} </p>
                           <p>{new Date(props.EndTime).toTimeString()} </p>
                       </div>
                </div>
                {props.hangoutLink && (
                    <div className={'my-6'}>
                        <a href={props.hangoutLink} target="_blank" rel="noopener noreferrer" className="bg-primary text-white w-max my-6 px-4 py-2 rounded-md">
                            Join Meeting
                        </a>
                    </div>
                )}
            </div>
        );
    };


    return (
        <div className='max-w-[1440px] mx-auto my-6'>
            <ScheduleComponent readonly={true}
                               eventSettings={{ dataSource: dataManger }}
                               dataBinding={onDataBinding.bind(this)}

                                quickInfoTemplates={{
                                // @ts-ignore
                                    content: eventTemplate.bind(this)
                                }}
                               currentView='Month'
                               timezone='UTC'
            >
                <Inject services={[Day,Week,WorkWeek,Agenda,Resize,DragAndDrop]}/>
            </ScheduleComponent>
        </div>
    );
}

export default Calendar;