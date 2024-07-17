import { CiSearch } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <header className="">
      <div className="">
        
        <div className="">
          <img className=""
            src="" alt=""
          />
        </div>
        <div className="">
          <input className=""
            type="text" placeholder="?"
          />
          <CiSearch />
        </div>
        <div className="">
          <button className="">
            Entrar
          </button>
          <IoCartOutline />
        </div>

        <div className="">
          <nav className="">
            <ul className="">
              <li className="">
                <Link className=""
                  to="#">Home
                </Link>
              </li>
              <li className="">
                <Link className=""
                  to="#">Produtos
                </Link>
              </li>
              <li className="">
                <Link className=""
                  to="#">Categorias
                </Link>
              </li>
              <li className="">
                <Link className=""
                  to="#">Meus produtos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
          
      </div>
    </header>
  )
}