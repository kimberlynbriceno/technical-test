import {useEffect} from 'react'
import FormB from "../components/FormB"
import {useNavigate, Form, useActionData} from 'react-router-dom'
import Error from "../components/Error"



export async function action({request}){
    const formData = await request.formData()
     const datos = Object.fromEntries(formData)
     const email= formData.get('email')

     localStorage.setItem('datos', JSON.stringify(datos));

      let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

      // validacion del form
    const errores = []

    if(Object.values(datos).includes('')){
      errores.push('todos los campos son obligatorio')
    }
    if(!regex.test(datos.email)){
      errores.push('email no valido')
    }
    if(Object.keys(errores).length){
      return errores 
    }
    console.log(datos)

return('desdeaction')
}




const NewClient = () => {
  const navegate = useNavigate()
  const errores = useActionData()

console.log(typeof(errores))
 


  return (
    <>
    <div className=" mt-8">
      <div className="flex justify-end">
        <button className="bg-rose-500 px-4  py-2 mb-3 font-bold text-white uppercase"
                onClick={() => navegate('/')}>volver</button>
      </div>
    <div className="bg-slate-200 shadow rounded-md md:w-3/4 mx-auto px-5 py-5">
    <p className="font-bold text-2xl text-rose-500 m-5 text-center">Form</p>


    {/* {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)} */}


      <Form
      method='post'>

      <FormB/>
            < input 
                      type="submit" 
                      className="bg-rose-500 px-3 py-2 font-bold text-white uppercase md:w-full"
                      value="check in"/>
      </Form>

    </div>
    </div>
    
   </> 
  )
}

export default NewClient
