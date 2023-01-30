import React from 'react'
import "../../container/itemDetailContainer/ItemDetailContainer.css"
import "../../container/itemListContainer/ItemListContainer.css"

const GenerateOrder = ({register,errors}) => {

  const checkEmail = () => {
    debugger
    // console.log(email)
    // console.log(confirmEmail)

    
  }

  return (
    <>
      <div>
        <label className="form-label">Nombre</label>
        <input type="text" className="form-control" 
          {...register("nombre", { required: true, maxLength: 20 })} 
        />
        {errors.nombre?.type === "required" && <p className="text-danger">El campo nombre es requerido</p>}
        {errors.nombre?.type === "maxLength" && <p className="text-danger">El campo nombre es muy largo</p>}
      </div>
      <div>
        <label className="form-label">Telefono</label>
        <input type="text" className="form-control" placeholder="1122334455" 
          {...register("telefono", { required: true, maxLength: 10 })}
        />
        {errors.telefono?.type === "required" && <p className="text-danger">El campo telefono es requerido</p>}
        {errors.telefono?.type === "maxLength" && <p className="text-danger">El campo telefono es muy largo</p>}
      </div>
      <div>
        <label className="form-label">Email</label>
        <input type="email" className="form-control" placeholder="name@example.com" 
          {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} 
        />
        {errors.email?.type === "required" && <p className="text-danger">El campo email es requerido</p>}
        {errors.email?.type === "pattern" && <p className="text-danger">El campo email es incorrecto</p>}
      </div>
      <div>
        <label className="form-label">Volver a ingresar Email</label>
        <input type="email" className="form-control" placeholder="name@example.com" 
          {...register("confirmEmail", { required: true, pattern: /\S+@\S+\.\S+/ })} 
        />
        {errors.email?.type === "required" && <p className="text-danger">El campo email es requerido</p>}
        {errors.email?.type === "pattern" && <p className="text-danger">El campo email es incorrecto</p>}
        {checkEmail()}
      </div>
      
    </>
  )
}

export default GenerateOrder