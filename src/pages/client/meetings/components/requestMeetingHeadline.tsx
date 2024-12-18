import SquareButton from "@/components/reusables/squareButton";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RequestMeetingHeadline({handleSubmit}:{handleSubmit:()=>void}) {
  const navigate = useNavigate();
  return (
    <div className=" w-full my-4  flex flex-row items-center justify-between">
      <div className="flex flex-col gap-1">
        {/* headline */}
        <h1 className="text-3xl font-semibold">Request a Meeting</h1>
        <p className="text-[#6A6A6A] text-base font-normal">
          {"Project / meetings / request meeting"}
        </p>
      </div>

      <div className="flex flex-row gap-4">
        <SquareButton
          className="text-[#6A6A6A]"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </SquareButton>

        <SquareButton
          onClick={() => {
            handleSubmit();
          }}
        >
          <Plus color="#610646" />
          Confirm Request
        </SquareButton>
      </div>
    </div>
  );
}
