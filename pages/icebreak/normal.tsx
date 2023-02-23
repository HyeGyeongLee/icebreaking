import { useState } from "react"
import ReviewModal from "../../components/ReviewModal";

const normalQuestion = [
    {
      id: 0,
      category: 'Middle',
      question: [
        {
            detail: '이상형이 무엇인가요? 여기서 제일 이상형에 가까운 사람이 있나요?',
            imageUrl:
            '',
        },
      ],
    },
    // More projects...
]


export default function normal() {
    const [modal, setModal] = useState(false);

    const openDetailModal = () => {
        setModal(true);
    }

    return (
        <>
        ui는 차차 작업합쉬다
        <br />
        <button type="button" onClick={openDetailModal}>normal 모달</button>

        <ReviewModal modal={modal} setModal={setModal}/>
        </>
    )
}