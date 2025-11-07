import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

const CheckinPage = () => {
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
                <Home className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">입·퇴실 신청</CardTitle>
              <p className="text-muted-foreground">기숙사 입퇴실 신청을 진행하세요</p>
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
                  <Label htmlFor="type">신청 종류</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="신청 종류를 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="checkin">입실 신청</SelectItem>
                      <SelectItem value="checkout">퇴실 신청</SelectItem>
                      <SelectItem value="temporary">임시 외출</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">신청 날짜</Label>
                  <Input id="date" type="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">사유</Label>
                  <Input id="reason" placeholder="신청 사유를 입력하세요" />
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

export default CheckinPage;