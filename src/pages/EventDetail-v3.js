import { useRouteLoaderData, json,redirect  } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  // useRouteLoaderData hook This will take route id as arg
  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  console.info("Fetching event based on ID %s :", id);

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    let data = await response.clone().json();
    console.log(data);
    return response;
  }
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  console.info("Delete event based on ID %s :", eventId);
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "Could not delete event." },
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
}
