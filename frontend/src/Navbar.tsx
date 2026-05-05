import './Navbar.css';

function Navbar() {
    const defaultItems = [
        {
            text: 'Home',
            link: '/'
        },
        {
            text: 'About',
            link: '/about'
        }
    ];

    return (
     <>
         <div className={"navbar"}>
             <ul>
                 {defaultItems.map((item, index) => (
                     <li key={index}>
                         <a href={item.link}>
                             {item.text}
                         </a>
                     </li>
                 ))}
             </ul>
         </div>
     </>
    )
}

export default Navbar;