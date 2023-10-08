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
                detail: '엄마와 함께 했던 추억 중 가장 기억에 남는 추억이 있나요?',
                imageUrl:
                '',
            },
            {
                id : 1,
                detail: '아빠와 함께 했던 추억 중 가장 기억에 남는 추억이 있나요?',
                imageUrl:
                '',
            },
            {
                id : 2,
                detail: '가족과 함께 했던 추억 중 가장 기억에 남는 추억이 있나요?',
                imageUrl:
                '',
            },
            {
                id : 3,
                detail: '가족과 함께 했던 추억 중 가장 안좋은 기억으로 남은 일이 있나요?',
                imageUrl:
                '',
            },
            {
                id : 4,
                detail: '부모님에게 말하지 못했던 미친 짓이 있나요? ^^ 말하기 싫으면 안해도 됩니다 ㅎㅎ 대신 댄싱머신 한타임 ㄱㄱ',
                imageUrl:
                '',
            },
            {
                id : 5,
                detail: '아들/딸에게 꼭 물어보고 싶었던 질문이 있나요?',
                imageUrl:
                '',
            },
            {
                id : 6,
                detail: '부모님에게 가장 섭섭했던 일이 있나요?',
                imageUrl:
                '',
            },
            {
                id : 7,
                detail: '아들/딸에게 가장 섭섭했던 일이 있나요?',
                imageUrl:
                '',
            },
            {
                id : 8,
                detail: '이건 꼭 하지 말았으면 하는 행동이나 말이 있나요?',
                imageUrl:
                '',
            },
            {
                id : 9,
                detail: '들었던 말 중에 가장 감동이었던 말이 있나요?',
                imageUrl:
                '',
            },
            {
                id : 10,
                detail: '최근에 즐기는 노래나 영화/드라마/예능 취향이 어떠한가요? 어떤 장면이 가장 좋았나요?',
                imageUrl:
                '',
            },
            {
                id : 11,
                detail: '아들/딸이 가장 사랑스러웠던 순간이 있나요?',
                imageUrl:
                '',
            },
            {
                id : 12,
                detail: '아들/딸에게 정말 무시무시하게 화났던 순간이 있나요?',
                imageUrl:
                '',
            },
            {
                id : 13,
                detail: '함께 꼭 가고 싶은 지역/해외가 있나요?',
                imageUrl:
                '',
            },
            {
                id : 14,
                detail: '아침형인가요? 언제 일어나시나요? 보통 주말 하루를 어떻게 보내나요?',
                imageUrl:
                '',
            },
            {
                id : 15,
                detail: '부모님에게 자랑하고 싶은 일이 있나요?',
                imageUrl:
                '',
            },
            {
                id : 16,
                detail: '딸/아들에게 자랑하고 싶은 일이 있나요?',
                imageUrl:
                '',
            },
            {
                id : 17,
                detail: '가장 두려워하거나, 가장 무서워했던 순간이나 트라우마가 있나요?',
                imageUrl:
                '',
            },
            {
                id : 18,
                detail: '현재 휴대폰 화면이 무엇인가요? 이유가 뭔가요?',
                imageUrl:
                '',
            },
            {
                id : 19,
                detail: '무인도에 간다면, 누구를 데려가실 건가요? 단 한명만 가능합니다. 이유는?',
                imageUrl:
                '',
            },
            {
                id : 20,
                detail: '최근에 몰입하고 있는 일이 있나요?',
                imageUrl:
                '',
            },
            {
                id : 21,
                detail: '최근에 눈물나게 슬펐던 일이 있나요?',
                imageUrl:
                '',
            }
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

