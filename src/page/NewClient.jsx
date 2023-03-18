import FormB from "../components/FormB"
import { useNavigate, Form, useActionData } from "react-router-dom"
import Message from "../components/Message"

export async function action({ request }) {
  const formData = await request.formData()
  const dataObject = Object.fromEntries(formData)
  const email = formData.get("email")

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  )

  // validacion del form
  const msg = []

  if (Object.values(dataObject).includes("")) {
    msg.push("All fields are required")
  }
  if (!regex.test(email)) {
    msg.push("Invalid email")
  }
  if (Object.keys(msg).length) {
    return msg
  }
  

  const data = JSON.parse(localStorage.getItem("data")) ?? []
  data.push(dataObject)
  localStorage.setItem("data", JSON.stringify(data))
  // TODO RESET
  document.getElementById("formId").reset();

  msg.push("todo bien")
  
  if (msg.length) {
    return msg
  }


  return"ok"
}

const NewClient = () => {
  const navegate = useNavigate()
  const msg = useActionData()


  return (
    <>
      <div className=" mt-8">
        <div className="flex justify-end">
          <button
            className="bg-rose-500 px-4  py-2 mb-3 font-bold text-white uppercase"
            onClick={() => navegate("/")}
          >
            Back
          </button>
        </div>
        <div className="bg-slate-200 shadow rounded-md md:w-3/4 mx-auto px-5 py-5">
          <p className="font-bold text-2xl text-rose-500 m-5 text-center">
            Contact Form{" "}
          </p>

          {Array.isArray(msg) ? msg.map((message, i) => <Message key={i}>{message}</Message>) : []}

          <Form id="formId" method="post">
            <FormB />
            <input
              type="submit"
              className="bg-rose-500 px-3 py-2 font-bold text-white uppercase md:w-full"
              value="check in"
            />
          </Form>
        </div>
      </div>
    </>
  )
}

export default NewClient
