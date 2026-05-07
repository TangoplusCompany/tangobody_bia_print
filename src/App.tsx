import './App.css'
import logoWhite from './assets/logo_white.png';
import BodyTypeChart from './components/right/BodyTypeChart';
import Recommend from './components/right/Recommend';
import MainCards from './components/left/MainCards';
import Composition from './components/left/Composition';
import BodyModel from './components/left/BodyModel';
import TrendGraph from './components/left/TrendGraph';
import BodyBenchMark from './components/right/BodyBenchMark';
import BodyScore from './components/right/BodyScore';
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
        <div className='flex flex-1 w-full py-4 gap-2'>
          {/* 🥘🥘🥘🥘 left 🥘🥘🥘🥘 */}
          <div className='grid grid-rows-[25%_25%_25%_25%] w-2/3 gap-2 '>
            <MainCards />
            <Composition />
            <BodyModel />
            <TrendGraph />
          </div>

          {/* 🍲🍲🍲🍲 right 🍲🍲🍲🍲 */}
          <div className='grid grid-rows-[30%_20%_25%_25%] w-1/3 rounded-xl shadow'>
            <BodyBenchMark />

            {/* 2번째 컴포넌트 */}
            <BodyScore />
            
            {/* 3번째 컴포넌트 */}
            <div>
              <Recommend />
            </div>
            
            {/* 4번째 컴포넌트 */}
            <div className='mt-auto mb-4'>
              <BodyTypeChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App
