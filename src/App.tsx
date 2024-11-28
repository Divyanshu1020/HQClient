

export default function App() {
  return (
    <div className="App ">
      <div className="flex flex-col text-5xl gap-10 items-center justify-center w-full h-full">
        <a href="dashboard">Page1</a>
        <a href="page2">Page2</a>
      </div>
    </div>
  );
}





// const midCardData = [
//   {
//     title: "Project Completion",
//     icon: "",
//     data: "58%",
//   },
//   {
//     title: "Working Team Count",
//     icon: "",
//     data: "04",
//   },
//   {
//     title: "Expected deadline",
//     icon: "",
//     data: "20th july, 2024",
//     data1: "Saturday",
//   },
// ];

// function Main() {
//   return (
//     <div className="w-full  flex-1 p-6 flex flex-col gap-4 overflow-auto">
//       <div className=" w-full  flex flex-row items-center justify-between">
//         <div className="flex flex-col gap-1">
//           {/* headline */}
//           <h1 className="text-3xl font-semibold">Project Overview</h1>
//           <p className="text-[#6A6A6A] text-base font-normal">
//             Project / Overview{" "}
//           </p>
//         </div>

//         <div>
//           <button className="flex flex-row items-center py-3 px-4 gap-2 shadow-[3px_3px_10px_0px_#789BD399,-3px_-3px_10px_0px_#FFFFFF] rounded-xl text-[#155EEF]">
//             <Plus color="#155EEF" />
//             Export Report
//           </button>
//         </div>
//       </div>

//       <div className="w-full flex flex-row gap-4 mt-5">
//         <div className="w-full flex flex-col 2xl:flex-row gap-10">
//           {/* left chart */}
//           <div className="2xl:w-[50%] h-[400px]  rounded-xl shadow-[5px_5px_15px_0px_#789BD399,-5px_-5px_20px_0px_#FFFFFFCC] flex flex-row items-center justify-center">
//             <div className="w-full h-full flex flex-col gap-2 p-5">
//               <div className="w-full flex flex-col">
//                 <h2 className="text-xl font-semibold">Project Tasks Report</h2>
//                 <p className="text-[#6A6A6A] text-base font-normal">
//                   Total Tasks - 94
//                 </p>
//               </div>
//               <div className=" h-[1px] w-full bg-[#D0D5DD]"></div>

//               <div className="w-full h-full flex flex-row">
//                 <div className=" w-1/2  min-w-[280px] flex flex-col gap-2 h-full items-center justify-center">
//                   <ChartLeft />
//                 </div>
//                 <div className="w-1/2   flex-col gap-2 h-full items-center justify-center flex ">
//                   <div className=" flex flex-col font-medium text-lg w-full ">

//                     <div className="flex flex-row items-center justify-between pr-8">
//                       <div className="flex flex-row items-center gap-5">
//                         <div className="h-4 w-4 rounded-full bg-[#155EEF]"></div>
//                         <div className="">Completed</div>
//                       </div>
//                       <div className="flex flex-row text-[#615E83] items-center">56</div>
//                     </div>

//                     <div className="flex flex-row items-center justify-between pr-8">
//                       <div className="flex flex-row items-center gap-5">
//                         <div className="h-4 w-4 rounded-full bg-[#155EEF]"></div>
//                         <div className="">On going</div>
//                       </div>
//                       <div className="flex flex-row text-[#615E83] items-center">12</div>
//                     </div>

//                     <div className="flex flex-row items-center justify-between pr-8">
//                       <div className="flex flex-row items-center gap-5">
//                         <div className="h-4 w-4 rounded-full bg-[#155EEF]"></div>
//                         <div className="">Pending</div>
//                       </div>
//                       <div className="flex flex-row text-[#615E83] items-center">12</div>
//                     </div>

