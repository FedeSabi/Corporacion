const Contactanos = () => {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form
          action="https://mailbackend-6z8t.onrender.com/mail/6527fd554a0d07bc116c4f2c/formularioID/0"
          method="POST"
        >
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Nombre Completo
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre Completo"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Asunto
            </label>
            <input
              type="text"
              name="Asunto"
              id="subject"
              placeholder="Ingrese asunto"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Mensaje
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Escriba su Mensaje"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-azul-joginere focus:shadow-md"
            ></textarea>
          </div>
          <div className="mb-5">
            <label
              htmlFor="attachments"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Adjuntar Archivos
            </label>
            <input
              type="file"
              name="attachments"
              id="attachments"
              className="w-full border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              multiple
            />
          </div>
          <div>
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-azul-joginere py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactanos;
