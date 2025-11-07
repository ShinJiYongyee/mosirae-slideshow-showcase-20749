import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const PointsPage = () => {
  const sampleRecords = [
    { date: "2024-03-15", type: "상점", points: 5, reason: "청소 우수" },
    { date: "2024-03-10", type: "벌점", points: -2, reason: "늦은 귀가" },
    { date: "2024-03-05", type: "상점", points: 3, reason: "동아리 활동" },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            메인으로 돌아가기
          </Link>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">상/벌점 조회</CardTitle>
              <p className="text-muted-foreground">개인 상벌점을 확인하세요</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="student-id">학번</Label>
                  <div className="flex gap-2">
                    <Input id="student-id" placeholder="학번을 입력하세요" className="flex-1" />
                    <Button>조회</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>상벌점 현황</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">총 상점</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">8점</p>
                </div>
                <div className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">총 벌점</p>
                  <p className="text-2xl font-bold text-red-600 dark:text-red-400">-2점</p>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">누적 점수</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">6점</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">상벌점 내역</h3>
                <div className="space-y-3">
                  {sampleRecords.map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Badge variant={record.type === "상점" ? "default" : "destructive"}>
                          {record.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{record.date}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm">{record.reason}</span>
                        <span className={`font-semibold ${record.points > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {record.points > 0 ? '+' : ''}{record.points}점
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PointsPage;