//                     <div className="flex flex-row items-center justify-between pr-8">
//                       <div className="flex flex-row items-center gap-5">
//                         <div className="h-4 w-4 rounded-full bg-[#155EEF]"></div>
//                         <div className="">Refactoring</div>
//                       </div>
//                       <div className="flex flex-row text-[#615E83] items-center">03</div>
//                     </div>


//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* right chart */}
//           <div className=" 2xl:w-[50%]   h-[400px]  rounded-xl shadow-[5px_5px_15px_0px_#789BD399,-5px_-5px_20px_0px_#FFFFFFCC] flex flex-row items-center justify-center">
//             <div className="w-full h-full flex flex-col gap-2 p-5">
//               <div className="w-full flex flex-row items-center justify-between">
//                 <div className=" flex flex-col">
//                   <h2 className="text-xl font-semibold">Project Hours Count</h2>
//                   <p className="text-[#6A6A6A] text-base font-normal">
//                     Total Hours - 94
//                   </p>
//                 </div>

//                 <div className="flex flex-row gap-2">
//                   <button>7 days</button>
//                 </div>
//               </div>

//               <div className=" h-[1px] w-full bg-[#D0D5DD]"></div>

//               <div className=" w-full  h-full flex flex-row justify-center overflow-hidden">
//                 <ChartRight />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mid Cards */}

//       <div className=" mt-5 w-full hidden md:block   rounded-xl shadow-[3px_3px_10px_0px_#789BD399,-3px_-3px_10px_0px_#FFFFFF] p-6">
//         <div className="w-full    h-[150px] flex flex-row items-center text-nowrap">
//           <div className="w-full h-full flex flex-col items-center justify-center gap-4 ">
//             <h4 className="text-lg uppercase font-semibold">
//               {midCardData[0].title}
//             </h4>
//             <div className=" flex flex-row items-center justify-center gap-10">
//               <div className="h-[65px] w-[65px] bg-slate-400"></div>
//               <div className=" font-semibold text-5xl">
//                 {midCardData[0].data}
//               </div>
//             </div>
//           </div>

//           <div className="min-w-[10px]  rounded-full h-full bg-[#344054]"></div>

//           <div className="w-full h-full flex flex-col items-center justify-center gap-4 ">
//             <h4 className="text-lg uppercase font-semibold">
//               {midCardData[1].title}
//             </h4>
//             <div className=" flex flex-row items-center justify-center gap-10">
//               <div className="h-[65px] w-[65px] bg-slate-400"></div>
//               <div className=" font-semibold text-5xl">
//                 {midCardData[1].data}
//               </div>
//             </div>
//           </div>

//           <div className="min-w-[10px] hidden lg:block rounded-full h-full bg-[#344054]"></div>

