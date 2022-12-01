import Logo from "./Logo";
function Menu(){
    return(
        <div className="menu-nav">
            <Logo />
            <ul className="menu-list">
                    <li>Главная</li>
                    <li>О нас</li>
                    <li>Контакты</li>
            </ul>
        </div>

    )
}

export default Menu;

