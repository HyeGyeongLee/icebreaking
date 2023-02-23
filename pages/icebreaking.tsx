import Link from "next/link"

export default function Ice() {
    return (
        <>
            ui는 차차 작업합쉬다
            <br />
            <Link href="/icebreak/normal">normal 모달</Link>
            <br />
            <Link href="/icebreak/middle">middle 모달</Link>
            <br />
            <Link href="/icebreak/hard">hard 모달</Link>
        </>
    )
}