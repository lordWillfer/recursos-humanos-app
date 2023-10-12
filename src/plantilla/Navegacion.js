import React from 'react'
import { Link } from 'react-router-dom'

export default function Navegacion() {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" style={{ marginLeft: "30px" }} href="/">Sistema de Recursos Humanos</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/agregar">Agregar Empleado</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
