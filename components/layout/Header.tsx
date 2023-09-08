export default function Header() {
    const tabs = [
        { name: 'HOME', href: '#', current: true },
        { name: 'GAME', href: '#', current: false },
        { name: 'LOGIN', href: '#', current: false },
      ]
      
    return(
        <>
        <div className="absolute top-[12px]">
        <div className=" px-4 py-6 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="block">
                <nav className="flex py-4">
                    <ul
                    role="list"
                    className="flex min-w-full flex-none gap-x-6 px-2 text-2xl font-semibold leading-6 text-gray-400"
                    >
                    {tabs.map((tab) => (
                        <li key={tab.name}>
                        <a href={tab.href} className={tab.current ? 'text-indigo-400' : ''}>
                            {tab.name}
                        </a>
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