import {createSignal} from "solid-js";

export default function FlyoutMenu() {
    // 定义是否打开状态
    const [isOpen, setIsOpen] = createSignal(false);

    // 切换菜单状态
    const toggleMenu = () => setIsOpen(!isOpen());

    // const handleClickOutside = (event) => {
    //     if (!event.target.closest("#flyout-menu")) {
    //         setIsOpen(false);
    //     }
    // };
    // document.addEventListener("click", handleClickOutside);
    // // Cleanup：移除全局事件监听器
    // onCleanup(() => document.removeEventListener("click", handleClickOutside));
    return (
        <div  className="relative">
            <button type="button"
                    onClick={toggleMenu}
                    class="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    aria-expanded={isOpen()}>
                <span>Solutions</span>

                <svg className="ml-2 size-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20"
                     fill="currentColor"
                     aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clip-rule="evenodd"/>
                </svg>

            </button>
            <div
                className={`absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2  ${
                    isOpen() ? "block opacity-100 scale-100" : "hidden opacity-0 scale-80"
                } `}>
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        <a href="#" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                            <div
                                className="flex size-10 shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-sky-900 to-indigo-900 text-white sm:size-12">
                                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                     stroke="currentColor"
                                     aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"/>
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p class="text-base font-medium text-gray-900">Inbox</p>
                                <p class="mt-1 text-sm text-gray-500">Get a better understanding of where your traffic
                                    is coming
                                    from.</p>
                            </div>
                        </a>
                        <a href="#" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                            <div
                                className="flex size-10 shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:size-12">
                                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                     stroke="currentColor"
                                     aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"/>
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p class="text-base font-medium text-gray-900">Messaging</p>
                                <p class="mt-1 text-sm text-gray-500">Speak directly to your customers in a more
                                    meaningful
                                    way.</p>
                            </div>
                        </a>
                        <a href="#" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                            <div
                                className="flex size-10 shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:size-12">
                                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                     stroke="currentColor"
                                     aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/>
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p class="text-base font-medium text-gray-900">Live Chat</p>
                                <p class="mt-1 text-sm text-gray-500">Your customers&#039; data will be safe and
                                    secure.</p>
                            </div>
                        </a>
                        <a href="#" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                            <div
                                className="flex size-10 shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:size-12">
                                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                     stroke="currentColor"
                                     aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"/>
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p class="text-base font-medium text-gray-900">Knowledge Base</p>
                                <p class="mt-1 text-sm text-gray-500">Connect with third-party tools that you&#039;re
                                    already
                                    using.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
            )
            ;


            }