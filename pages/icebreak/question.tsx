import { useState } from "react"
import ReviewModal from "../../components/ReviewModal";

export default function Question() {
    // const [modal, setModal] = useState(false);

    // const openDetailModal = () => {
    //     setModal(true);
    // }

    return (
        <div className="bg-[#FFFBDC] lg:mx-96 py-2 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
        
        <div className="grid grid-cols-3 place-content-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[#2A52BE]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>

        <h1 className="text-[#2A52BE]">EX</h1>
        </div>
        
        <div className="border-b-2 border-[#2A52BE]"></div>

        <div className="bg-[#2A52BE] rounded-xl m-4 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
        
            <div className="bg-[#D9D9D9]/30 border-y-4 border-y-[#FFFBDC]-500 py-10 mx-12 text-center">
                <p className="text-[#FFFFFF]">아이스브레이킹이란?
                <br />
                새로운 사람을 만났을 때, 
                <br />
                어색하고 서먹서먹한 
                <br />
                분위기를 
                <br />
                깨뜨리는 게임입니다!

                <br />
                <br />

                간단하게 원하는 레벨/수위을선택 후 
                <br />
                하단에 있는 동그란 버튼을 
                <br />
                클릭하면 랜덤으로 
                <br />
                질문이 나옵니다.
                
                <br />
                <br />
                다 같이 질문의 
                <br />
                답을 해도 좋고, 
                <br />
                돌아가면서 해도 좋고
                <br />
                지목으로 해도 좋습니다!
                <br />

                룰은 정해 진 것이 없습니다!

                <br />
                <br />
                게임을 하러 가볼까요?
                </p>
            </div>
        </div>
        <br />
        {/* <button type="button" onClick={openDetailModal}>normal 모달</button>

        <ReviewModal modal={modal} setModal={setModal}/> */}
        </div>
    )
}