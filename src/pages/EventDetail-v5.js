import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";
import { getAuthToken } from "./util/auth";

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

  console.log("response.status: ", response.status);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: response.status,
      }
    );
  } else {
    let data = await response.clone().json();
    console.log({ data });
    return response;
  }
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const token = getAuthToken();
  
  console.info("Delete event based on ID %s :", eventId);
  
  const response = await fetch(
    "http://localhost:8080/events/" + eventId,
    { mode: "cors" },
    {
      method: request.method,
      headers: {
        'Authorization': 'Bearer '+ token,
      },
    }
  );
  
  let data = await response.message;
  console.log({ data });
  
  if (!response.ok) {
    throw json(
      { message: "Could not delete event." },
      {
        status: response.status,
      }
    );
  }
  return redirect("/events");
}
