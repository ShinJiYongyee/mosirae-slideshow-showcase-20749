import { Home, Clock, Building, Shield, Wrench, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "입·퇴실 신청",
    description: "기숙사 입퇴실 신청",
    href: "/checkin"
  },
  {
    icon: Clock,
    title: "외박신청",
    description: "외박 신청 및 관리",
    href: "/overnight"
  },
  {
    icon: Building,
    title: "관생신청",
    description: "생활관 입주 신청",
    href: "/application"
  },
  {
    icon: Shield,
    title: "상/벌점 조회",
    description: "개인 상벌점 확인",
    href: "/points"
  },
  {
    icon: Wrench,
    title: "민원/수리",
    description: "시설 수리 신청",
    href: "/maintenance"
  },
  {
    icon: FileText,
    title: "서식 다운로드",
    description: "각종 서식 및 양식",
    href: "/forms"
  }
];

const QuickServices = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            빠른 서비스
          </h2>
          <p className="text-muted-foreground text-lg">
            자주 사용하는 서비스에 빠르게 접근하세요
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                to={service.href}
                className="block"
              >
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickServices;