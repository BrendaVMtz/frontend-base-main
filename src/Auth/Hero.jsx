
export default function Hero() {


    const height = "h-[calc(100vh-8rem)]";
    return (
        <section className={`mt-4 flex flex-col items-center justify-center px-4 text-white md:mx-10 ${height}`} id="inicio">
           
            <img src="https://www.bbva.com/wp-content/uploads/2022/06/BBVA-finanzas-personales-y-corporativas.jpg" className="absolute h-full w-full rounded-3xl object-cover"/>
            <div className="flex flex-col gap-3"/>
            <h1 className="text-center text 4x1 font-bold text-black md:text-8xl">Bienvenido</h1>
            
            
        </section>
    );
}
