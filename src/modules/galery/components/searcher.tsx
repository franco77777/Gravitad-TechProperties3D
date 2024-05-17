import search from '../../../assets/searcher.png'
const Searcher = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <input type="text" className="w-full h-14 bg-white rounded-xl" />
        <img
          src={search}
          alt=""
          className="h-5 w-5 absolute top-[50%] right-5 z-50 translate-y-[-50%]"
        />
      </div>
    </div>
  )
}
export default Searcher
