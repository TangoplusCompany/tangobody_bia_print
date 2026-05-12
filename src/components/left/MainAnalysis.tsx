import type { IMainAnalysis } from "@/types/bia";
import React from "react";


interface IAnalysisCardProps {
  label: string;
  value: number;
  unit: string;
  grade: number; // 0: 낮음, 1: 보통, 2: 높음
}
  // grade에 따른 위치(%) 및 텍스트/색상 매핑
  // const posMap = { 0: "30%", 1: "50%", 2: "70%" };
  const labelMap = { 0: "낮음", 1: "보통", 2: "높음" };

const AnalysisCard = ({ label, value, unit, grade }: IAnalysisCardProps) => {
  // 상태에 따른 배경색을 바꾸고 싶다면 여기서 처리 가능합니다.
  const statusLabel = labelMap[grade as keyof typeof labelMap];
  // const leftPos = posMap[grade as keyof typeof posMap];
  return (
    <div className="bg-sub-100 border border-sub-200 rounded-sm py-1 flex flex-col items-center gap-2">
      {/* 라벨 */}
      <span className="text-[10px] font-bold text-sub-800 mb-0.5">{label}</span>
      
      {/* 수치 */}
      <div className="flex items-baseline gap-0.5 leading-[1]">
        <span className="text-[10px] font-bold text-sub-800">{value.toFixed(1)}</span>
        <span className="text-[8px] text-sub-400 font-medium">{unit}</span>
      </div>

      {/* 게이지 바 */}
      {/* <div className="relative w-12 h-1 bg-sub-300 rounded-full my-0.5">
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-sub-400 border border-sub-100 rounded-full transition-all duration-300"
          style={{ left: leftPos, transform: `translate(-50%, -50%)` }}
        />
      </div> */}

      {/* 하단 등급 표시 */}
      <div className="mt-0.5 px-1 bg-sub-300 rounded-sm text-white text-[8px] font-bold text-center">
        {statusLabel}
      </div>
    </div>
  );
};


export default function MainAnalysis({
  data,
  prevMuscleMassIndex
}: {
  data: IMainAnalysis
  prevMuscleMassIndex: number
}) {

  const typeInitial = ({
    0: "C",
    1: "I",
    2: "D",
    3: "U"
  } as const)[data.result_cid_type as 0 | 1 | 2 | 3];
  const typeTitle = ({
    0: "C형 근감소성 비만",
    1: "I형 완전표준형",
    2: "D형 비만",
    3: "U형 불균형"
  } as const)[data.result_cid_type as 0 | 1 | 2 | 3];
  const diffMuscleMassIndex = data.skeletal_muscle_mass_index - prevMuscleMassIndex
  // const statusLabel = labelMap[data. as keyof typeof labelMap];
  // const leftPos = posMap[grade as keyof typeof posMap];
  return (
    <div className="grid grid-cols-2 w-full mt-4 gap-4">
      
      <div className="flex flex-col h-full justify-center gap-6">
        <div className="grid grid-cols-[25%_75%] gap-2 items-center">
          <div className="w-16 h-16 bg-sub-100 rounded-3xl border-2 border-sub-200 flex justify-center">
            <span 
              className="text-[52px] font-bebas font-bold text-sub-200 leading-none flex items-center mt-2" 
              style={{ WebkitTextStroke: '1px #7E7E7E' }}
            >
              {typeInitial}
            </span>
          </div>

          <div className="text-sub-800 flex flex-col">
            <span className="text-sm font-bold">{typeTitle}</span>
            <span className="text-[10px] leading-[1.3] break-keep ">{data.result_cid_comment}</span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-4 text-[10px] text-center text-sub-600 mb-2 flex items-center">
            <span>체성분 밸런스</span>
            <span>표준 이하</span>
            <span>표준</span>
            <span>표준 이상</span>

          </div>
          <div className="grid grid-cols-[1fr_3fr] gap-x-4 gap-y-3 px-4 mt-2">
            {[
              { label: "체수분", value: data.result_body_water_grade }, // 0, 1, 2 중 하나
              { label: "단백질", value: data.result_protein_grade }, 
              { label: "무기질", value: data.result_mineral_grade },
            ].map((item, index) => {
              // 0 -> 30%, 1 -> 50%, 2 -> 70% 매핑
              const leftPos = item.value === 1 ? "25%" : item.value === 2 ? "50%" : "75%";

              return (
                <React.Fragment key={index}>
                  {/* 라벨 */}
                  <div className="text-sm text-sub-800 font-medium self-center">
                    {item.label}
                  </div>
                  
                  {/* 바 및 원 위치 */}
                  <div className="relative flex items-center col-start-2">
                    {/* 전체 회색 바 */}
                    <div className="w-full h-1.5 bg-sub-100 rounded-full"></div>
                    {/* 등급에 따른 원 위치 */}
                    <div 
                      className="absolute w-3.5 h-3.5 bg-accent rounded-full border-2 border-white"
                      style={{ 
                        left: leftPos, 
                        transform: "translate(-50%, 0)" // 가로 중앙 정렬만 처리
                      }}
                    ></div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-rows-[30%_70%]">
        <div className="flex flex-col flex-1 bg-sub-100 border border-sub-200 rounded-sm py-1 px-4">
            <div className="flex items-center gap-2 ">
              <div className="w-4 h-4 rounded-sm bg-accent" />
              <div className="text-accent font-bold ">
                근감소수치
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center leading-none">
                    
              {/* 수치 */}
              <div className="flex flex-col text-center">
                <span className="text-sm font-bold text-sub-800">{data.skeletal_muscle_mass_index.toFixed(1)}</span>
                <span className="text-[8px] font-bold text-sub-800">(이전 대비 {-diffMuscleMassIndex.toFixed(1)})</span>
              </div>

              {/* 게이지 바 */}
              <div className="relative w-full h-1 bg-sub-300 rounded-full my-1  mx-8">
                {/* 위치 표시 원 */}
                {/* <div 
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-sub-400 border border-sub-100 rounded-full transition-all duration-300"
                  style={{ left: leftPos, transform: `translate(-50%, -50%)` }}
                /> */}
              </div>

            </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-1 py-1">
          <AnalysisCard 
            label="골격근량" 
            value={data.skeletal_muscle_mass} 
            unit="kg" 
            grade={data.result_skeletal_muscle_mass_grade} 
          />
          <AnalysisCard 
            label="내장지방" 
            value={data.visceral_fat_level} 
            unit="" 
            grade={data.result_visceral_fat_level_grade} 
          />
          <AnalysisCard 
            label="세포외 수분비" 
            value={data.extracellular_water_volume} 
            unit="" 
            grade={data.result_extracellular_water_grade} 
          />
          <AnalysisCard 
            label="체지방률" 
            value={data.body_fat_percentage} 
            unit="%" 
            grade={data.result_body_fat_percentage_grade} 
          />
          <AnalysisCard 
            label="기초대사량" 
            value={data.basal_metabolism_kcal} 
            unit="kcal" 
            grade={data.result_basal_metabolism_kcal_grade} 
          />
          <AnalysisCard 
            label="BMI" 
            value={data.bmi} 
            unit="" 
            grade={data.result_basal_metabolism_kcal_grade} 
          />
        </div>
      </div>
    </div>
  );
};