export default function dark(){
    return (
        <div className="flex items-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <p className="text-sm/6 text-white">
                <a href="#">
                    <strong className="font-semibold">OrionK industry 2025</strong>
                    <svg viewBox="0 0 2 2" className="mx-2 inline size-0.5 fill-current" aria-hidden="true">
                        <circle cx="1" cy="1" r="1"/>
                    </svg>
                    Join us in Denver from June 7 – 9 to see what’s coming next&nbsp;<span
                    aria-hidden="true">&rarr;</span>
                </a>
            </p>
            <div className="flex flex-1 justify-end">
                <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                    <span className="sr-only">Dismiss</span>
                    <svg className="size-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                         data-slot="icon">
                        <path
                            d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}