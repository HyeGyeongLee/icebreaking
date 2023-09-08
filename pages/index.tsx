import Link from "next/link"
import { CheckIcon } from '@heroicons/react/20/solid'
import Header from "../components/layout/Header"

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

export default function Ice() {
    return (
      <div className="relative h-screen xl:h-full lg:h-full md:h-full sm:h-full w-full">
        <div className="lg:mx-96 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center">
            <div className="relative bg-[#FFFBDC] h-screen sm:pb-[1200px] md:pb-[1200px] lg:pb-[1200px] xl:pb-[1200px]">
            <Header />
              <img src="./icebreaking_title.png"/>
              <div className="relative mx-12 -my-52 sm:-my-72 md:-my-72 lg:-my-72 xl:-my-72">
                  <Link href="/icebreak/question">
                    <img src="./question_button.png" className="w-16 -pt-2 pb-6"/>
                  </Link>

                  <Link href="/icebreak/normal">
                    <img src="./normal_button.png" className="w-full"/>
                  </Link>
                  <br />
                  <Link href="/icebreak/middle">
                    <img src="./middle_button.png" className="w-full"/>
                  </Link>
                  <br />
                  <Link href="/icebreak/hard">
                    <img src="./hard_button.png" className="w-full"/>
                  </Link>
              </div>
              </div>
        </div>
      </div>
    )
}