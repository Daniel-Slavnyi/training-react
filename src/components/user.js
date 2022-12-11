export default function User({url, name, title, price}) {
    return (
        <div>
            <img src={url} alt={name} width="430" />
            <h2>{title}</h2>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}