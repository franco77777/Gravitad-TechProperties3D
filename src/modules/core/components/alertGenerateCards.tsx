const AlertGenerateCards = () => {
  return (
    <div
      data-landing="alert"
      role="alert"
      className="bg-[#ed2ada] alert alert-success p-2 w-fit absolute right-0 top-[80%] translate-y-[-50%] translate-x-[100%] z-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <title>disable eslint</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span data-landing="text-alert" className="text-white">
        ""
      </span>
    </div>
  )
}

export default AlertGenerateCards
