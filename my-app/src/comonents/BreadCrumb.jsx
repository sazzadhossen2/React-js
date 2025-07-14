

function BreadCrumb({title}) {
  return (
    <section>
      <nav>
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">{title}</li>
  </ol>
</nav>
    </section>
  )
}

export default BreadCrumb