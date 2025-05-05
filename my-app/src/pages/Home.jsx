import headerLogo from '../assets/logo.png'

const links = [
    {
        content: "Home",
        href: "#",
    },
    {
        content: "Shop",
        href: "#",
    },
    {
        content: "Sales",
        href: "#",
    },
    {
        content: "About",
        href: "#",
    },
    {
        content: "Contact",
        href: "#",
    },
]

function Page() {
    return (
        <>
            <header className="main-header">
                <section className="main-header-nav">
                    <img src={headerLogo} alt="" />
                    <nav>
                        <ul>
                            {
                                links.map(link => (
                                    <li key={link.content}>
                                        <a href={link.href}>{link.content}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </section>
                <div className='main-header-button-wrapper'>
                    <button>Se connecter</button>
                    <button>S'inscrire</button>
                </div>
            </header>
            <div className='hero'>

            </div>
        </>
    )
}

export default Page