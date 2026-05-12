export interface SegmentData {
  label: string;
  percentage: number;
  color: string; // HEX (#5D8DFF) 또는 Tailwind 클래스명
}

interface VerticalStackedBarProps {
  data: SegmentData[];
  width?: number;
  gap?: number;
}

export default function VerticalStackedBar({
  data,
  width = 30,
  
  gap = 2,
}: VerticalStackedBarProps) {
  return (
    <div 
      className="flex flex-col h-full" 
      style={{ 
        width: `${width}px`, 
        
        gap: `${gap}px` // 조각 사이의 간격
      }}
    >
      {data.map((segment, index) => (
        <div
          key={index}
          style={{ 
            // percentage를 flex-grow 값으로 사용하여 정확한 비율 배분
            flex: segment.percentage, 
            backgroundColor: segment.color.startsWith('#') ? segment.color : undefined 
          }}
          // 각 조각의 끝을 살짝 둥글게 처리 (선택 사항)
          className={`rounded-xs ${!segment.color.startsWith('#') ? segment.color : ''}`}
          title={`${segment.label}: ${segment.percentage.toFixed(1)}%`}
        />
      ))}
    </div>
  );
}