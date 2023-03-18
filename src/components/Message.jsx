const Message = ({ children }) => {
  if (children == "Data sent successfully..!") {
    return (
      <div className="md:w-full my-3 bg-green-400 text-white font-bold p-2 uppercase text-center">
        {children}
      </div>
    );
  }
  return (
    <div className="md:w-full my-3 bg-black text-white font-bold p-2 uppercase text-center">
      {children}
    </div>
  );
};
export default Message;
