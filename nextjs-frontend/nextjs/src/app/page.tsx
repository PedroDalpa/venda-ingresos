import { EventCard } from "@/components/EventCard";
import { Title } from "@/components/Title";
import { EventModel } from "@/models";

const events: EventModel[] = [
  {
    date: new Date("2023-09-15T18:00:00").toISOString(),
    id: "1",
    name: "Event 1",
    organization: "Organization 1",
    price: 100,
    rating: "17",
    image_url:
      "https://i.pinimg.com/564x/ce/38/e9/ce38e9492c91f5ff16caa5f77bfaa907.jpg",
    location: "Local 1",
  },
  {
    date: new Date("2023-09-20T18:00:00").toISOString(),
    id: "2",
    name: "Event 2",
    organization: "Organization 2",
    price: 150,
    rating: "19",
    image_url:
      "https://i.pinimg.com/564x/ce/38/e9/ce38e9492c91f5ff16caa5f77bfaa907.jpg",
    location: "Local 2",
  },
  {
    date: new Date("2023-09-25T18:00:00").toISOString(),
    id: "3",
    name: "Event 3",
    organization: "Organization 3",
    price: 200,
    rating: "21",
    image_url:
      "https://i.pinimg.com/564x/ce/38/e9/ce38e9492c91f5ff16caa5f77bfaa907.jpg",
    location: "Local 3",
  },
  {
    date: new Date("2023-10-01T18:00:00").toISOString(),
    id: "4",
    name: "Event 4",
    organization: "Organization 4",
    price: 250,
    rating: "23",
    image_url:
      "https://i.pinimg.com/564x/ce/38/e9/ce38e9492c91f5ff16caa5f77bfaa907.jpg",
    location: "Local 4",
  },
];

export default function Home() {
  return (
    <main>
      <Title>Eventos disponíveis</Title>
      <div
        className="mt-8 sm:grid sm:grid-cols-auto-fit-cards 
          flex flex-wrap justify-center gap-x-2 gap-y-4"
      >
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}
