export function RecommendCard ({type, title, description} : {type: string, title: string, description: string}) {
  return (
    <div className="flex w-full gap-1">
      <div className="rounded-sm bg-sub-100 border border-sub-200">
      // TODO description 레이아웃 수정
      </div>
      <div className="flex flex-col">
        <div>
          {title}
          {type}
        </div>

        <div>
          {description}
        </div>
      </div>

    </div>
  );
}


export default function Recommend() {
  
  
  return (
    <div className="flex flex-col gap-2 p-2 w-full h-full">
      {/* 1. 타이틀 영역 (작성하신 부분) */}
      <div className="flex gap-2 items-center  text-accent font-bold">
        <div className="w-4 h-4 rounded-sm bg-accent" />
        <div className="text-accent font-bold ">
          체중조절/처방
        </div>
      </div>

      <div className="grid grid-rows-3">

      </div>
      
      
    </div>
  );
}
