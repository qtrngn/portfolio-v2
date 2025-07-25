import Profile from "../assets/images/profile.webp";

const About = () => {
  return (
    <section className="w-full px-6 py-20 bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10 items-start pt-20">


        {/* Left: Title + Image */}
   <div className="p-6 rounded-2xl shadow-2xl bg-white w-[300px]">


  <div className="rounded-2xl overflow-hidden">
    <img
      src={Profile}
      alt="profile"
      className="w-full h-[350px] object-cover"
    />
  </div>
  <h2 className="text-3xl font-extrabold leading-snug text-gray-700 text-center mt-4">
    QUYNH
  </h2>
</div>
        {/* Right: About Paragraph */}
        <div className="md:w-2/3 text-sm md:text-base text-gray-700 leading-relaxed space-y-4">
          <p>
            I didn't start my career in tech. After graduating from a
            hospitality program, I spent a couple of years working in the
            industry. It taught me a lot: how to communicate with people, stay
            calm under pressure, and adapt quickly.
          </p>
          <p>
            However, I've always been drawn to technology. As a kid, I spent
            countless hours playing video games and exploring anything
            tech-related I could get my hands on.
          </p>
          <p>
            After a lot of thought, I decided to go back to school to study web
            development and fully dive into a field I’m genuinely passionate
            about. Since then, I’ve been learning everything I can — from
            front-end development and design to back-end logic — and I’ve never
            been more excited about where I’m headed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
