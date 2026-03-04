function Header({title ,count}) {

    return (
        <Header className="header" >
            <h1>{title}</h1>
            <p> عدد المهام : {count}</p>
        </Header>
    )
}

export default Header
