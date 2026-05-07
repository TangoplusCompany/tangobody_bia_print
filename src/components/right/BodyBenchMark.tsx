import fat from '../../assets/img_index_fat.png';

export default function BodyBenchMark() {
  return (
    <div className='flex flex-col'>
      <div className='flex w-fit bg-accent rounded-br-xl rounded-tl-xl text-base text-white font-semibold px-2 py-1'>
        주요건강 지표
      </div>
      <div className='flex flex-1 flex-col gap-4 p-2'>
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
          <div className='flex flex-col flex-1 justify-center rounded-3xl border-2 border-sub-a60 bg-sub-100 '>
            <div className='text-center text-base font-bold text-black'>
              00세
            </div>
            <div className='text-center text-xs text-sub-800'>
              (실제 나이 +2세)
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <div className='text-redd text-sm font-bold'>
              체중 조절량: -kg
            </div>
            <div className='h-[2px] rounded-full bg-black' /> 
            <div className='text-[10px] text-black'>
              <div className='flex flex-1 justify-between'>
                <div className='flex'>목표 체중</div>
                <div className='flex'>77.7kg</div>
              </div>
              <div className='flex flex-1 justify-between '>
                <div className='flex'>지방 조절량</div>
                <div className='flex'>-1.3kg</div>
              </div>
              <div className='flex flex-1 justify-between '>
                <div className='flex'>근육조절량</div>
                <div className='flex'>4.64kg</div>
              </div>
              <div className='flex flex-1 justify-between'>
                <div className='flex'>권장섭취열량</div>
                <div className='flex'>1502kcal</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}