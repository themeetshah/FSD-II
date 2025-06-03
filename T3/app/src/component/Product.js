const Products = (props) => {
    return (
        <>
            <h1 className="text-2xl font-bold text-center">Product Details</h1>
            <div className="d-flex">
                {props.prods.map((prod) => (
                    <ProductCard {...prod} />
                ))}
            </div>
        </>
    )
}

const ProductCard = ({ name, price, description, img }) => (
    <div className="border p-4 m-3 rounded shadow">
        <img src={img} alt='prod img'></img>
        <p className="text-xl font-semibold">{name}</p>
        <p>Price: Rs. {price}</p>
        <p>{description}</p>
    </div>
);

export default Products