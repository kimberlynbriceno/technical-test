const FormB = () => {
  return (
    <div>
      <>
        <div className="mb-4">
          <label className="text-gray-800 font-bold" htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-white"
            placeholder="Name"   
            name="name"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800 font-bold" htmlFor="email">
            E-mail:
          </label>
          <input
            id="email"
            type="email"
            className="mt-2 block w-full p-3 bg-white"
            placeholder="Email"
            name="email"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800 font-bold" htmlFor="phone">
            Phone:
          </label>
          <input
            id="phone"
            type="tel"
            className="mt-2 block w-full p-3 bg-white"
            placeholder="Phone"
            name="phone"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800 font-bold" htmlFor="note">
            Note:
          </label>
          <textarea
            id="note"
            type="text"
            className="mt-2 block w-full p-3 bg-white h-40 align-self"
            placeholder="Give us a notez"
            name="note"
          />
        </div>
      </>
    </div>
  );
};

export default FormB;
