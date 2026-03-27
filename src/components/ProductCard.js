export default function ProductCard({ name, price }) {
    return (
        <div>
            <h2>{name}</h2>
            <p> R$ {price}</p>
        </div>
    )
}
//COMPONENTE DE PRODUTO, RECEBE PROPS DE NOME E PREÇO, E EXIBE ESSAS INFORMAÇÕES EM UM CARD.
//PROPS: DADOS QUE O COMPONENTE RECEBE DO PAI