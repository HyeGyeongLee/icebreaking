import { useState } from "react"
import ReviewModal from "../../components/ReviewModal";

const hardQuestion = [
    {
      id: 0,
      category: 'Hard',
      question: [
        {
            detail: '동성에게 호감을 느낀적이 있나요?',
            imageUrl:
            '',
        },
        {
            detail: '남들에게 말 못할 관계를 즐겨 본 적이 있나요?',
            imageUrl:
            '',
        },
        {
            detail: '상대방에게 가장 매력을 느끼는 신체 부위가 있나요?',
            imageUrl:
              '',
        },
        {
            detail: '이성과 잠자리를 하기 위한 플러팅이 있나요?',
            imageUrl:
              '',
        },
        {
            detail: '여러 사람과 썸 이상을 경험 해 본 적이 있나요?',
            imageUrl:
              '',
        },
        {
            detail: '만취 상태에서 실수로 스퀸십을 한 적이 있나요? 그 후에 어떻게 수습했나요?',
            imageUrl:
              '',
        },
        {
            detail: '여기서 제일 섹시하게 생긴 사람은? 이유가 뭔가요?',
            imageUrl:
              '',
        },
        {
            detail: '절친이 살인을 저질러 당신에게 숨겨달라고 찾아왔습니다. 어떻게 행동 하실건가요?',
            imageUrl:
              '',
        },
        {
            detail: '마지막으로 울었던게 언제고, 왜 울었나요?',
            imageUrl:
              '',
        },
        {
            detail: '사람들에게 말하지 못하는 나만의 성 취향이 있다 vs 없다.',
            imageUrl:
              '',
        },
        {
            detail: '절친의 연인 or 썸인 상대에게 호감을 가진 적이 있다.',
            imageUrl:
              '',
        },
        {
            detail: '처음 본 이성과 키스 할 수 있나요?',
            imageUrl:
              '',
        },
        {
            detail: '이성친구과 1박2일 하는 애인 vs (구)연인과 술 마시는 애인',
            imageUrl:
              '',
        },
        {
            detail: '바람피운 걸 평생 비밀로 하는 애인 (평생 바람 핌) vs 바람피운 걸 고백하고 봐달라는 애인 (이후로 바람 안 핌)',
            imageUrl:
              '',
        },
        {
            detail: '키스 잘할것같은 사람은?',
            imageUrl:
              '',
        },
        {
            detail: '상대방의 어느 포인트에 섹시하다고 생각하나요?',
            imageUrl:
              '',
        },
      ],
    },
    // More projects...
]

export default function Hard() {
    const [modal, setModal] = useState(false);

    const openDetailModal = () => {
        setModal(true);
    }

    return (
      <div className="bg-[#FFFBDC] lg:mx-96 py-2 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
      
      <div className="grid grid-cols-3 place-content-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[#2A52BE]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>

      <h1 className="text-[#2A52BE]">HARD</h1>
      </div>
      
      <div className="border-b-2 border-[#2A52BE]"></div>

      <div className="bg-[#2A52BE] rounded-xl m-4 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
      
          <div className="bg-[#D9D9D9]/30 border-y-4 border-y-[#FFFBDC]-500 py-10 mx-12 text-center py-32">
              <p className="text-[#FFFFFF]">하단의 버튼을 눌러주세요!<br/> Press the button at the bottom</p>
          </div>

          <img src="../icon_button.png" className="mt-12 w-36 h-36 translate-x-[75%]"/>
      </div>
      <br />
      {/* <button type="button" onClick={openDetailModal}>normal 모달</button>

      <ReviewModal modal={modal} setModal={setModal}/> */}
      </div>
  )
}