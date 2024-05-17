import React from 'react'

function Footer() {
  return (
    <div className="flex w-full text-white  pl-[88px] justify-center items-center bg-[#111719]">
      <div className="text-center mr-[300px] ">techProperties</div>
      <footer className="footer p-10   text-white bg-[#111719]">
        <nav>
          <h6 className="footer-title text-[#56a8c8] opacity-100">Servicios</h6>
          <a href="/" className="link link-hover">
            Teléfono
          </a>
          <a href="/" className="link link-hover">
            Redes Sociales
          </a>
          <a href="/" className="link link-hover">
            Facebook
          </a>
          <a href="/" className="link link-hover">
            Twitter
          </a>
          <a href="/" className="link link-hover">
            Linkedin
          </a>
          <a href="/" className="link link-hover">
            Instagram
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-[#56A8C8] opacity-100">Compania</h6>
          <a href="/" className="link link-hover">
            Términos de servicio
          </a>
          <a href="/" className="link link-hover">
            All rights reserved
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-[#56a8c8] opacity-100">Legal</h6>
          <a href="/" className="link link-hover">
            Política de cookies
          </a>
          <a href="/" className="link link-hover">
            Suscripción boletín
          </a>
          <a href="/" className="link link-hover">
            Nuestras sedes
          </a>
          <a href="/" className="link link-hover">
            Términos y condiciones
          </a>
        </nav>
        <form>
          <h6 className="footer-title text-[#56a8c8] opacity-100">
            Newsletter
          </h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">Ingrese su email</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="correo@correo.com"
                className="input input-bordered join-item bg-white"
              />
              <button
                type="button"
                className="btn join-item bg-[#140023] hover:bg-[#3f2865]"
              >
                button
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  )
}

export default Footer
