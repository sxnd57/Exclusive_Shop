const props = {
  children,
  title,
  price,
  prevPrice,
  sales,
}

export default function ProductCard(props) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="card-thumbnail w-[270px] h-[250px]">
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}
