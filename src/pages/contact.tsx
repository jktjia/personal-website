export default function Contact() {
  return (
    <>
      <title>Contact Me</title>
      <div className="text-center text-4xl flex flex-row items-center gap-2 pt-10">
        Contact Me
      </div>
      <div className="flex flex-row gap-6 pb-6">
        <form className="flex flex-col flex-grow gap-4 py-6 sm:w-96">
          <div className="flex flex-col text-start gap-2">
            Name:
            <input
              placeholder="Enter your name"
              className="p-2 rounded-md bg-white text-secondary border-2 border-black"
            />
          </div>
          <div className="flex flex-col text-start gap-2">
            Email:
            <input
              placeholder="Enter your email"
              className="p-2 rounded-md bg-white text-secondary border-2 border-black"
            />
          </div>
          <div className="flex flex-col text-start gap-2 flex-grow">
            Message:
            <textarea
              placeholder="Type your message here"
              className="p-2 rounded-md bg-white text-primary border-2 border-black"
            />
          </div>
        </form>
        <div className="border-x border-foreground" />
        <div></div>
      </div>
    </>
  );
}
