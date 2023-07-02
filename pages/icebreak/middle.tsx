import { useState } from "react"
import ReviewModal from "../../components/ReviewModal";

const middleQuestion = [
    {
      id: 0,
      category: 'Middle',
      question: [
        {
            detail: '이상형이 무엇인가요? 여기서 제일 이상형에 가까운 사람이 있나요?',
            imageUrl:
            '',
        },
        {
            detail: '(전)연인과 가장 예뻤던 추억이 있나요? 어쩌다 헤어졌나요?',
            imageUrl:
            '',
        },
        {
            detail: '사랑에 빠졌을 떄 상대방에게 어떻게 플러팅을 하는 편인가요?',
            imageUrl:
            '',
        },
        {
            detail: '현재 호감이 가는 사람이 있나요? 어디서 만나셨나요?',
            imageUrl:
            '',
        },
        {
            detail: '지금 입은 옷 스타일이 제일 당신의 취향인 사람이 있나요? 누구인가요?',
            imageUrl:
            '',
        },
        {
            detail: '둘이서 밥먹으면 가장 어색할 것 같은 사람은?',
            imageUrl:
            '',
        },
        {
            detail: '환승이별 vs 잠수이별 뭐가 더 나쁘다고 생각하나요?',
            imageUrl:
            '',
        },
        {
            detail: '구X를 아직도 잊지 못 했을거 같은 사람은?',
            imageUrl:
            '',
        },
        {
            detail: '애인과 헤어지고 바로 다른 애인을 만들 것 같은 사람은?',
            imageUrl:
            '',
        },
        {
            detail: '가장 속내를 모르겠는 사람은?',
            imageUrl:
            '',
        },
        {
            detail: '연인이 헤어지자고 하면 붙잡는 편인가요? 아니면 먼저 헤어지자고 말하는 편인가요?',
            imageUrl:
            '',
        },
        {
            detail: '제일 금사빠일 것 같은 사람은?',
            imageUrl:
            '',
        },
        {
            detail: '이성 외모를 많이 보는 편인가요?',
            imageUrl:
            '',
        },
        {
            detail: '여기서 제일 귀여운 사람은?',
            imageUrl:
            '',
        },
        {
            detail: '제일 재력이 많을 것 같은 사람은?',
            imageUrl:
            '',
        },
        {
            detail: '연인에게 가장 다정할 것 같은 사람은?',
            imageUrl:
            '',
        },
        {
            detail: '부모님과 사이가 좋은 편인가요?',
            imageUrl:
            '',
        },
        {
            detail: '짝사랑 상대 or (구)연인의 SNS를 몰래 염탐한적이 있습니까?',
            imageUrl:
            '',
        },
        {
            detail: '절친의 (구)연인과 만날 수 있나요?',
            imageUrl:
            '',
        },
        {
            detail: '상대방에게 했던 말들 중 가장 잔인했던 말이 있나요?',
            imageUrl:
            '',
        },
        {
            detail: '부모님 모르게 했었던, 가장 미친 짓은 무엇인가요?',
            imageUrl:
            '',
        },
        {
            detail: '지인들 중 가장 좋아하는 사람은 누구입니까? 이유가 뭔가요?',
            imageUrl:
            '',
        },
        {
            detail: '외적으로 봤을때 상대방에게 가장 매력을 느끼는 부위가 있나요?',
            imageUrl:
            '',
        },
      ],
    },
    // More projects...
]

export default function Middle() {
    const [modal, setModal] = useState(false);

    const openDetailModal = () => {
        setModal(true);
    }

    return (
        <div className="bg-[#FFFBDC] lg:mx-96 py-2 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
        
        <div className="grid grid-cols-3 place-content-center py-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[#2A52BE] ml-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

            <h1 className="text-[#2A52BE]">MIDDLE</h1>
        </div>
        
        <div className="border-b-2 border-[#2A52BE]"></div>

        <div className="bg-[#2A52BE] rounded-xl m-4 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
        
            <div className="bg-[#D9D9D9]/30 border-y-4 border-y-[#FFFBDC]-500 py-10 mx-12 text-center py-32">
                <p className="text-[#FFFFFF]">하단의 버튼을 눌러주세요!<br/> Press the button at the bottom</p>
            </div>

            <div className="grid place-content-center">
                <img src="../icon_button.png" className="mt-12 w-36 h-36"/>
            </div>
        </div>
        <br />
        {/* <button type="button" onClick={openDetailModal}>normal 모달</button>

        <ReviewModal modal={modal} setModal={setModal}/> */}
        </div>
    )
}