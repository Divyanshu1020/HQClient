

import MainContainer from "@/components/reusables/mainContainer";
import Deployment from "./components/deployment";
import Figma from "./components/figma";
import Headline from "./components/headline";
import HoursCountCard from "./components/hoursCountCard";
import MidInformationCard from "./components/midInformationCard";
import ProjectReportCard from "./components/projectReportCard";
import ProjectInfo from "./components/projectInfo";

export default function Dashboard() {
  return <Main />;
}

function Main() {
  return (
    <MainContainer>
      <Headline />

      <div className="w-full flex flex-row gap-4 mt-5">
        <div className="w-full flex flex-col xl:flex-row gap-10">
          <ProjectReportCard />

          <HoursCountCard />
        </div>
      </div>

      <MidInformationCard />

      <Figma />

      <Deployment />

      <ProjectInfo/>
    </MainContainer>
  );
}
