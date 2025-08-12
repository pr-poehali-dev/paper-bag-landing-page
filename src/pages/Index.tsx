import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-muted to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Package" className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-heading font-bold text-secondary">ЭкоМешки</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-secondary hover:text-primary transition-colors">О нас</a>
              <a href="#products" className="text-secondary hover:text-primary transition-colors">Продукция</a>
              <a href="#advantages" className="text-secondary hover:text-primary transition-colors">Преимущества</a>
              <a href="#contact" className="text-secondary hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Заказать
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-secondary mb-6 leading-tight">
            Экологически чистые
            <span className="text-primary block">бумажные мешки</span>
          </h2>
          <p className="text-xl text-secondary/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Производим качественную упаковку из переработанных материалов для заботы о природе и вашем бизнесе
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
              Заказать мешки
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-secondary hover:bg-secondary hover:text-white">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-secondary text-center mb-16">
            Наша продукция
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Мешки для муки",
                description: "Прочные мешки из крафт-бумаги для сыпучих продуктов",
                image: "/img/caee7118-aae1-46d6-bc20-c2aa15bee30c.jpg",
                price: "от 25 ₽/шт"
              },
              {
                title: "Мешки для цемента",
                description: "Усиленные мешки для строительных материалов",
                image: "/img/caee7118-aae1-46d6-bc20-c2aa15bee30c.jpg",
                price: "от 30 ₽/шт"
              },
              {
                title: "Продуктовые мешки",
                description: "Безопасные мешки для пищевых продуктов",
                image: "/img/caee7118-aae1-46d6-bc20-c2aa15bee30c.jpg",
                price: "от 20 ₽/шт"
              }
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-heading mb-2">{product.title}</CardTitle>
                  <CardDescription className="text-secondary/70 mb-4">{product.description}</CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <Icon name="Plus" className="h-4 w-4 mr-1" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-secondary text-center mb-16">
            Наши преимущества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Leaf",
                title: "100% экологично",
                description: "Изготовлены из переработанных материалов"
              },
              {
                icon: "Shield",
                title: "Высокое качество",
                description: "Прочные и надежные в использовании"
              },
              {
                icon: "Truck",
                title: "Быстрая доставка",
                description: "Доставим в любую точку России"
              },
              {
                icon: "Heart",
                title: "Забота о природе",
                description: "Биоразлагаемые материалы"
              }
            ].map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={advantage.icon} className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-secondary">{advantage.title}</h3>
                <p className="text-secondary/70">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-secondary mb-6">
                О компании ЭкоМешки
              </h2>
              <p className="text-lg text-secondary/70 mb-6 leading-relaxed">
                Мы специализируемся на производстве экологически чистых бумажных мешков из переработанных материалов. 
                Наша миссия — предоставить качественную упаковку, которая не вредит окружающей среде.
              </p>
              <p className="text-lg text-secondary/70 mb-8 leading-relaxed">
                Более 10 лет опыта в производстве, современное оборудование и строгий контроль качества 
                позволяют нам создавать продукцию, которой доверяют тысячи клиентов по всей России.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-secondary/70">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10</div>
                  <div className="text-secondary/70">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center">
                <Icon name="Factory" className="h-32 w-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-secondary text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-white/80 mb-8 text-lg">
                Готовы обсудить ваш заказ или ответить на любые вопросы о нашей продукции
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Phone" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-white/80">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Mail" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-white/80">info@ecomeshki.ru</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="MapPin" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-white/80">г. Москва, ул. Промышленная, 15</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold text-secondary mb-6">Оставьте заявку</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-secondary"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон"
                    className="w-full px-4 py-3 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-secondary"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Сообщение"
                    rows={4}
                    className="w-full px-4 py-3 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-secondary resize-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 py-3 text-lg">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/10 py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Package" className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-heading font-bold text-secondary">ЭкоМешки</h1>
          </div>
          <p className="text-secondary/70 mb-6">
            Экологически чистые бумажные мешки для вашего бизнеса
          </p>
          <div className="flex justify-center space-x-6 text-secondary/60">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
          </div>
          <div className="mt-6 pt-6 border-t border-accent text-secondary/50">
            © 2024 ЭкоМешки. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;