const dateHandler = (date) => {
  const dayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  let dateFormat = new Date(date); 

  // Day of the week format
  let day = dateFormat.getDate();
  day = dayNames[dateFormat.getDay()] + " " + day

  // Month of the year format
  let month = dateFormat.getMonth() + 1; // month starts at 0
  month = month < 10 ? "0" + month : month; // adding 0 for print
  let year = dateFormat.getFullYear();

  return day + '.' + month + '.' + year;
}

const timeHandler = (date) => {
  let dateFormat = new Date(date);
  let hours = dateFormat.getHours();
  hours = hours < 10 ? "0" + hours : hours;

  let minutes = dateFormat.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  

  return hours + ':' + minutes
} 

const getTimeOrder = (date) => {
  let dateFormat = new Date(date);
  let hours = dateFormat.getHours();
  let minutes = dateFormat.getMinutes() / 60; // moving to decimal time

  return hours + minutes;
} 

export default async function GET(req, res) {
  const calendar_id = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;
  const api_key = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;

  // arguments to get 50 latest event from today
  const calendar_url = `https://www.googleapis.com/calendar/v3/calendars/${calendar_id}/events/?key=${api_key}&timeMin=${(new Date()).toISOString()}&maxResults=50&showDeleted=false&singleEvents=true&orderBy=starttime`


  try {
    const calendar_data = await fetch(calendar_url)
    let events = await calendar_data.json()
  
    // Getting only usefull infos
    events = events.items.map(eventObj => ({title: eventObj.summary, description: eventObj.description, cleanDate: dateHandler(eventObj.start.dateTime), cleanTime: timeHandler(eventObj.start.dateTime)}))
    
    // Only way found to group by in pure javascript
    const eventsGroup = events.reduce((eventsGroup, event) => {
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

    return res.status(200).json(eventsGroupToArray);
   } catch (err) {
    return res.status(500).json(err);
   }
}