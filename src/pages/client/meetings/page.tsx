import ZoomVideo from "@/components/icons/ZoomVideo";
import Container from "@/components/reusables/Container";
import MainContainer from "@/components/reusables/mainContainer";
import SquareButton from "@/components/reusables/squareButton";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, Plus } from "lucide-react";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import RequestMeetingHeadline from "./components/requestMeetingHeadline";

const meetingsDetails = [
  {
    title: "Meeting One Title 1",
    description: "This is the meeting one description",
    from: "12:00",
    to: "02:00",
    status: "Requested",
  },
  {
    title: "Meeting One Title 1",
    description: "This is the meeting one description",
    from: "12:00",
    to: "02:00",
    status: "Overdue",
  },
  {
    title: "Meeting One Title 1",
    description: "This is the meeting one description",
    from: "12:00",
    to: "02:00",
    status: "Pending",
  },
  {
    title: "Meeting One Title 1",
    description: "This is the meeting one description",
    from: "12:00",
    to: "02:00",
    status: "Attended",
  },
];

// const meetingsRequest = [
//   {
//     title: "Meeting One Title 1",
//     description: "This is the meeting one description",
//     from: "12:00",
//     to: "02:00",
//   },
//   {
//     title: "Meeting One Title 1",
//     description: "This is the meeting one description",
//     from: "12:00",
//     to: "02:00",
//   },
//   {
//     title: "Meeting One Title 1",
//     description: "This is the meeting one description",
//     from: "12:00",
//     to: "02:00",
//   },
// ];

// function CardPreview({
//   details,
//   key,
// }: {
//   details: {
//     title: string;
//     description: string;
//     from: string;
//     to: string;
//   };
//   key: string;
// }) {
//   return (
//     <div
//       key={key}
//       className="flex flex-row items-center justify-between w-full hover:shadow-[3px_3px_10px_0px_#789BD399,-5px_-5px_10px_0px_#FFFFFF] p-4 px-6"
//     >
//       <div className="flex flex-row items-center gap-4">
//         <ZoomVideo />
//         <div className="flex flex-col ">
//           <h3 className={`text-lg font-semibold  text-[#155EEF] `}>
//             {details.title}
//           </h3>
//           <p className="text-base font-normal text-gray-700">
//             {details.description}
//           </p>
//           <p className="text-base font-normal text-gray-700">
//             {`${details.from} - ${details.to}`}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
function Card({
  details,
  key,
}: {
  details: {
    title: string;
    description: string;
    from: string;
    to: string;
    status: string;
  };
  key: string;
}) {
  return (
    <div
      key={key}
      className="flex flex-row items-center justify-between w-full hover:shadow-[3px_3px_10px_0px_#789BD399,-5px_-5px_10px_0px_#FFFFFF]  p-3 sm:p-4 md:p-5 lg:p-6"
    >
      <div className="flex flex-row items-center gap-4">
        <ZoomVideo />
        <div className="flex flex-col ">
          <h3
            className={`text-lg font-semibold  ${
              details.status === "Pending" || details.status === "Requested"
                ? "text-[#155EEF]"
                : "text-gray-800"
            } `}
          >
            {details.title}
          </h3>
          <p className="text-base font-normal text-gray-700">
            {details.description}
          </p>
          <p className="text-base font-normal text-gray-700">
            {`${details.from} - ${details.to}`}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <p
          className={`text-base text-[#155EEF] ${
            details.status === "Overdue" ? "text-[#FF3B30]" : ""
          } ${
            details.status === "Attended" ? "text-[#34C759]" : ""
          } font-normal `}
        >
          {details.status}
        </p>
        {(details.status === "Pending" || details.status === "Reuested") && (
          <SquareButton className="text-[#6A6A6A] px-0 py-0">Join</SquareButton>
        )}
      </div>
    </div>
  );
}

