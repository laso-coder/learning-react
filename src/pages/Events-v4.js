import { useLoaderData } from "react-router-dom";
import EventsList from "./../components/EventsList";

function EventsPage() {
  const eventsResponse = useLoaderData();

  /*   if (eventsResponse.isError) {
    return <p>{eventsResponse.message} </p>;
  }
 */
  let events = eventsResponse.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  console.log(await response.data);
  if (!response.ok) {
    /*     return {
      isError: true,
      message: "Could not load fetch events..",
    }; */
    throw new Response(
      JSON.stringify({ message: "Could not fetch events from API" }),
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
