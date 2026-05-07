export default function BodyTypeChart() {
  // 사용자의 실제 데이터에 따라 이 비율을 계산해서 넣어주면 점이 움직입니다.
  const myDotPosition = {
    x: '58%', // 왼쪽에서부터 58% 위치 (체지방률)
    y: '60%', // 위에서부터 60% 위치 (BMI)
  };

  return (
    <div className="flex flex-col px-4 gap-2 w-full ">
      {/* 1. 타이틀 영역 */}
      <div className="flex gap-2 items-center mb-6 text-accent font-bold">
        <div className="w-4 h-4 rounded-md bg-accent" />
        <div className="text-lg">바디 타입 세부 분석</div>
      </div>

      {/* 2. 그래프 영역 (여기에 flex-1 추가!) */}
      <div className="relative ml-8 mb-4">
        
        {/* --- Y축 라벨 (BMI) --- */}
        <div className="absolute -left-8 top-0 h-full text-[10px] text-sub-400">
          <span className="absolute -top-4 left-1">BMI</span>
          <span className="absolute top-[25%] -translate-y-1/2">30.0</span>
          <span className="absolute top-[50%] -translate-y-1/2">25.0</span>
          <span className="absolute top-[75%] -translate-y-1/2">18.5</span>
        </div>

        {/* --- 메인 그리드 표 (h-[160px]를 h-full로 변경!) --- */}
        <div className="grid grid-cols-3 grid-rows-4 w-full h-[150px] border border-sub-200 rounded-md text-[11px] text-sub-800 bg-white relative">
          
          {/* Row 1 */}
          <div className="border-b border-r border-sub-200 flex items-center justify-center">우람한</div>
          <div className="row-span-2 border-b border-r border-sub-200 flex items-center justify-center">건장한</div>
          <div className="border-b border-sub-200 flex items-center justify-center">뚱뚱한</div>

          {/* Row 2 */}
          <div className="border-b border-r border-sub-200 flex items-center justify-center">다부진</div>
          <div className="border-b border-sub-200 flex items-center justify-center">통통한</div>

          {/* Row 3 */}
          <div className="border-b border-r border-sub-200 flex items-center justify-center">날씬한</div>
          <div className="border-b border-r border-sub-200 flex items-center justify-center">평범한</div>
          <div className="row-span-2 border-sub-200 flex flex-col items-center justify-center leading-tight">
            <span>부분적으로</span>
            <span>뚱뚱한</span>
          </div>

          {/* Row 4 */}
          <div className="border-r border-sub-200 flex items-center justify-center">홀쭉한</div>
          <div className="border-r border-sub-200 flex items-center justify-center">마른</div>

          {/* --- 내 위치 마커 --- */}
          <div
            className="absolute w-3.5 h-3.5 bg-accent rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: myDotPosition.x, top: myDotPosition.y }}
          />
        </div>

        {/* --- X축 라벨 (체지방률) --- */}
        <div className="absolute -bottom-2 left-0 w-full text-[10px] text-sub-400">
          <span className="absolute left-[33.33%] -translate-x-1/2">10.0</span>
          <span className="absolute left-[66.66%] -translate-x-1/2">20.0</span>
          <span className="absolute right-0">체지방률</span>
        </div>

      </div>
    </div>
  );
}