export function MeetingsDetails() {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <div className=" w-full  flex flex-row items-center justify-between">
        <div className="flex flex-col gap-1">
          {/* headline */}
          <h1 className="text-3xl font-semibold">Meetings detail</h1>
          <p className="text-[#6A6A6A] text-base font-normal">
            {"Project / meetings"}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <SquareButton
            onClick={() => {
              navigate("/meetings/request");
            }}
          >
            <Plus color="#155EEF" />
            Request Meeting
          </SquareButton>

          <SquareButton className="text-[#6A6A6A] w-fit self-end">
            7 days <ChevronDown color="#6A6A6A" />
          </SquareButton>
        </div>
      </div>

      <Container className="p-0 sm:p-0 md:p-0 lg:p-0">
        <Tabs defaultValue="allMetting" className="">
          <TabsList className=" flex rounded-none h-[65px]   shadow-[3px_3px_10px_0px_#789BD399_inset,-5px_-5px_15px_0px_#FFFFFF] rounded-t-xl flex-row items-center justify-around w-full  bg-transparent text-base font-semibold text-black px-0 my-">
            <TabsTrigger value="allMetting">All Mettings</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="requested">Requested</TabsTrigger>
            <TabsTrigger value="attened">Attended</TabsTrigger>
            <TabsTrigger value="overdue">Overdue</TabsTrigger>
          </TabsList>
          <TabsContent value="allMetting">
            <div className="w-full h-full flex flex-col">
              {meetingsDetails.map((details) => (
                <Card key={details.title} details={details} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="pending">
            <div className="w-full h-full flex flex-col">
              {meetingsDetails
                .filter((details) => details.status === "Pending")
                .map((details) => (
                  <Card key={details.title} details={details} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="requested">
            <div className="w-full h-full flex flex-col">
              {meetingsDetails
                .filter((details) => details.status === "Requested")
                .map((details) => (
                  <Card key={details.title} details={details} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="attened">
            <div className="w-full h-full flex flex-col">
              {meetingsDetails
                .filter((details) => details.status === "Attended")
                .map((details) => (
                  <Card key={details.title} details={details} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="overdue">
            <div className="w-full h-full flex flex-col">
              {meetingsDetails
                .filter((details) => details.status === "Overdue")
                .map((details) => (
                  <Card key={details.title} details={details} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </MainContainer>
  );
}

const generateTimeOptions = () => {
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (const minute of ["00", "15", "30", "45"]) {
      const timeString = `${hour.toString().padStart(2, "0")}:${minute}`;
      times.push(timeString);
    }
  }
  return times;
};

export function MeetingsRequest() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [meetingRequests, setMeetingRequests] = useState<
    {
      title: string;
      description: string;
      date: string;
      from: string;
      to: string;
    }[]
  >([
    {
      title: "Meeting One Title 1",
      description: "This is the meeting one description",
      date: "8th july, 2024",
      from: "12:00",
      to: "02-00",
    },
  ]);

  const timeOptions = generateTimeOptions();

  const handleSubmit = useCallback(() => {
    if (!title || !description || !date || !startTime || !endTime) {
      alert("Please fill in all fields");
      return;
    }

    const newMeetingRequest = {
      title,
      description,
      date: date.toLocaleDateString(),
      from: startTime,
      to: endTime,
    };

    setMeetingRequests([...meetingRequests, newMeetingRequest]);

    resetForm();
  }, [date, description, endTime, meetingRequests, startTime, title]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setDate(new Date());
    setStartTime("");
    setEndTime("");
  };
  return (
    <MainContainer>
      <RequestMeetingHeadline handleSubmit={handleSubmit} />

      <div className="w-full  flex flex-row gap-5">
        <div className="w-1/2  flex flex-col gap-7 rounded-3xl shadow-[5px_5px_20px_0px_#7BA9EF99,-5px_-5px_20px_0px_#FFFFFF,5px_5px_20px_0px_#7BA9EF99_inset,-5px_-5px_20px_0px_#FFFFFF_inset] p-6">
          <div className="w-full  flex flex-col gap-5">
            <div className="w-full flex flex-col gap-2">
              <Label>Meeting Title</Label>
              <input
                type="text"
                placeholder="Meeting Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-base h-[40px] outline-none shadow-[3px_3px_10px_0px_#789BD399,-3px_-3px_10px_0px_#FFFFFF] bg-transparent rounded-lg px-4"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <Label>Meeting Description</Label>
              <Textarea
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                placeholder="Meeting Description"
                className="w-full resize-none border-0 p-3 focus-visible:ring-0 h-[40px] outline-none shadow-[3px_3px_10px_0px_#789BD399,-3px_-3px_10px_0px_#FFFFFF] bg-transparent rounded-lg px-4"
              />
            </div>
          </div>
          <div className="w-full flex flex-row gap-5">
            <div className=" flex flex-col gap-2">
              <Label>Select Date </Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md w-fit shadow-[3px_3px_10px_0px_#789BD399,-3px_-3px_10px_0px_#FFFFFF]"
              />
            </div>
            <div className="flex w-full flex-col gap-4">
              <div className="space-y-2">
                <label className="block mb-2">Start Time</label>
                <Select value={startTime} onValueChange={setStartTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Start Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {timeOptions.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="block mb-2">End Time</label>
                <Select value={endTime} onValueChange={setEndTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="End Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {timeOptions.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-[400px] flex flex-col gap-4">
          <h1>Meeting Requests Preview</h1>
          <div className="w-full h-full flex flex-col">
            {meetingRequests.map((meeting, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-between w-full hover:shadow-[3px_3px_10px_0px_#789BD399,-5px_-5px_10px_0px_#FFFFFF] p-4 px-6 rounded-xl cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <ZoomVideo />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600">
                      {meeting.title}
                    </h3>
                    <p className="text-gray-700">{meeting.description}</p>
                    <p className="text-gray-600">
                      {meeting.date} | {meeting.from} - {meeting.to}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
