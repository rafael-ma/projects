import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca = 'Ferrari' anoLancamento={1939}/>
                <Item marca = 'Nissan' anoLancamento={1933} />
                <Item marca = 'Fiat' anoLancamento={1899} />
                <Item />
            </ul>
        </>
    )
}

export default List