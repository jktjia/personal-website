export default function Contact() {
  return (
    <>
      <div className="text-center text-4xl flex flex-row items-center gap-2 pt-10">
        Contact Me
      </div>
      <div className="flex flex-row">
        <form className="flex flex-col">
          <div className="flex flex-col text-start">
            Name:
            <input />
          </div>
          <div className="flex flex-col text-start">
            Email:
            <input />
          </div>
          <div className="flex flex-col text-start">
            Message:
            <textarea />
          </div>
        </form>
        <div>Email:</div>
      </div>
    </>
  );
}
