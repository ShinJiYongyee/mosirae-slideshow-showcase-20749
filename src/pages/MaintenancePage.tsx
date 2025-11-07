import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const MaintenancePage = () => {
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
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">민원/수리 신청</CardTitle>
              <p className="text-muted-foreground">시설 수리 및 민원을 신청하세요</p>
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

                <div className="space-y-2">
                  <Label htmlFor="category">신청 유형</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="신청 유형을 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electrical">전기 관련</SelectItem>
                      <SelectItem value="plumbing">상하수도</SelectItem>
                      <SelectItem value="heating">난방 관련</SelectItem>
                      <SelectItem value="furniture">가구 수리</SelectItem>
                      <SelectItem value="internet">인터넷 관련</SelectItem>
                      <SelectItem value="other">기타 민원</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">긴급도</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="긴급도를 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">긴급</SelectItem>
                      <SelectItem value="medium">보통</SelectItem>
                      <SelectItem value="low">낮음</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">연락처</Label>
                  <Input id="contact" placeholder="연락 가능한 전화번호를 입력하세요" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">상세 내용</Label>
                  <Textarea 
                    id="description" 
                    placeholder="수리가 필요한 부분이나 민원 내용을 자세히 설명해주세요" 
                    rows={4} 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferred-time">희망 방문 시간</Label>
                  <Input id="preferred-time" placeholder="희망하는 수리 시간대를 입력하세요" />
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

export default MaintenancePage;