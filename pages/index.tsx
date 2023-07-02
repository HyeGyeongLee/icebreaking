import Link from "next/link"
import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

export default function Ice() {
    return (
        <div className="bg-[#FFFBDC] lg:mx-96 rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <img src="./icebreaking_title.png" className="w-full"/>
            <img src="./question_button.png" className="w-32"/>
            <br />
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
    )
}