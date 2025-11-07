import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const OvernightPage = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            메인으로 돌아가기
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">외박신청</CardTitle>
              <p className="text-muted-foreground">외박 신청 및 관리를 진행하세요</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="student-id">학번</Label>
                  <Input id="student-id" placeholder="학번을 입력하세요" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="name">이름</Label>
                  <Input id="name" placeholder="이름을 입력하세요" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="room">호실</Label>
                  <Input id="room" placeholder="호실을 입력하세요" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-date">외박 시작일</Label>
                    <Input id="start-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-date">외박 종료일</Label>
                    <Input id="end-date" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destination">외박 장소</Label>
                  <Input id="destination" placeholder="외박 장소를 입력하세요" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">연락처</Label>
                  <Input id="contact" placeholder="연락 가능한 전화번호를 입력하세요" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">외박 사유</Label>
                  <Textarea id="reason" placeholder="외박 사유를 자세히 입력하세요" rows={3} />
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1">신청하기</Button>
                <Button variant="outline" className="flex-1">초기화</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OvernightPage;