//           <div className="w-full h-full hidden lg:flex flex-col items-center justify-center gap-4 ">
//             <h4 className="text-lg uppercase font-semibold">
//               {midCardData[2].title}
//             </h4>
//             <div className=" flex flex-row items-center justify-center gap-10">
//               <div className="h-[65px] w-[65px] bg-slate-400"></div>
//               <div className=" font-semibold text-xl flex flex-col">
//                 {midCardData[2].data} <span>{midCardData[2].data1}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className=" md:hidden mt-5 w-full   rounded-xl shadow-[3px_3px_10px_0px_#789BD399,-3px_-3px_10px_0px_#FFFFFF] p-6">
//         <div className="w-full  h-[150px] flex flex-row items-center">
//           <div className="w-full h-full flex flex-col items-center justify-center gap-4 ">
//             <h4 className="text-lg uppercase font-semibold">
//               {midCardData[0].title}
//             </h4>
//             <div className=" flex flex-row items-center justify-center gap-10">
//               <div className="h-[65px] w-[65px] bg-slate-400">{""}</div>
//               <div className=" font-semibold text-5xl flex flex-col">
//                 {midCardData[0].data}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className=" md:hidden mt-5 w-full   rounded-xl shadow-[3px_3px_10px_0px_#789BD399,-3px_-3px_10px_0px_#FFFFFF] p-6">
//         <div className="w-full  h-[150px] flex flex-row items-center">
//           <div className="w-full h-full flex flex-col items-center justify-center gap-4 ">
//             <h4 className="text-lg uppercase font-semibold">
//               {midCardData[1].title}
//             </h4>
//             <div className=" flex flex-row items-center justify-center gap-10">
//               <div className="h-[65px] w-[65px] bg-slate-400">{""}</div>
//               <div className=" font-semibold text-5xl flex flex-col">
//                 {midCardData[1].data}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className=" lg:hidden mt-5 w-full   rounded-xl shadow-[3px_3px_10px_0px_#789BD399,-3px_-3px_10px_0px_#FFFFFF] p-6">
//         <div className="w-full  h-[150px] flex flex-row items-center">
//           <div className="w-full h-full flex flex-col items-center justify-center gap-4 ">
//             <h4 className="text-lg uppercase font-semibold">
//               {midCardData[2].title}
//             </h4>
//             <div className=" flex flex-row items-center justify-center gap-10">
//               <div className="h-[65px] w-[65px] bg-slate-400"></div>
//               <div className=" font-semibold text-lg flex flex-col">
//                 {midCardData[2].data}
//                 <span>{midCardData[2].data1}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Figma Designs */}

//       <div className="w-full flex flex-col gap-6 mt-6">
//         <h1 className="text-3xl font-semibold">Figma Designs</h1>
//         <div className=" w-full h-[550px] rounded-[50px] shadow_figma_design_box ">
//           <div className=" w-full h-full flex flex-row ">
//             <div className=" h-full  w-fit max-w-[60%] rounded-l-[50px] shadow_figma_design_image overflow-hidden">
//               <img
//                 src="https://s3-alpha-sig.figma.com/img/fb21/4f4b/ae30ef392fd4e151f8177f058414e094?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IBHktkwIfSCdwoo5Ww0JkFll1FXUBUCJhmS8MTzsp0k7-m~gtZk~g1MtQfzbRt07kZWQJkcpR~3HpMMB8yymwwdiJ22IFhN6o9oOm69HGWWpSPj3r76xKcS4TRd~ocTf~eLUEpW8Q4F4Iz17zDr3ClnpMTtNdRSeU5BxHQENg9pvsW40HeB8EqqHVT7Zwscg6svVxL6frV4R~ibApBxxLEttsaC3iYbQg1KH5pF-oKgZPR6WC6Aa5rZKMUoC7Wf1AZ8g~dYsZz6oviWcX8Ljb8J6OYGGjvpDBA9UaSBh0-uLuBC-R~rfUAI~3Xur47E3D9aDh0d8I01QeJOYnpf9bw__"
//                 className=" relative z-[-2] h-full      "
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/*  Deployments */}

//       <div className="w-full flex flex-col gap-6 mt-6">
//         <h1 className="text-3xl font-semibold">Deployments</h1>
//         <div className=" w-full  rounded-[50px] shadow_deployment_box overflow-hidden  ">
//           <img
//             src="https://s3-alpha-sig.figma.com/img/fb21/4f4b/ae30ef392fd4e151f8177f058414e094?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IBHktkwIfSCdwoo5Ww0JkFll1FXUBUCJhmS8MTzsp0k7-m~gtZk~g1MtQfzbRt07kZWQJkcpR~3HpMMB8yymwwdiJ22IFhN6o9oOm69HGWWpSPj3r76xKcS4TRd~ocTf~eLUEpW8Q4F4Iz17zDr3ClnpMTtNdRSeU5BxHQENg9pvsW40HeB8EqqHVT7Zwscg6svVxL6frV4R~ibApBxxLEttsaC3iYbQg1KH5pF-oKgZPR6WC6Aa5rZKMUoC7Wf1AZ8g~dYsZz6oviWcX8Ljb8J6OYGGjvpDBA9UaSBh0-uLuBC-R~rfUAI~3Xur47E3D9aDh0d8I01QeJOYnpf9bw__"
//             className=" relative z-[-2]   w-full   "
//             alt=""
//           />
//         </div>
//       </div>

//       <div className="w-full flex flex-col gap-6 mt-6">
//         <div className=" w-full  rounded-[30px] shadow_figma_design_box p-6 ">
//           <h2 className="text-lg font-semibold">ADDITONAL PROJECT INFO</h2>

//           <div className=" w-full h-full flex flex-col  md:flex-row p-3 ">
//             <div className="p-3 font-normal pl-0 md:w-1/2 h-full  flex flex-col gap-3 md:border-r md:border-b-0 border-b border-[#9c9c9c]">
//               <div className="w-full flex flex-col  ">
//                 <h2 className="text-lg  text-[#344054]">Company Name</h2>
//                 <p className="text-lg  text-[#6A6A6A]">CSK Textile</p>
//               </div>

//               <div className="w-full flex flex-col  ">
//                 <h2 className="text-lg  text-[#344054]">Company Link</h2>
//                 <p className="text-lg  text-[#6A6A6A]">www.companylink.com</p>
//               </div>

//               <div className="w-full flex flex-col  ">
//                 <h2 className="text-lg  text-[#344054]">Company Description</h2>
//                 <p className="text-lg  text-[#6A6A6A]">
//                   This is a long description for the company. This company is a
//                   really great company. I dont know about this company but it is
//                   a great company.
//                 </p>
//               </div>

//               <div className="w-full flex flex-col  ">
//                 <h2 className="text-lg  text-[#344054]">Company Logo</h2>
//                 <p className="text-lg  text-[#6A6A6A]">www.companylink.com</p>
//               </div>

//               <div className="w-full flex flex-col  ">
//                 <h2 className="text-lg  text-[#344054]">
//                   Company Working Locations
//                 </h2>
//                 <p className="text-lg  text-[#6A6A6A]">
//                   Prayagraj, Vanarasi, Jhansi
//                 </p>
//               </div>

//               <div className="w-full flex flex-col  ">
//                 <h2 className="text-lg  text-[#344054]">Company Contact No</h2>
//                 <p className="text-lg  text-[#6A6A6A]">+91 01928 20392</p>
//               </div>

//               <div className="w-full flex flex-col  ">
//                 <h2 className="text-lg  text-[#344054]">Company Address</h2>
//                 <p className="text-lg  text-[#6A6A6A]">
//                   Street No 1, 2nd Floor on Gojo Building, Jhunsi, Pryagraj,
//                   Uttar Pradesh
//                 </p>
//               </div>

//               <div className="w-full flex flex-col  ">
//                 <h2 className="text-lg  text-[#344054]">Company Size</h2>
//                 <p className="text-lg  text-[#6A6A6A]">150 Employees</p>
//               </div>
//             </div>
//             <div className="p-3 pl-0 md:pl-6 font-normal md:w-1/2 h-full  flex flex-col gap-3 ">
//               <div className="w-full flex flex-col  ">
//                 <h2 className="text-lg  text-[#344054]">Project Name</h2>
//                 <p className="text-lg  text-[#6A6A6A]">CSK Textile</p>
//               </div>

//               <div className="w-full flex flex-col  ">
//                 <h2 className="text-lg  text-[#344054]">Project Category</h2>
//                 <p className="text-lg  text-[#6A6A6A]">Ecommerce</p>
//               </div>

//               <div className="w-full flex flex-col  ">
//                 <h2 className="text-lg  text-[#344054]">
//                   What kind of project is this?
//                 </h2>
//                 <p className="text-lg  text-[#6A6A6A]">
//                   This is a long description for the company. This company is a
//                   really great company. I dont know about this company but it is
//                   a great company.
//                 </p>
//               </div>

