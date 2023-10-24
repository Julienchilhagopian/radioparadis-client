

export default async function GET(req, res) {
  const calendar_id = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;
  const api_key = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;

  const calendar_url = `https://www.googleapis.com/calendar/v3/calendars/${calendar_id}/events/?key=${api_key}`

  const calendar_data = await fetch(calendar_url)
  let events = await calendar_data.json()
  events = events.items.map(eventObj => ({event_title: eventObj.summary, event_description: eventObj.description, event_startDateTime: eventObj.start.dateTime, event_endDateTime: eventObj.end.dateTime}))

  return res.status(200).json(events)
}