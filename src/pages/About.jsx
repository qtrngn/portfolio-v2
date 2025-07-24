const About = () => {
  return (
    <>
      <section className="w-full px-6 py-40 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10">
          {/* Left: Section title */}
          <h2 className="text-3xl font-extrabold leading-snug text-gray-700">
           QUYNH
          </h2>
          <br />
          <div className="w-full md:w-2/3 space-y-4 leading-loose ">
          <p>
            I didn't start my career in tech. After graduating from a
            hospitality program, I spent couple years working in the industry. I
            taught me alot: how to communicate with people, stay calm under
            pressure, and adapt quickly. <br />
            However, I've always been drawn to technology. As a kid, I spent
            countless hours playing video games, and exploring anything
            tech-related I could get my hands on.
            <br />
            After a lot of thought. I decided to go back to school study web
            development and fully dive into a field I genuinely interested
            about. Since then, I've been learning everything I can from
            front-end development and design to back-end logic, and I've never
            been more excited about where I'm headed.
          </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
