export default function Contact() {
  const whatsappUrl = `https://wa.me/7397268063`;

  return (
    <section id="Contact" className="flex flex-col px-5 py-32 text-white">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl border-b-4  border-secondary mb-5 w-[170px] font-bold">
          CONTACT
        </h1>
        <p className="pb-5 text-gray-300">
          If you want to discuss more in detail, please contact me
        </p>

        <div className=" flex flex-row">
          <p className="text-xl mr-3 ">
            <b>Email:</b>
          </p>
          <a
            className="hover:text-gray-500 mt-1"
            href="mailto:hemanthkumarv2k02@gmail.com?subject=Hello%20there&body=This%20is%20a%20predefined%20email%20body."
          >
            hemanthkumarv2k02@gmail.com
          </a>
        </div>

        <div className="flex mt-1">
          <p className="text-xl mr-3 mt-1">
            <b>Phone No:</b>
          </p>

          <p className="py-2 hover:text-gray-500">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              +917397268063
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
