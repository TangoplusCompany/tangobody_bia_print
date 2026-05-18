import './App.css'
import logoWhite from './assets/logo_white.png';
import BodyTypeChart from './components/right/BodyTypeChart';
import Recommend from './components/right/Recommend';
import Composition from './components/left/Composition';
import BodyModel from './components/left/BodyModel';
import TrendGraph from './components/left/TrendGraph';
import BodyBenchMark from './components/right/BodyBenchMark';
import MainAnalysis from './components/left/MainAnalysis';
import { usePostBiaData } from './hooks/usePostBiaData';
import { useEffect } from 'react';
// import { actionPrintEncrypt } from './utils/getCrypto';

function App() {
  const handlePrint = () => {
    window.print();
  };
  const { mutate, data, isPending, isError } = usePostBiaData();
  const searchParams = new URLSearchParams(window.location.search);
  const trValue = searchParams.get("t_r");

  const encryptData = async () => {
    
    // const cryptoData = {
    //   sn: 2329,
    //   user_uuid: "QAAYA6RDBKSJQRA2",
    //   receiver: "01025248218",
    // };
    // const encryptData = await actionPrintEncrypt(cryptoData);
    // console.log(encryptData)
  };

  useEffect(() => {
    encryptData()
    if (trValue) {
      mutate(trValue);
    }
  }, [mutate, trValue]);
  if (isPending) return <div className="flex h-screen items-center justify-center">로딩 중...</div>;
  if (!trValue || isError || (data === undefined)) {
    return (
      <div className="flex flex-col h-screen items-center justify-center gap-4">
        <div className="text-xl font-bold text-red-500">올바르지 않은 데이터입니다.</div>
      </div>
    );
  }
  console.log(data)
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
      

      <div className="a4-page flex flex-col bg-white">
        <div className='flex justify-between w-full h-fit bg-sub-300 p-2 gap-4 '>
          <div className='flex gap-4'>
            <img src={logoWhite} alt="로고" className="flex w-6 h-fit my-auto" />
            <div className='flex text-center my-auto text-white text-xl font-bold'>Tango Body Report</div>
          </div>
          {data && (
            <div className='justify-center px-3 bg-white flex flex-col rounded-[2px] text-[12px] text-center'>
              
              <div className='flex gap-8'>
                <span>이름: {data.user_name}</span>
                <span>성별: {data.br_input_gender === 0 ? "여성" : "남성"}</span>
                <span>신장: {data.br_input_height}cm</span>
                <span>나이: 만 {data.br_input_age}세</span>
              </div>
              <div className='h-[1px] w-full bg-sub-400'></div>
              <div className='flex gap-4 justify-center '>
                <span>현재 검사일: {data.measure_date?.replace(/-/g, ".").slice(0, 11)} </span>
                <span>
                  이전 검사일: {data.most_previous_data?.measure_date ? `${data.most_previous_data.measure_date.replace(/-/g, ".")}` : '미실시'}
                </span>
              </div>
              
            </div>
          )}
        </div>

        {/* 🥘🥘🥘🥘🥘🥘🍲🍲🍲🍲body🍲🍲🍲🍲🍝🍝🍝🍝🍝🍝 */}
        <div className='flex flex-1 w-full px-2 py-4 gap-2'>
          {/* 🥘🥘🥘🥘 left 🥘🥘🥘🥘 */}
          <div className='grid grid-rows-[25%_25%_25%_25%] w-2/3 mr-2'>
            <Composition data={data} />
            <MainAnalysis data={data} prevMuscleMassIndex={data?.most_previous_data.skeletal_muscle_mass_index}/>
            <BodyModel data={data}  />
            <TrendGraph data={data} />
          </div>

          {/* 🍲🍲🍲🍲 right 🍲🍲🍲🍲 */}
          <div className='grid grid-rows-[50%_25%_25%] w-1/3 rounded-xl shadow'>
            <BodyBenchMark data={data} />
            <Recommend data={data} />
            <BodyTypeChart data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App

