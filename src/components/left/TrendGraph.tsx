
// 1. 더미 데이터 정의
const DATES = ["4월 06일", "5월 17일", "5월 31일", "6월 12일", "7월 12일", "7월 16일", "10월 00일"];

const CATEGORIES = [
  { id: 'score', label: '통합점수', unit: '(점)' },
  { id: 'sarcopenia', label: '근감소증 수치', unit: '(%)' },
  { id: 'weight', label: '몸무게', unit: '(kg)' },
  { id: 'skeletal', label: '골격근량', unit: '(kg)' },
  { id: 'fat', label: '지방량', unit: '(kg)' },
];

// 각 셀에 들어갈 데이터 (실제로는 API에서 가공해서 사용)
const TREND_DATA = {
  score: [
    { value: "85.0", diff: "02", status: "gray", up: true },
    { value: "88.5", diff: "03", status: "gray", up: true },
    { value: "86.0", diff: "01", status: "gray", up: false },
    { value: "90.0", diff: "04", status: "gray", up: true },
    { value: "89.0", diff: "01", status: "gray", up: false },
    { value: "78.0", diff: "11", status: "red", up: false }, // 주의 상태
    { value: "92.0", diff: "04", status: "gray", up: true },
  ],
  sarcopenia: [
    { value: "12.5", diff: "0.5", status: "red", up: true },
    { value: "13.0", diff: "0.2", status: "red", up: true },
    { value: "11.0", diff: "0.8", status: "red", up: false },
    { value: "10.5", diff: "0.5", status: "gray", up: false },
    { value: "09.0", diff: "1.5", status: "blue", up: false }, // 호전 상태
    { value: "08.5", diff: "0.5", status: "blue", up: false },
    { value: "07.0", diff: "1.5", status: "blue", up: false },
  ],
  weight: [
    { value: "12.5", diff: "0.5", status: "red", up: true },
    { value: "13.0", diff: "0.2", status: "red", up: true },
    { value: "11.0", diff: "0.8", status: "red", up: false },
    { value: "10.5", diff: "0.5", status: "gray", up: false },
    { value: "09.0", diff: "1.5", status: "blue", up: false }, // 호전 상태
    { value: "08.5", diff: "0.5", status: "blue", up: false },
    { value: "07.0", diff: "1.5", status: "blue", up: false },
  ],
  skeletal: [
    { value: "12.5", diff: "0.5", status: "red", up: true },
    { value: "13.0", diff: "0.2", status: "red", up: true },
    { value: "11.0", diff: "0.8", status: "red", up: false },
    { value: "10.5", diff: "0.5", status: "gray", up: false },
    { value: "09.0", diff: "1.5", status: "blue", up: false }, // 호전 상태
    { value: "08.5", diff: "0.5", status: "blue", up: false },
    { value: "07.0", diff: "1.5", status: "blue", up: false },
  ],
  fat: [
    { value: "12.5", diff: "0.5", status: "red", up: true },
    { value: "13.0", diff: "0.2", status: "red", up: true },
    { value: "11.0", diff: "0.8", status: "red", up: false },
    { value: "10.5", diff: "0.5", status: "gray", up: false },
    { value: "09.0", diff: "1.5", status: "blue", up: false }, // 호전 상태
    { value: "08.5", diff: "0.5", status: "blue", up: false },
    { value: "07.0", diff: "1.5", status: "blue", up: false },
  ],
  // ... 나머지 데이터도 비슷한 구조
};

// 2. 개별 데이터 셀 컴포넌트
const DataCell = ({ value, diff, status, up }: { value: string, diff: string, status: string, up: boolean }) => {
  const colorClass = 
    status === 'red' ? 'border-redd text-redd' :
    status === 'blue' ? 'border-accent text-accent' :
    'border-sub-200 text-sub-600 bg-white';

  return (
    <div className={`flex flex-col items-center justify-center border rounded-sm py-2 px-1 w-full min-w-[40px] h-[30px] leading-none ${colorClass}`}>
      <span className="text-[10px] font-bold leading-tight">{value}(%)</span>
      <div className="flex items-center gap-0.5 text-[8px] mt-1">
        <span>{up ? '▲' : '▼'}</span>
        <span>{diff}</span>
      </div>
    </div>
  );
};

export default function TrendGraph() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 상단 헤더 영역 */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-accent rounded-sm" />
          <h2 className="text-sm font-bold text-accent">측정 이력</h2>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 bg-sub-600 rounded-sm" />
          <span className="text-[10px] text-gray-500 font-medium">최근이력</span>
        </div>
      </div>

      {/* 그리드 레이아웃 */}
      <div className="">
        <div className="">
          {/* 날짜 행 */}
          <div className="grid grid-cols-[80px_repeat(7,1fr)] gap-2 mb-2">
            <div /> {/* 첫 칸 비우기 */}
            {DATES.map((date, i) => (
              <div key={i} className="text-center text-[8px] text-gray-400 font-medium">
                {date}
              </div>
            ))}
          </div>

          {/* 카테고리별 데이터 행 */}
          <div className="flex flex-col gap-0.5">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="grid grid-cols-[80px_repeat(7,1fr)] gap-0.5 items-center">
                {/* 왼쪽 카테고리 라벨 */}
                <div className="flex flex-col items-center justify-center bg-gray-100 rounded-sm h-[30px] text-center leading-tight">
                  <span className="text-[10px] font-bold text-gray-700 leading-tight">{cat.label}</span>
                  <span className="text-[8px] text-gray-500 font-medium">{cat.unit}</span>
                </div>

                {/* 데이터 셀들 (더미 데이터가 있으면 렌더링, 없으면 빈 셀) */}
                {(TREND_DATA[cat.id as keyof typeof TREND_DATA] || Array(7).fill(null)).map((data, i) => (
                  data ? (
                    <DataCell key={i} {...data} />
                  ) : (
                    <div key={i} className="border-2 border-gray-100 rounded-sm h-[30px] bg-white opacity-40" />
                  )
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}