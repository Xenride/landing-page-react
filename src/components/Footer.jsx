import React from 'react'

function Footer(footer) {
  return (
    <div id='footer'>
        {
        footer && (
            <footer className= "bg-dark text-light text-center">
                <div className="container p-4">
                    <h1>&copy; Andre Gomes - Landing Page</h1>
                    <p>2019 - {new Date().getFullYear()}</p>
                    <p>Todos los derechos reservados.</p>
                </div>
        </footer>
        )
    }
    </div>
  )
}

export default Footer