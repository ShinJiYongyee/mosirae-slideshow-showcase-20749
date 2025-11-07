import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "생활관소개", href: "#about" },
    { name: "모시래 LIFE", href: "#life" },
    { name: "생활수칙", href: "#rules" },
    { name: "입/퇴관 안내", href: "#checkin" },
    { name: "정보광장", href: "#info" },
    { name: "소리함", href: "#contact" },
  ];

  return (
    <header className="bg-card shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">건</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">건국대학교 글로컬캠퍼스</h1>
              <p className="text-sm text-muted-foreground">생활관 모시래학사</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button variant="outline" size="sm">
              로그인
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-card absolute top-16 left-0 right-0 shadow-lg">
            <nav className="flex flex-col p-4 space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="outline" size="sm" className="w-fit">
                로그인
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;