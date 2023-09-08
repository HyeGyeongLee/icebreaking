import Link from "next/link"

export default function Header() {
    const tabs = [
        { name: 'HOME', href: '/', current: true },
        { name: 'GAME', href: '/game/game', current: false },
        { name: 'LOGIN', href: '/login/login', current: false },
      ]
      
    return(
        <>
        <div className="bg-black">
        <div className=" px-4 py-6 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="block">
                <nav className="flex py-4">
                    <ul
                    role="list"
                    className="flex min-w-full flex-none gap-x-6 px-2 text-2xl font-semibold leading-6 text-white"
                    >
                    {tabs.map((tab) => (
                        <li key={tab.name}>
                        <Link href={tab.href} className={tab.current ? 'text-indigo-400' : ''}>
                            {tab.name}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </nav>
                </div>
            </div>
            </div>

        </div>
        </>
    )

 }