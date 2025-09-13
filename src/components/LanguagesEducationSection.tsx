import { Globe, GraduationCap, Star } from "lucide-react";

const LanguagesEducationSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Languages Section */}
          <div className="card-creative">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-secondary rounded-full">
                <Globe className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">LANGUAGES</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="font-semibold text-lg">English</span>
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇵🇰</span>
                  <span className="font-semibold text-lg">Urdu</span>
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} size={16} className="fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground mt-4">
                <strong>English:</strong> Fluent in professional communication
                <br />
                <strong>Urdu:</strong> Native speaker
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="card-creative">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent rounded-full">
                <GraduationCap className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold">EDUCATION</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-bold text-lg text-primary mb-2">
                  Bachelor of Fine Arts
                </h4>
                <p className="text-muted-foreground mb-1">Graphic Design & Digital Media</p>
                <p className="text-sm text-muted-foreground">University of Punjab, Lahore</p>
                <p className="text-sm text-muted-foreground">2019 - 2023</p>
              </div>
              
              <div className="border-l-4 border-secondary pl-6">
                <h4 className="font-bold text-lg text-secondary mb-2">
                  UI/UX Design Certification
                </h4>
                <p className="text-muted-foreground mb-1">User Experience Design</p>
                <p className="text-sm text-muted-foreground">Google Career Certificates</p>
                <p className="text-sm text-muted-foreground">2023</p>
              </div>
              
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-lg text-accent mb-2">
                  Motion Design Workshop
                </h4>
                <p className="text-muted-foreground mb-1">Advanced Animation Techniques</p>
                <p className="text-sm text-muted-foreground">School of Motion</p>
                <p className="text-sm text-muted-foreground">2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesEducationSection;