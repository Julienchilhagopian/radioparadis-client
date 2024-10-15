'use server'

const dateHandler = (date: any) => {
  const dayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  let dateFormat: Date = new Date(date); 

  // Day of the week format
  let day: any = dateFormat.getDate();
  day = dayNames[dateFormat.getDay()] + " " + day

  // Month of the year format
  let month: any = dateFormat.getMonth() + 1; // month starts at 0
  month = month < 10 ? "0" + month : month; // adding 0 for print
  let year = dateFormat.getFullYear();

  return day + '.' + month + '.' + year;
}

const timeHandler = (date: any) => {
  let dateFormat: any = new Date(date);
  let hours: any = dateFormat.getHours() + 2; // +1 because the deployed site version is in another time zone
  hours = hours < 10 ? "0" + hours : hours; // adding 0 for print

  let minutes = dateFormat.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  

  return hours + ':' + minutes
} 


export async function getAgenda() {
  const calendar_id = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;
  const api_key = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;

  // arguments to get 50 latest event from today
  const calendar_url = `https://www.googleapis.com/calendar/v3/calendars/${calendar_id}/events/?key=${api_key}&timeMin=${(new Date()).toISOString()}&maxResults=50&showDeleted=false&singleEvents=true&orderBy=starttime`


  try {
    const calendar_data = await fetch(calendar_url)
    let events = await calendar_data.json()
  
    // Getting only usefull infos
    events = events.items.map((eventObj: any) => ({title: eventObj.summary, description: eventObj.description, cleanDate: dateHandler(eventObj.start.dateTime), cleanTime: timeHandler(eventObj.start.dateTime)}))
    
    // Only way found to group by in pure javascript
    const eventsGroup = events.reduce((eventsGroup: any, event: any) => {
      const date = event.cleanDate
      if (!eventsGroup[date]) {
        eventsGroup[date] = [];
      }
      eventsGroup[date].push(event);
      return eventsGroup;
    }, {});

    const eventsGroupToArray = Object.keys(eventsGroup).map((date) => {
      return {
        date,
        events: eventsGroup[date]
      };
    });

    return eventsGroupToArray
   } catch (err) {
    return err
   }
}