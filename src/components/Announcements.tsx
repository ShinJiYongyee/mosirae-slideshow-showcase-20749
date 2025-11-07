import { Calendar, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const announcements = [
  {
    id: 1,
    title: "25-2 입시 이용 수칙 안내",
    date: "2025-08-27",
    status: "중요",
    preview: "새 학기 생활관 이용에 관한 중요 안내사항입니다."
  },
  {
    id: 2,
    title: "25-2 생활관 위반 신청안내서",
    date: "2025-08-27",
    status: "일반",
    preview: "생활관 규정 위반 시 신청 절차에 대한 안내입니다."
  },
  {
    id: 3,
    title: "25-2 모시래학사 봉사활동 선발안내",
    date: "2025-08-25",
    status: "모집",
    preview: "생활관 봉사활동 참여자를 모집합니다."
  },
  {
    id: 4,
    title: "25-2 입시도우미(자치위 도우미) 선발 안내",
    date: "2025-08-19",
    status: "모집",
    preview: "자치위원회 도우미 선발에 관한 공지사항입니다."
  },
  {
    id: 5,
    title: "25-2 모시래학사 입사 안내",
    date: "2025-07-31",
    status: "일반",
    preview: "새 학기 입사 절차 및 준비사항 안내입니다."
  }
];

const mealInfo = [
  {
    meal: "아침",
    calories: "997kcal/43.88g",
    menu: ["기장밥", "시래기곰국", "고등어조림", "미트볼옵", "모듬야채겉절이", "배추김치", "우유"]
  },
  {
    meal: "점심",
    calories: "1101kcal/46.25g",
    menu: ["현미쌀밥", "참치찌개", "군만두", "깐쇼새우볼", "건향화두부숙", "총각김치"]
  },
  {
    meal: "저녁",
    calories: "1052kcal/47.25g",
    menu: ["흰미쌀밥", "순두부찌개", "갈치찜", "부산어묵", "배추김치", "배추음치"]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "중요":
      return "destructive";
    case "모집":
      return "default";
    default:
      return "secondary";
  }
};

const Announcements = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* 공지사항 */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                공지사항
              </CardTitle>
              <Button variant="outline" size="sm">
                더보기 <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className="flex items-start justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={getStatusColor(announcement.status)} className="text-xs">
                          {announcement.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {announcement.date}
                        </span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-1 hover:text-primary transition-colors">
                        {announcement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {announcement.preview}
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground ml-4 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 오늘의 식단 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                오늘의 식단
                <span className="text-sm font-normal text-muted-foreground ml-2">
                  2025-09-07
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {mealInfo.map((meal, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-lg text-foreground">
                        {meal.meal}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {meal.calories}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {meal.menu.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="text-sm text-muted-foreground bg-muted/30 px-2 py-1 rounded text-center"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Announcements;