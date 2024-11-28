import Container from "@/components/reusables/Container";
import { EllipsisVertical, } from "lucide-react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import SortBy from "@/components/icons/SortBy";
import Filter from "@/components/icons/Filter";

const dataFilesTasks = [
    {
      id: 1,
      task: "Navbar with Extensive categories",
      description: "This is the description here about the task...",
      status: "In Progress",
      createdOn: "Jan 4, 2022",
      assignedTo: "Gojo Satoru",
    },
    {
      id: 2,
      task: "Hero section with three animation sections",
      description: "This is the description here about the task...",
      status: "Completed",
      createdOn: "Jan 4, 2022",
      assignedTo: "Dazai Osamu",
    },
    {
      id: 3,
      task: "Add to cart with similar products section",
      description: "This is the description here about the task...",
      status: "Pending   ",
      createdOn: "Jan 4, 2022",
      assignedTo: "Sukuna Sama",
    },
  ];
  
export default function TasksList() {
  return (
    <Container>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="uppercase text-lg text-gray-600 font-semibold">
              {"Tasks Lists"}
            </h3>
            <p className="text-[#6A6A6A] text-base font-normal">
              Total Tasks - 07
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <div className="w-full flex flex-row items-center justify-end">
              <button className="flex flex-row items-center py-3 px-4 gap-2 shadow-[3px_3px_10px_0px_#789BD399,-3px_-3px_10px_0px_#FFFFFF] rounded-xl text-[#6A6A6A] font-semibold text-nowrap">
                <SortBy/>
                Sort By
              </button>
            </div>
            <div className="w-full flex flex-row items-center justify-end">
              <button className="flex flex-row items-center py-3 px-4 gap-2 shadow-[3px_3px_10px_0px_#789BD399,-3px_-3px_10px_0px_#FFFFFF] rounded-xl text-[#6A6A6A] font-semibold text-nowrap">
                <Filter/>
                Filter
              </button>
            </div>
          </div>
        </div>
        <DataTableTasks />
      </Container>
  )
}




  function DataTableTasks() {
    return (
      <div className="w-full overflow-auto">
        <Table>
          <TableHeader className=" text-gray-600 border-0">
            <TableRow className=" border-0 hover:bg-transparent border-r-[20px] border-l-[20px] border-transparent border-b-0">
              <TableHead className=""></TableHead>
              <TableHead className="">Task Name</TableHead>
              <TableHead className="">Status</TableHead>
              <TableHead className="">Created On</TableHead>
              <TableHead className="">Assigned to</TableHead>
              <TableHead className=""></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-[#3A3A3A] text-base border-0 mb-5 px-10 overflow-auto ">
            {dataFilesTasks.map((row, index) => (
              <TableRow
                key={row.id}
                className={`h-[60px]  text-[#1E1B39] hover:bg-transparent hover:shadow-[3px_3px_10px_0px_#789BD399,-5px_-5px_10px_0px_#FFFFFF] rounded-lg mb-5 border-l-[20px] border-transparent border-b-0 `}
              >
                <TableCell className=" ">{`${index + 1}.`}</TableCell>
                <TableCell>
                  <div className="flex flex-col min-w-[200px]">
                    <p className="font-semibold">{row.task}</p>
                    <p className="text-[#6A6A6A]">{row.description}</p>
                  </div>
                </TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.createdOn}</TableCell>
                <TableCell>{row.assignedTo}</TableCell>
                <TableCell>
                  <EllipsisVertical
                    size={16}
                    color="#1E1B39"
                    className="cursor-pointer"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  