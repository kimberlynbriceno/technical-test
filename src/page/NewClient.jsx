import FormB from "../components/FormB"
import {useNavigate, Form } from 'react-router-dom'

export async function action({request}){
    const formData = await request.formData()

     const datos = Object.fromEntries(formData)
     console.log(datos)
      return datos
}


const NewClient = () => {
  const navegate = useNavigate()

  return (
    <div className=" mt-8">
      <div className="flex justify-end">
        <button className="bg-rose-500 px-3  py-2 mb-3 font-bold text-white rounded-md uppercase"
                onClick={() => navegate('/')}>volver</button>
      </div>
    <div className="bg-slate-200 shadow rounded-md md:w-3/4 mx-auto px-5 py-5">
    <p className="font-bold text-2xl text-rose-500 m-5 text-center">Formulario</p>



      <Form
      method='post'>

      <FormB/>
            < input 
                      type="submit" 
                      className="bg-rose-500 px-3 py-2 font-bold text-white rounded-md uppercase md:w-full"
                      value="check in"/>
      </Form>

    </div>
    </div>
    
    
  )
}

export default NewClient
