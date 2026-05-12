import type { IComposition } from "@/types/bia";
import HalfDonutChart, { type SegmentData } from "../ui/HalfDonutChart";

interface CompositionCardProps {
  title: string;
  weight: number;
  value: number;
  low: number;
  high: number;
}

export function CompositionCard({ title, weight, value, low, high }: CompositionCardProps) {
  const stateColor = {
    "체수분": "bg-accent ",
    "단백질": "bg-orangee ",
    "무기질": "bg-blackk ",
    "체지방": "bg-redd"
  } [title];
  const textColor = {
    "체수분": "text-accent ",
    "단백질": "text-orangee ",
    "무기질": "text-blackk ",
    "체지방": "text-redd"
  } [title];
  const changeTextColor = {
    0: "text-accent ",
    1: "text-redd"
  } [value];
  const percentage = ((value / weight) * 100).toFixed(1);


  // eslint-disable-next-line no-useless-assignment
  let barPosition = 0;

  if (value < low) {

    barPosition = (value / low) * 33.3;
  } else if (value <= high) {

    const range = high - low;
    const offset = value - low;
    barPosition = 33.3 + (offset / range) * 33.3;
  } else {
    const range = high - low;
    const offset = value - high;
    barPosition = 66.6 + Math.min((offset / range) * 33.3, 33.3);
  }

  return (
    <div className="flex h-full items-center gap-2 w-full ">
      {/* 타이틀 박스 */}
      <div className={`p-2 text-center text-xs font-bold text-white rounded-lg ${stateColor}`}>
        {title}
      </div>

      {/* 메인 데이터 영역 */}
      <div className="flex flex-1 h-full items-center bg-sub-100 rounded-xl px-2 gap-2">
        {/* 체중 대비 백분율 */}
        <div className="w-12 text-center text-[13px] font-bold text-sub-800">
          {percentage}%
        </div>

        {/* 3단계 눈금형 프로그레스 바 */}
        <div className="relative flex-1 h-full flex items-center">
          {/* 배경 (3등분) */}
          <div className="absolute inset-0 flex">
            <div className="flex-1 bg-sub-100 rounded-l-md" title="표준 이하" />
            <div className="flex-1 bg-sub-200" title="표준" />
            <div className="flex-1 bg-sub-100 rounded-r-md" title="표준 이상" />
          </div>
          
          {/* 실제 수치 막대 */}
          <div className="flex flex-col flex-1 gap-1.5">
            <div 
              className={`relative h-2 rounded-sm transition-all duration-700 ease-out ${stateColor}`}
              style={{ width: `${barPosition}%` }}
            />
            <div 
              className={`relative h-2 rounded-r-full transition-all duration-700 ease-out bg-sub-300`}
              style={{ width: `${barPosition}%` }}
            />
          </div>

          {/* 실제 측정 값 (박스를 여기 안으로 옮겼습니다) */}
          <div 
            className="absolute right-0 z-10 w-fit" // 가장 오른쪽에 고정, 고정 너비(w-12)
            style={{ 
              top: '50%',
              transform: 'translateY(-50%)', // 세로 중앙 정렬
            }}
          >
            <div className="bg-white/90 rounded-lg p-2 flex items-center justify-center gap-1 shadow-sm">
              <span className={`w-1.5 h-1.5 rounded-full ${stateColor}`} />
              <span className={`text-[12px] font-bold ${textColor}`}>{value}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`flex h-full items-center bg-sub-100 rounded-xl px-2 ${changeTextColor}`}>
        {/* TODO 여기 이전 기록과 변화량 추가요망 */}
          -0.2
      </div>
    </div>
  );
}


export default function Composition({data}: {data: IComposition}) {

  const mainComps = [
    {
      title: "체수분",
      value: data.moisture_content,
      low: data.moisture_content_std_min,
      high: data.moisture_content_std_max,
    },
    {
      title: "단백질",
      value: data.protein_mass,
      low: data.protein_mass_std_min,
      high: data.protein_mass_std_max,
    },
    {
      title: "무기질",
      value: data.amount_of_inorganic_salt,
      low: data.amount_of_inorganic_salt_std_min,
      high: data.amount_of_inorganic_salt_std_max,
    },
    {
      title: "체지방",
      value: data.body_fat_mass,
      low: data.body_fat_mass_std_min,
      high: data.body_fat_mass_std_max,
    },
  ];

  const donutComps : SegmentData[] = [
    {
      label: "체수분",
      percentage: (data.moisture_content / data.weight) * 100,
      color: "#5B93FF"
    },
    {
      label: "단백질",
      percentage: (data.protein_mass / data.weight) * 100,
      color: "#FFA546"
    },
    {
      label: "무기질",
      percentage: (data.amount_of_inorganic_salt / data.weight) * 100,
      color: "#4C4C4C"
    },
    {
      label: "체지방",
      percentage: (data.body_fat_mass / data.weight) * 100,
      color: "#FF766C"
    }

  ]
  return (
    <div className="flex flex-col ">
      
      <div className="flex items-center gap-2 ">
        <div className="w-4 h-4 rounded-sm bg-accent" />
        <div className="text-accent font-bold ">
          체성분 & 체수분 밸런스
        </div>
      </div>

      <div className="flex flex-col w-full gap-2">
        {/* 1. 상단 헤더 영역 (전체 너비를 사용하며 하단 카드들의 바 위치와 정렬) */}
        <div className="flex w-full items-center text-xs text-gray-500 font-bold">
          {/* 차트 너비만큼 비워주기 (차트 영역이 차지하는 너비에 맞춰 조정하세요) */}
          <div className="w-[160px]" /> 

          {/* 카드의 타이틀 + % 수치 너비만큼 비워주기 */}
          <div className="w-16" /> 

          {/* 표준 영역: 하단 프로그레스 바와 수직으로 일치하게 됨 */}
          <div className="flex-1 grid grid-cols-3 text-center">
            <span>표준 이하</span>
            <span>표준</span>
            <span>표준 이상</span>
          </div>

          {/* 변화 영역 */}
          <div className="w-16 text-right pr-3">
            <span>변화</span>
          </div>
        </div>

        {/* 2. 하단 컨텐츠 영역 (차트와 카드 리스트가 같은 높이를 공유) */}
        <div className="flex flex-1 gap-2 items-stretch">
          {/* 도넛 차트 컨테이너 (정중앙 배치) */}
          <div className="w-[100px] flex items-start">
            <HalfDonutChart data={donutComps} radius={80} />
          </div>

          {/* 카드 리스트 컨테이너 (차트 높이에 맞춰 카드 간격이 자동 조절되도록 justify-between 사용 가능) */}
          <div className="flex flex-col flex-1 gap-2">
            {mainComps.map((comp) => (
              <CompositionCard
                key={comp.title}
                title={comp.title}
                weight={data.weight} 
                value={comp.value}
                low={comp.low}
                high={comp.high}
              />
            ))}
          </div>

          
        </div>
        
      </div>

      <div className="flex flex-1 mt-4 px-4 py-2 bg-sub-100 border border-sub-200 rounded-md text-blackk text-xs items-center">
        <span className="font-bold text-blackk">[표준범위] </span>
        <span className="ml-4 text-blackk"> 체수분: 55~65% / 단백질: 15~18% / 무기질: 5~6% / 체지방: 10~20%</span>
      </div>
    </div>
  );
};