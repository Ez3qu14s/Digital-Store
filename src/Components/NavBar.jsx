import classNames from "classnames"
import { NavLink } from "react-router-dom"


export default function NavBar() {
    return (
        <>
            <nav className="top-16 pt-20 p-4 md:px-14 hidden md:flex bg-white gap-6">
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        classNames(
                            "block py-2 transition-colors duration-300",
                            {
                                "text-pink-600 font-bold underline": isActive,
                                "text-gray-600 hover:text-pink-600": !isActive
                            }
                        )}
                >
                    Home
                </NavLink>
                <NavLink
                    to='/produtos'
                    className={({ isActive }) =>
                        classNames(
                            "block py-2 transition-colors duration-300",
                            {
                                "text-pink-600 font-bold underline": isActive,
                                "text-gray-600 hover:text-pink-600": !isActive
                            }
                        )}
                >
                    Produtos
                </NavLink>
                <NavLink
                    to='/categorias'
                    className={({ isActive }) =>
                        classNames(
                            "block py-2 transition-colors duration-300",
                            {
                                "text-pink-600 font-bold underline": isActive,
                                "text-gray-600 hover:text-pink-600": !isActive
                            }
                        )}
                >
                    Categorias
                </NavLink>
                <NavLink
                    to='/meus-pedidos'
                    className={({ isActive }) =>
                        classNames(
                            "block py-2 transition-colors duration-300",
                            {
                                "text-pink-600 font-bold underline": isActive,
                                "text-gray-600 hover:text-pink-600": !isActive,
                            }
                        )}
                >
                    Meus pedidos
                </NavLink>
            </nav>
        </>
    )
}