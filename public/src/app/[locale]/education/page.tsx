export default function EducationPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-12">
      <section className="space-y-6 animate-fade-in">
        <h1 className="text-5xl font-heading font-bold text-gold">Education & Learning</h1>
        <p className="text-lg text-text/80">
          Learn traditional Mongolian arts, crafts, and cultural knowledge from master practitioners.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-heading font-bold text-gold">Courses Available</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Traditional Calligraphy', level: 'Beginner' },
            { title: 'Throat Singing Basics', level: 'Beginner' },
            { title: 'Textile Weaving', level: 'All Levels' },
            { title: 'Horseback Archery', level: 'Intermediate' },
          ].map((course) => (
            <div key={course.title} className="p-6 border border-gold/20 rounded hover:border-gold/40 transition cursor-pointer">
              <h3 className="font-heading text-gold font-bold mb-2">{course.title}</h3>
              <p className="text-muted text-sm mb-3">Level: {course.level}</p>
              <button className="px-4 py-2 bg-gold/20 text-gold rounded text-sm hover:bg-gold/30 transition">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-heading font-bold text-gold">Program Format</h2>
        <div className="space-y-3 text-text/80">
          <div className="flex gap-3">
            <span className="text-gold font-bold">▪</span>
            <span>Weekly classes (2-3 hours)</span>
          </div>
          <div className="flex gap-3">
            <span className="text-gold font-bold">▪</span>
            <span>Weekend workshops (full day)</span>
          </div>
          <div className="flex gap-3">
            <span className="text-gold font-bold">▪</span>
            <span>Online courses available</span>
          </div>
          <div className="flex gap-3">
            <span className="text-gold font-bold">▪</span>
            <span>One-on-one private lessons</span>
          </div>
        </div>
      </section>
    </div>
  )
}