//               <div className="w-full flex flex-col  ">
//                 <h2 className="text-lg  text-[#344054]">Project SOW</h2>
//                 <p className="text-lg  text-[#6A6A6A]">www.companylink.com</p>
//               </div>

//               <div className="w-full flex flex-col  ">
//                 <h2 className="text-lg  text-[#344054]">Expected Deadline</h2>
//                 <p className="text-lg  text-[#6A6A6A]">03 February, 2024</p>
//               </div>

//               <div className="w-full flex flex-col  ">
//                 <h2 className="text-lg  text-[#344054]">Maintenance Needed</h2>
//                 <p className="text-lg  text-[#6A6A6A]">Yes</p>
//               </div>

//               <div className="w-full flex flex-col  ">
//                 <h2 className="text-lg  text-[#344054]">
//                   Milestones wise Budeget
//                 </h2>
//                 <p className="text-lg  text-[#6A6A6A]">
//                   Milestone 1: 100,000 - 150,000
//                 </p>
//                 <p className="text-lg  text-[#6A6A6A]">
//                   Milestone 2: 50,000 - 100,000
//                 </p>
//                 <p className="text-lg  text-[#6A6A6A]">
//                   Milestone 3: 150,000 - 250,000
//                 </p>
//               </div>

//               <div className="w-full flex flex-col  ">
//                 <h2 className="text-lg  text-[#344054]">Company Size</h2>
//                 <p className="text-lg  text-[#6A6A6A]">150 Employees</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const chartDataLeft = [
//   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//   { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
//   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//   { browser: "other", visitors: 90, fill: "var(--color-other)" },
// ];

// const chartConfigLeft = {
//   visitors: {
//     label: "Visitors",
//   },
//   chrome: {
//     label: "Chrome",
//     color: "hsl(var(--chart-1))",
//   },
//   safari: {
//     label: "Safari",
//     color: "hsl(var(--chart-2))",
//   },
//   firefox: {
//     label: "Firefox",
//     color: "hsl(var(--chart-3))",
//   },
//   edge: {
//     label: "Edge",
//     color: "hsl(var(--chart-4))",
//   },
//   other: {
//     label: "Other",
//     color: "hsl(var(--chart-5))",
//   },
// } satisfies ChartConfig;

// export function ChartLeft() {
//   return (
//     <ChartContainer
//       config={chartConfigLeft}
//       className="mx-auto aspect-square h-full "
//     >
//       <PieChart>
//         <ChartTooltip
//           cursor={false}
//           content={<ChartTooltipContent hideLabel />}
//         />
//         <Pie data={chartDataLeft} dataKey="visitors" nameKey="browser" />
//       </PieChart>
//     </ChartContainer>
//   );
// }

// const chartData = [
//   { month: "January", desktop: 186 },
//   { month: "February", desktop: 805 },
//   { month: "March", desktop: 237 },
//   { month: "April", desktop: 73 },
//   { month: "May", desktop: 209 },
//   { month: "June", desktop: 214 },
// ];

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "hsl(var(--chart-1))",
//   },
// } satisfies ChartConfig;

// export function ChartRight() {
//   return (
//     <ChartContainer className="w-full" config={chartConfig}>
//       <LineChart
//         accessibilityLayer
//         data={chartData}
//         margin={
//           {
//             // left: 12,
//             // right: 12,
//           }
//         }
//       >
//         <CartesianGrid vertical={false} />
//         <XAxis
//           dataKey="month"
//           tickLine={false}
//           axisLine={false}
//           tickMargin={8}
//           tickFormatter={(value) => value.slice(0, 3)}
//         />
//         <ChartTooltip
//           cursor={false}
//           content={<ChartTooltipContent hideLabel />}
//         />
//         <Line
//           dataKey="desktop"
//           type="linear"
//           stroke="var(--color-desktop)"
//           strokeWidth={2}
//           dot={false}
//         />
//       </LineChart>
//     </ChartContainer>
//   );
// }
