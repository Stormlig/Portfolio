const Contact = () => {
  return (
    <section className="sm:w-[80%] xl:w-[70%] 2xl:w-[50%] mx-auto px-12 mt-8 mb-4">
      <div className=" text-white mb-8">
        <h1 className=" mb-8 text-center text-yellow-300 font-bold text-[35px] md:text-[45px] lg:text-[55px]">CONTATO</h1>

        <p className="text-[24px] md:text-[28px] xl:text-[33px]   mb-4">Interessado algo? <span className="text-yellow-300"> Surgiu alguma duvida? </span>
          Ficarei contente em responder. Envie-me uma mensagem</p>

        <p className="text-[25px] mb-14 mt-24  text-slate-400 italic text-center">Feitos grandiosos são realizados quando mentes brilhantes se encontram!</p>
      </div>

      <form
        className="flex flex-col gap-5"
        action="https://formsubmit.co/"
        method="POST"
      >
        <input
          type="text"
          placeholder="Seu nome"
          className="px-4 py-4 rounded-md outline-none ring-1 ring-transparent focus:ring-primary transition-all bg-[#ffffffe8]"
          name="name"
          minLength={4}
          required
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          className="px-4 py-4 rounded-md outline-none ring-1 ring-transparent focus:ring-primary transition-all bg-[#ffffffe8]"
          name="email"
          minLength={7}
          required
        />
        <textarea
          placeholder="Sua mensagem"
          cols={20}
          rows={7}
          className="p-4 rounded-md outline-none ring-1 ring-transparent focus:ring-primary transition-all bg-[#ffffffe8]"
          name="message"
          minLength={10}
          required
        ></textarea>
        <button
          type="submit"
          className="text-white  px-4 py-4 rounded-md font-bold outline-none ring-2 hover:ring-8 mb-8  transition-all duration-200"
        >
          Enviar mensagem
        </button>
      </form>
    </section>
  )
}

export default Contact