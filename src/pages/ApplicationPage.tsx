import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Building } from "lucide-react";
import { Link } from "react-router-dom";

const ApplicationPage = () => {
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
                <Building className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">관생신청</CardTitle>
              <p className="text-muted-foreground">생활관 입주 신청을 진행하세요</p>
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
                  <Label htmlFor="department">학과</Label>
                  <Input id="department" placeholder="학과를 입력하세요" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="grade">학년</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="학년을 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1학년</SelectItem>
                      <SelectItem value="2">2학년</SelectItem>
                      <SelectItem value="3">3학년</SelectItem>
                      <SelectItem value="4">4학년</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">연락처</Label>
                  <Input id="phone" placeholder="연락처를 입력하세요" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input id="email" type="email" placeholder="이메일을 입력하세요" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="room-type">희망 호실 유형</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="호실 유형을 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2-person">2인실</SelectItem>
                      <SelectItem value="4-person">4인실</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="special-needs">특별 요청 사항</Label>
                  <Textarea id="special-needs" placeholder="특별한 요청사항이 있으시면 입력해주세요" rows={3} />
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

export default ApplicationPage;