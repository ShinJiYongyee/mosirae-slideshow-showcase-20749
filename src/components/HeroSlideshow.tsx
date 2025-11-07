import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import campusSportsField from "@/assets/campus-sports-field.jpg";
import dormitoryBuilding from "@/assets/dormitory-building.jpg";
import campusWinterAerial from "@/assets/campus-winter-aerial.jpg";

const slides = [
  {
    id: 1,
    image: campusSportsField,
    title: "모시래학사 25'2 관생 추가모집 공고",
    subtitle: "8/14(목) 09시 ~ 마감 시까지",
    description: "※ 선착순 메일 접수",
    link: "#recruitment"
  },
  {
    id: 2,
    image: dormitoryBuilding,
    title: "모시래학사 25'2 식당 이용 수칙 안내",
    subtitle: "새로운 식당 운영 방침",
    description: "상세 내용을 확인해주세요",
    link: "#dining"
  },
  {
    id: 3,
    image: campusWinterAerial,
    title: "생활관 25'2 외박 신청 안내",
    subtitle: "외박 신청 절차 안내",
    description: "온라인 신청 바로가기",
    link: "#overnight"
  }
];

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto text-center text-white">
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white max-w-2xl mx-auto">
                      <CardContent className="p-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                          {slide.title}
                        </h2>
                        <p className="text-xl mb-2 text-white/90">
                          {slide.subtitle}
                        </p>
                        <p className="text-lg mb-6 text-white/80">
                          {slide.description}
                        </p>
                        <Button 
                          variant="secondary" 
                          size="lg"
                          className="bg-primary hover:bg-primary-light text-primary-foreground"
                        >
                          바로가기
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
        
        <Button
          variant="ghost"
          size="sm"
          className="ml-4 bg-black/20 hover:bg-black/40 text-white"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
      </div>
    </section>
  );
};

export default HeroSlideshow;