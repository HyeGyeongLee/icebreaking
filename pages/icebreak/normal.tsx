import { useState } from "react"
import ReviewModal from "../../components/ReviewModal";
import { useRouter } from 'next/router'
import Modal from '../../components/Modal'

export default function normal() {
    const router = useRouter();
    const [randomArray, setRandomArray] = useState('');
    const [usedIndexes, setUsedIndexes] = useState([]);
    const [modal, setModal] = useState(false);

    const normalQuestion = [
            {
                id : 0,
                detail: '당신의 이름의 뜻은 무엇인가요?',
                imageUrl:
                '',
            },
            {
                id : 1,
                detail: '요즘 가장 즐겨듣는 \n 노래는 무엇인가요? \n 좋아하는 가수는 누구인가요?',
                imageUrl:
                '',
            },
            {
                id : 2,
                detail: '어떤 향기를 좋아하시나요? \n 좋아하는 향수가 있나요?',
                imageUrl:
                '',
            },
            {
                id : 3,
                detail: '올해 가장 재밌게 본 \n 영화가 있나요? \n 제일 좋아하는 영화는 무엇인가요?',
                imageUrl:
                '',
            },
            {
                id : 4,
                detail: '반려동물을 키우시나요? \n 제일 좋아하는 동물이 무엇인가요?',
                imageUrl:
                '',
            },
            {
                id : 5,
                detail: '못 먹는 음식이 있나요? \n 좋아하는 음식은 무엇인가요?',
                imageUrl:
                '',
            },
            {
                id : 6,
                detail: '친구들이 당신을 부르는 \n 별명이 있나요?',
                imageUrl:
                '',
            },
            {
                id : 7,
                detail: '공연이나 전시회를 좋아하나요? \n 제일 좋았던 공연이나 전시회가 \n 무엇인가요?',
                imageUrl:
                '',
            },
            {
                id : 8,
                detail: '술을 좋아하시나요? \n 어떤 술을 제일 좋아하시나요?',
                imageUrl:
                '',
            },
            {
                id : 9,
                detail: 'mbti를 믿는 편인가요? \n 당신의 mbti는 무엇인가요?',
                imageUrl:
                '',
            },
            {
                id : 10,
                detail: '화가 많은 편인가요? \n 어떤 일에 화를 내는 편인가요?',
                imageUrl:
                '',
            },
            {
                id : 11,
                detail: '사진 찍는 걸 좋아하시나요? \n 갤러리에 많은 비중을 차지하는 \n 사진은 무엇인가요?',
                imageUrl:
                '',
            },
            {
                id : 12,
                detail: '당신이 살아가면서 절대 포기할 수 없는 단 한가지는 무엇인가요?',
                imageUrl:
                '',
            },
            {
                id : 13,
                detail: '당신이 스스로 가장 강점이라고 \n 생각하는 부분을 자랑해주세요. \n 외모든 내면적으로든 \n 상관 없습니다.',
                imageUrl:
                '',
            },
            {
                id : 14,
                detail: '취미가 있나요? \n 새롭게 배우고 싶은 분야가 \n 무엇인가요?',
                imageUrl:
                '',
            },
            {
                id : 15,
                detail: '여행을 좋아하시나요? \n 가본 곳 중 가장 잊을 수 없는 곳은 어디인가요?',
                imageUrl:
                '',
            },
            {
                id : 16,
                detail: '환생을 믿나요? \n 다시 태어난다면 누구로 \n 태어나고 싶나요?',
                imageUrl:
                '',
            },
            {
                id : 17,
                detail: '겁이 많은 편인가요? \n 가장 무서워하는 것은 무엇인가요?',
                imageUrl:
                '',
            },
            {
                id : 18,
                detail: '제일 첫인상이 좋았던 \n 사람이 있나요? \n 이유는 무엇인가요?',
                imageUrl:
                '',
            },
            {
                id : 19,
                detail: '당신의 왼쪽에 앉은 사람의 \n 첫인상이 어땠는지 말해주세요.',
                imageUrl:
                '',
            },
            {
                id : 20,
                detail: '노래방 좋아하시나요? \n 18번 곡을 소개시켜주세요.',
                imageUrl:
                '',
            },
            {
                id : 21,
                detail: '칭찬을 잘하시나요? \n 오른쪽에 앉은 사람에게 칭찬을 \n 해주세요.',
                imageUrl:
                '',
            },
            {
                id : 22,
                detail: '이상형이 무엇인가요? \n 외적으로 내적으로 \n 전부 말해주세요.',
                imageUrl:
                '',
            },
            {
                id : 23,
                detail: '(전)연인에게 들었던 \n 애칭이 있나요?',
                imageUrl:
                '',
            },
            {
                id : 24,
                detail: '(전)연인에게 화가 났을 때 어떻게 해결했나요?',
                imageUrl:
                '',
            },
            {
                id : 25,
                detail: '어떤 순간에 호감을 느끼나요? \n 사랑에 빠지는 순간이 언제인가요?',
                imageUrl:
                '',
            },
            {
                id : 26,
                detail: '사랑에 빠지면 상대방에서 \n 어떻게 행동하는 편인가요?',
                imageUrl:
                '',
            },
            {
                id : 27,
                detail: '사랑을 주는 것과 사랑을 받는 것 \n 어떤 것이 더 쉽다고 생각하나요? \n 더 좋아하는게 있나요?',
                imageUrl:
                '',
            },
            {
                id : 28,
                detail: '상대방이 연애 경험이 \n 많은게 좋은가요? \n 적은게 좋은가요?',
                imageUrl:
                '',
            },
            {
                id : 29,
                detail: '연애할 때 나이 차이 몇살까지 \n 가능한가요?',
                imageUrl:
                '',
            },
            {
                id : 30,
                detail: '내가 생각했던 첫인상과 완전히 \n 다른 사람이 있나요? \n 이유가 뭔가요?',
                imageUrl:
                '',
            },
            {
                id : 31,
                detail: '연인에게 카톡, 문자 내용을 전부 (공유)보여줄 수 있나요? \n 비밀번호 오픈이 가능한가요?',
                imageUrl:
                '',
            },
            {
                id : 32,
                detail: '가장 좋아하는 계절이 있나요? \n 이유가 뭔가요?',
                imageUrl:
                '',
            },
            {
                id : 33,
                detail: '당신의 숨듣명 \n 한 곡을 추천해주세요.',
                imageUrl:
                '',
            },
            {
                id : 34,
                detail: '당신이 중요하게 생각하는 \n 신념이나 조언이 있나요?',
                imageUrl:
                '',
            },
        // More projects...
    ]


  const getRandomArrayElement = () => {

    if (usedIndexes.length === normalQuestion.length) {
      // 배열의 모든 요소를 사용한 경우, 초기화합니다.
      setUsedIndexes([]);
    }

    // 사용되지 않은 인덱스들을 필터링합니다.
    const availableIndexes = normalQuestion.map((_, index) => index).filter(
      (index) => 
      !usedIndexes.includes(index)
    );

    // 남은 사용 가능한 인덱스들 중에서 랜덤으로 선택합니다.
    const randomIndex = Math.floor(Math.random() * availableIndexes.length);
    const selectedIndex = availableIndexes[randomIndex];

    // 선택한 인덱스의 배열 요소를 출력하고 사용한 인덱스 목록에 추가합니다.

    if(selectedIndex < 35 || selectedIndex > 0) {
    setRandomArray(normalQuestion[selectedIndex].detail);
    setUsedIndexes([...usedIndexes, selectedIndex]);
    } else {
        setModal(true);
        return;
    }

  };

      return (
        <div className="bg-[#FFFBDC] lg:mx-96 py-2 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center">
        
        <div className="grid grid-cols-3 place-content-center py-2">
            <button type="button" onClick={() => router.back()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[#2A52BE] ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            <h1 className="text-[#2A52BE]">NORMAL</h1>
        </div>
        
        <div className="border-b-2 border-[#2A52BE]"></div>

        <Modal modal={modal} setModal={setModal}/>

        <div className="bg-[#2A52BE] rounded-xl m-4 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="bg-[#D9D9D9]/30 border-y-4 border-y-[#FFFBDC]-500 py-10 mx-12 text-center py-32">
                {
                    usedIndexes.length > 35 || usedIndexes.length === 0 ? (
                        <p className="text-[#FFFFFF] px-2 text-lg">하단의 버튼을 눌러주세요!<br/> Press the button at the bottom</p>
                    ) : 
                    (
                        <div className="px-2 text-lg">
                            <p className="text-[#FFFFFF] whitespace-pre-line">{randomArray}</p>
                        </div>
                    )
                }
            </div>
            {/* 하단의 버튼 */}
            <div className="grid place-content-center">
                <img src="../icon_button.png" onClick={() => getRandomArrayElement()} className="mt-12 w-36 h-36"/>
            </div>
        </div>
        <br />
        {/* <button type="button" onClick={openDetailModal}>normal 모달</button>

        <ReviewModal modal={modal} setModal={setModal}/> */}
        </div>
    )
};

