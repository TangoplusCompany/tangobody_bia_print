import type { IBodyBenchmark } from '@/types/bia';
import fat from '../../assets/img_index_fat.png';

interface MetricItem {
  label: string;
  value: string | number;
  unit?: string;
}

interface MetricListProps {
  title: string;
  titleValue: string | number;
  items: MetricItem[];
}

function MetricList({ title, titleValue, items }: MetricListProps) {
  return (
    <div className="flex flex-col w-full gap-0.5">
      {/* 상단 메인 타이틀 (빨간색 강조) */}
      <div className="text-redd text-sm font-bold">
        {title}: {titleValue}
      </div>

      {/* 구분선 */}
      <div className="relative h-[2px] rounded-full bg-sub-800 shrink-0 mr-2" />

      {/* 리스트 영역 */}
      <div className="flex flex-col text-[10px] text-black leading-[1.5]">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center ">
            <span className="font-medium text-sub-600">{item.label}</span>
            <span className="font-bold">
              {item.value}
              {item.unit && <span className="ml-0.5 font-normal">{item.unit}</span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BodyBenchMark({data}: {data: IBodyBenchmark}) {
  const radius = 60;
  const strokeWidth = 12;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (data.body_score / 100) * circumference;
  const healthMetrics = [
      { label: "목표 체중", value: data.target_weight, unit: "kg" },
      { label: "지방 조절량", value: data.fat_control_amount, unit: "kg" },
      { label: "근육 조절량", value: data.muscle_control, unit: "kg" },
      { label: "권장섭취열량", value: data.recommended_intake_kcal, unit: "kcal" },
      { label: "제지방량", value: data.lean_body_weight, unit: "kg" },
      { label: "근육량", value: data.muscle_mass, unit: "kg" },
      { label: "골량", value: data.bone_mass, unit: "kg" },
      { label: "세포질량", value: data.body_cell_mass, unit: "kg" },
      { label: "복부/내장지방 관련", value: data.waist_to_hip_ratio, unit: "" },
      { label: "표준 체중 대비 체중 비율", value: data.obesity_percentage, unit: "%" },
      { label: "피하지방", value: data.subcutaneous_fat_rate, unit: "%" },
    ];
  return (
    <div className='flex flex-col'>
      <div className='flex w-fit bg-accent rounded-br-xl rounded-tl-xl text-base text-white font-semibold px-2 py-1'>
        주요건강 지표
      </div>

      {/* circle */}
      <div className="flex justify-center items-center py-6 relative">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90" // 12시 방향부터 시작하도록 회전
        >
          {/* 배경 트랙 (회색) */}
          <circle
            stroke="#E5E7EB" // 또는 'bg-sub-200' 색상
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          {/* 진행 바 (파란색) */}
          <circle
            stroke="#5D8DFF" // 'bg-accent' 색상
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.8s ease-in-out' }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        
        {/* 중앙 점수 텍스트 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-baseline">
            <span className="text-5xl font-bebas font-bold text-gray-600 leading-none">
              {data.body_score}
            </span>
            <span className="text-lg font-bold text-gray-500 ml-1">점</span>
          </div>
        </div>
      </div>


      <div className='flex flex-1 flex-col gap-2 px-2'>
        <div className='flex gap-2'>
          <img 
            src={fat}
            alt='건강지표이미지'
            className='rounded-2xl w-12 h-12 my-auto border-2 border-sub-200/60'
          >
          </img>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-bold text-black'>
              비만형(체지방 과다)
            </div>
            <div className='text-[10px] leading-[1.3] break-keep text-black'>
              근육, 지방 많음 운동 능력은 좋지만 지방량 비율이 높아 건강상 리스크 존재
            </div>
          </div>
        </div>

        <div className='grid grid-rows-[40%_60%] gap-4 h-full'>
          <MetricList 
            title="체중 조절량" 
            titleValue={`${data.weight_control}kg`} 
            items={healthMetrics} 
          />
        </div>
      </div>
    </div>
  );
}