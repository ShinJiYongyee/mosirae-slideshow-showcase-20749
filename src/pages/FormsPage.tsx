import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";

const FormsPage = () => {
  const forms = [
    {
      title: "입주신청서",
      description: "기숙사 입주 신청을 위한 서식입니다",
      category: "입주/퇴주"
    },
    {
      title: "퇴주신청서",
      description: "기숙사 퇴주 신청을 위한 서식입니다",
      category: "입주/퇴주"
    },
    {
      title: "외박신청서",
      description: "외박 신청을 위한 서식입니다",
      category: "생활"
    },
    {
      title: "수리신청서",
      description: "시설 수리 신청을 위한 서식입니다",
      category: "시설"
    },
    {
      title: "방 배정 변경 신청서",
      description: "호실 변경 신청을 위한 서식입니다",
      category: "생활"
    },
    {
      title: "분실신고서",
      description: "물품 분실 신고를 위한 서식입니다",
      category: "기타"
    },
    {
      title: "방문신고서",
      description: "외부인 방문 신고를 위한 서식입니다",
      category: "생활"
    },
    {
      title: "증명서 발급 신청서",
      description: "각종 증명서 발급을 위한 서식입니다",
      category: "기타"
    }
  ];

  const categories = ["전체", "입주/퇴주", "생활", "시설", "기타"];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            메인으로 돌아가기
          </Link>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="mb-8">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">서식 다운로드</CardTitle>
              <p className="text-muted-foreground">각종 서식 및 양식을 다운로드하세요</p>
            </CardHeader>
          </Card>

          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "전체" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forms.map((form, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full">
                      {form.category}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {form.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {form.description}
                  </p>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      다운로드
                    </Button>
                    <Button size="sm" variant="outline">
                      미리보기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-muted/50 rounded-lg">
            <h3 className="font-semibold mb-2">안내사항</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• 서식 작성 후 관리사무소에 제출해주세요</li>
              <li>• 긴급한 사항은 관리사무소로 직접 연락바랍니다</li>
              <li>• 서식 관련 문의: 031-000-0000 (내선 123)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsPage;