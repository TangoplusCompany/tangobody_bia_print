import './App.css'
import logoWhite from './assets/logo_white.png';
import BodyTypeChart from './components/right/BodyTypeChart';
import Recommend from './components/right/Recommend';
import Composition from './components/left/Composition';
import BodyModel from './components/left/BodyModel';
import TrendGraph from './components/left/TrendGraph';
import BodyBenchMark from './components/right/BodyBenchMark';
import MainAnalysis from './components/left/MainAnalysis';
import type { IBiaData } from './types/bia';

const dummyBiaData: IBiaData = {
  // IBiaInfo
  sn: 1024,
  server_sn: 5001,
  name: "홍길동",
  gender: 1, // 남성
  bia_version: 2,
  ws_stable_weight_kg: 75.5,
  br_input_height: 178,
  br_input_age: 30,
  measure_date: "2026-05-12 10:30:00",

  // IComposition (체성분)
  moisture_content: 42.5,
  moisture_content_std_min: 40.2,
  moisture_content_std_max: 49.1,
  body_fat_mass: 15.2,
  body_fat_mass_std_min: 10.5,
  body_fat_mass_std_max: 16.8,
  protein_mass: 15.3,
  protein_mass_std_min: 13.8,
  protein_mass_std_max: 15.2,
  amount_of_inorganic_salt: 4.1,
  amount_of_inorganic_salt_std_min: 3.7,
  amount_of_inorganic_salt_std_max: 4.5,
  result_body_water_grade: 2,
  result_protein_grade: 2,
  result_mineral_grade: 1,
  result_body_fat_mass_grade: "표준",
  result_weight_grade: "표준",

  // IMainAnalysis (주요 분석)
  result_skeletal_muscle_mass_grade: 1,
  result_body_fat_percentage_grade: 1,
  result_extracellular_water_grade: 1,
  result_basal_metabolism_kcal_grade: 1,
  skeletal_muscle_mass_index: 8.5,
  result_smi_grade: 1,
  skeletal_muscle_mass: 34.2,
  skeletal_muscle_mass_std_min: 31.5,
  skeletal_muscle_mass_std_max: 38.5,
  intracellular_water_volume: 26.8,
  intracellular_water_volume_std_min: 25.5,
  intracellular_water_volume_std_max: 31.2,
  extracellular_water_volume: 15.7,
  extracellular_water_volume_std_min: 14.7,
  extracellular_water_volume_std_max: 17.9,
  body_fat_percentage: 20.1,
  body_fat_percentage_std_min: 15.0,
  body_fat_percentage_std_max: 25.0,
  basal_metabolism_kcal: 1720,
  basal_metabolism_kcal_std_min: 1650,
  basal_metabolism_kcal_std_max: 1900,
  bmi: 23.8,
  bmi_std_min: 18.5,
  bmi_std_max: 25.0,

  // IBodyPart (부위별 분석)
  right_hand_fat_mass: 0.8,
  left_hand_fat_mass: 0.8,
  trunk_fat_mass: 7.5,
  right_foot_fat_mass: 2.2,
  left_foot_fat_mass: 2.2,
  right_hand_fat_percentage: 18.5,
  left_hand_fat_percentage: 18.7,
  trunk_fat_percentage: 21.2,
  right_foot_fat_percentage: 19.5,
  left_foot_fat_percentage: 19.8,
  right_hand_muscle_mass: 3.2,
  left_hand_muscle_mass: 3.1,
  trunk_muscle_mass: 25.4,
  right_foot_muscle_mass: 8.8,
  left_foot_muscle_mass: 8.7,
  right_hand_muscle_ratio: 102.5,
  left_hand_muscle_ratio: 100.2,
  trunk_muscle_ratio: 98.5,
  right_foot_muscle_ratio: 101.2,
  left_foot_muscle_ratio: 100.8,
  fat_std_right_hand: 1.0,
  fat_std_left_hand: 1.0,
  fat_std_trunk: 8.0,
  fat_std_right_foot: 2.5,
  fat_std_left_foot: 2.5,
  muscle_std_right_hand: 3.0,
  muscle_std_left_hand: 3.0,
  muscle_std_trunk: 24.5,
  muscle_std_right_foot: 8.5,
  muscle_std_left_foot: 8.5,

  // IRecommend (추천 가이드)
  exer_kcal_walk: 150,
  exer_kcal_golf: 200,
  exer_kcal_croquet: 120,
  exer_kcal_tennis_cycling_basketball: 450,
  exer_kcal_squash_bouncyball_taekwondo_fencing: 600,
  exer_kcal_climb_mountains: 500,
  exer_kcal_swimming_aerobics_jogging_football_skippingrope: 550,
  exer_kcal_badminton_tabletennis: 300,
  result_nutrition_title: "균형 잡힌 식단 필요",
  result_nutrition_description: "단백질 섭취를 유지하며 정제 탄수화물을 줄이세요.",
  result_nutrition_grade: 1,
  result_exercise_title: "근력 운동 강화",
  result_exercise_description: "주 3회 이상의 상하체 복합 근력 운동을 권장합니다.",
  result_exercise_grade: 2,
  result_habits_title: "충분한 수면",
  result_habits_description: "근육 회복을 위해 하루 7시간 이상의 숙면이 필요합니다.",
  result_habits_grade: 1,

  // IBodyBenchmark (건강 지표)
  body_score: 96,
  physical_age: 29,
  body_type: 3, // 예: 표준형
  recommended_intake_kcal: 2400,
  ideal_weight: 72.0,
  target_weight: 73.5,
  weight_control: -2.0,
  muscle_control: 1.5,
  fat_control_amount: -3.5,

  // IBiaDataEtc (기타)
  weight: 75.5,
  weight_std_min: 62.5,
  weight_std_max: 78.2,
  lean_body_weight: 60.3,
  lean_body_weight_std_min: 55.0,
  lean_body_weight_std_max: 65.0,
  muscle_mass: 57.2,
  muscle_mass_std_min: 52.0,
  muscle_mass_std_max: 62.0,
  bone_mass: 3.1,
  bone_mass_std_min: 2.8,
  bone_mass_std_max: 3.5,
  body_cell_mass: 38.5,
  body_cell_mass_std_min: 35.0,
  body_cell_mass_std_max: 42.0,
  subcutaneous_fat_mass: 12.5,
  waist_to_hip_ratio: 0.88,
  waist_to_hip_ratio_std_min: 0.80,
  waist_to_hip_ratio_std_max: 0.90,
  visceral_fat_level: 6,
  visceral_fat_level_std_min: 1,
  visceral_fat_level_std_max: 9,
  obesity_percentage: 105,
  obesity_percentage_std_min: 90,
  obesity_percentage_std_max: 110,
  subcutaneous_fat_rate: 16.5,
  subcutaneous_fat_rate_std_min: 12.0,
  subcutaneous_fat_rate_std_max: 20.0,
  result_body_type_description: "표준 체형입니다.",
  result_body_composition_description: "[고지방 비만] 체내 지방 비율이 표준을 초과하여 만성질환 위험이 높아진 상태입니다. 전신 성분 중 지방의 비율을 낮추는 것이 시급합니다.",
  result_cid_type: 2, // 'I'자형 (표준)
  result_cid_comment: "최고 위험, 체중과 지방은 과다하며 이를 지탱할 근육이 부족합니다. 당뇨, 고혈압 등 만성질환 위험이 극도로 높습니다.",
  result_visceral_fat_level_grade: 1
};

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-[210mm] mx-auto h-full p-0 m-0">
      <div className="flex justify-end w-full p-0 m-0">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-blue-600 my-4 text-white rounded-lg hover:bg-blue-700 print:hidden"
        >
          인쇄하기
        </button>
      </div>
      

      <div className="a4-page flex flex-col bg-white overflow-hidden bg-sub-400">
        <div className='flex justify-between h-16 w-full bg-sub-400 p-2 gap-4'>
          <div className='flex gap-4'>
            <img 
              src={logoWhite} 
              alt="하얀색 로고" 
              className="flex w-8 h-fit my-auto" 
            />
            <div className='flex text-center py-1.5 text-white text-2xl font-bold'>Tango Body Report</div>
          </div>

          <div className='justify-center px-2 bg-white flex flex-col rounded-md text-[12px] text-center'>
            <div>
              이름: 000 성별: 남 신장:184cm 나이: 만 30세
            </div>
            <div className='h-[1px] w-full bg-sub-400'></div>
            <div>
              현재 검사일: 2026-05-07 이전 검사일 2026-05-01
            </div>
          </div>
        </div>

        {/* 🥘🥘🥘🥘🥘🥘🍲🍲🍲🍲body🍲🍲🍲🍲🍝🍝🍝🍝🍝🍝 */}
        <div className='flex flex-1 w-full px-2 py-4 gap-2'>
          {/* 🥘🥘🥘🥘 left 🥘🥘🥘🥘 */}
          <div className='grid grid-rows-[25%_25%_25%_25%] w-2/3 gap-2 mr-2'>
            <Composition data={dummyBiaData} />
            <MainAnalysis data={dummyBiaData} prevMuscleMassIndex={6.5}/>
            
            <BodyModel />
            <TrendGraph />
          </div>

          {/* 🍲🍲🍲🍲 right 🍲🍲🍲🍲 */}
          <div className='grid grid-rows-[50%_25%_25%] w-1/3 rounded-xl shadow'>
            <BodyBenchMark data={dummyBiaData} />
            
            {/* 3번째 컴포넌트 */}
            <div>
              <Recommend data={dummyBiaData} />
            </div>
            
            {/* 4번째 컴포넌트 */}
            <div className=''>
              <BodyTypeChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App

