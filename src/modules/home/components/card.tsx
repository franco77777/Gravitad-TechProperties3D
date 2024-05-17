import card from '../../../assets/homeCard.png'
const HomeCard = () => {
  return (
    <div className="w-full bg-[#3e2763] flex gap-8 text-white px-[170px] py-32">
      <img src={card} alt="" className="w-[355px] h-[208px]" />
      <div className="flex flex-col gap-6 p-6">
        <h3 className="font-bold text-3xl">
          ¿Quién puede usar Techproperties?{' '}
        </h3>
        <div className="text-xs ">
          Esta herramienta está diseñada para estudiantes y profesionales del
          diseño de interiores, arquitectos, constructores de muebles, y el
          público en general interesado en la creación y visualización de
          espacios y objetos en 3D. Ya sea que estés diseñando una ambiente
          desde cero, renovando un espacio existente, o simplemente buscando
          inspiración para tus proyectos creativos, nuestra herramienta
          proporciona los recursos necesarios para llevar tus ideas al siguiente
          nivel.
        </div>
      </div>
    </div>
  )
}
export default HomeCard
