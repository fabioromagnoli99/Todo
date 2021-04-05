import '../styles/header.scss';
import SVGlogo from '../iconscomponents/logo';

export function Header() {
  return (
    <header className="header">
      <div>
        <SVGlogo/>
      </div>
    </header>
  )
}