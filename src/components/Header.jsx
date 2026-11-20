function Header({titolo, descrizione, utente}) {
    return (
        <header>
            <h1>{titolo}</h1>
            <p>{descrizione}</p>
            <p> {`Ciao ${utente}!`}</p>
        </header>
    )
}

export default Header