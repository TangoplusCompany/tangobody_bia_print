export interface SegmentData {
  label: string;
  percentage: number;
  color: string;
}

interface HalfDonutChartProps {
  data: SegmentData[];
  radius?: number;
  strokeWidth?: number;
  gap?: number;
}

export default function HalfDonutChart({
  data,
  radius = 80,
  strokeWidth = 20,
  gap = 2,
}: HalfDonutChartProps) {
  const innerRadius = radius - strokeWidth / 2;
  const circumference = innerRadius * Math.PI;
  
  // 90도 회전된 상태에서의 실제 SVG 크기 계산
  const svgWidth = radius + strokeWidth; // 반원이므로 너비는 반지름 + 두께
  const svgHeight = radius * 2 + strokeWidth; // 높이는 지름 + 두께

  let currentOffset = 0;
  console.log(data)
  return (
    <div className="w-fit" style={{ lineHeight: 0 }}>
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        style={{ overflow: 'visible' }} 
      >
        <g transform={`translate(${strokeWidth / 2}, ${radius + strokeWidth / 2})`}>
          {data.map((segment, index) => {
            const strokeLength = (segment.percentage / 100) * circumference;
            const finalStrokeLength = Math.max(0, strokeLength - gap);
            const dashArray = `${finalStrokeLength} ${circumference * 2}`;
            
            const rotation = -90 + (currentOffset / circumference) * 180;
            // eslint-disable-next-line react-hooks/immutability
            currentOffset += strokeLength;

            return (
              <circle
                key={index}
                r={innerRadius}
                fill="transparent"
                stroke={segment.color}
                strokeWidth={strokeWidth}
                strokeDasharray={dashArray}
                strokeLinecap="inherit"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: 'all 0.5s ease-out',
                  transformOrigin: '0 0', // 반드시 0 0(중심) 기준으로 회전
                }}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}