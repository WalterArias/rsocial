import { NavLink } from "react-router-dom";
const Inicio = () => {
  return (
    <>
      <div className="col">
        <div className="card text-start">
          <div className="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus praesentium aut dolorum quod hic, sed
            dolore. Molestiae sed, maiores atque nam in vitae, corrupti ipsam voluptate iure doloremque nostrum sint?
            Distinctio aperiam laudantium illo. Officia porro aliquam fugit aspernatur praesentium voluptate temporibus
            accusamus ut officiis ratione. Voluptate dignissimos quos iste porro tempore a aperiam reiciendis excepturi
            harum, quisquam id sapiente. Eligendi, corporis iusto eius fugit ex assumenda aspernatur iste delectus
            libero facere quos tempora deserunt perferendis atque animi autem similique a quaerat. Pariatur sequi
            aperiam amet ratione nihil, nesciunt libero. Omnis veniam voluptas fuga sapiente vitae, libero natus quia
            provident vero nisi laboriosam perferendis, pariatur quisquam, sunt voluptate consectetur minus suscipit
            doloremque magni sed tempora odit. Corporis facilis labore cum.
            <p className="p-3">
              <NavLink to="/Registro" className="btn btn-primary">
                <i className="bi bi-plus-square"> Registro</i>
              </NavLink>
            </p>
            <p className="p-3">
              <NavLink to="/Ingresar" className="btn btn-success">
                <i className="bi bi-box-arrow-in-right"> Ingresar</i>
              </NavLink>
            </p>
          </div>
        </div>
      </div>

      <div className="col">
        <img src="./images/people.jpg" className="img-fluid shadow-lg p-3 mb-5 bg-body rounded" alt="" sizes="" />
      </div>
    </>
  );
};

export default Inicio;
