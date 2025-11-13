import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const faceExercises = [
    {
      title: 'Лимфодренажный массаж',
      description: 'Мягкие движения от центра лица к периферии для вывода лишней жидкости',
      icon: 'Droplets'
    },
    {
      title: 'Упражнение "Рыбка"',
      description: 'Надувание щёк и перекатывание воздуха снимает утренние отёки',
      icon: 'Waves'
    },
    {
      title: 'Массаж височной зоны',
      description: 'Круговые движения в области висков улучшают кровоток',
      icon: 'CircleDot'
    },
    {
      title: 'Техника "Скульптор"',
      description: 'Проработка скул и подбородка для чёткого овала лица',
      icon: 'Sparkles'
    }
  ];

  const skincare = [
    {
      title: 'Утренний уход',
      products: ['Гидрофильное масло', 'Пенка с pH 5.5', 'Тоник с гиалуроновой кислотой', 'Увлажняющий крем с SPF'],
      icon: 'Sunrise'
    },
    {
      title: 'Вечерний уход',
      products: ['Мицеллярная вода', 'Ретинол-сыворотка', 'Питательный крем', 'Патчи для глаз'],
      icon: 'Moon'
    },
    {
      title: 'Еженедельный уход',
      products: ['Скраб с AHA-кислотами', 'Увлажняющая маска', 'Тканевая маска с витамином C'],
      icon: 'Calendar'
    }
  ];

  const makeupTips = [
    {
      title: 'Идеальный тон',
      steps: ['Праймер для ровной текстуры', 'Тональный крем тонким слоем', 'Консилер только на проблемные зоны', 'Фиксация прозрачной пудрой'],
      icon: 'Palette'
    },
    {
      title: 'Выразительные глаза',
      steps: ['Светлая база под тени', 'Тёмный оттенок в складку века', 'Хайлайтер во внутренний уголок', 'Тушь в 2 слоя'],
      icon: 'Eye'
    },
    {
      title: 'Свежие губы',
      steps: ['Скраб для губ', 'Увлажняющий бальзам', 'Контур на тон темнее', 'Блеск в центр для объёма'],
      icon: 'Heart'
    }
  ];

  const nutrition = [
    {
      category: 'Белки',
      items: ['Куриная грудка', 'Рыба (лосось, треска)', 'Яйца', 'Греческий йогурт', 'Творог'],
      icon: 'Beef'
    },
    {
      category: 'Сложные углеводы',
      items: ['Овсянка', 'Киноа', 'Бурый рис', 'Цельнозерновой хлеб', 'Батат'],
      icon: 'Wheat'
    },
    {
      category: 'Полезные жиры',
      items: ['Авокадо', 'Орехи (миндаль, грецкие)', 'Оливковое масло', 'Семена чиа', 'Жирная рыба'],
      icon: 'Apple'
    },
    {
      category: 'Клетчатка',
      items: ['Брокколи', 'Шпинат', 'Ягоды', 'Яблоки', 'Чечевица'],
      icon: 'Leaf'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-primary/5 to-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary-foreground">Beauty Care</h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Упражнения', 'Косметика', 'Макияж', 'Питание'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-sm font-medium text-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Ваша красота начинается здесь
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            Комплексный подход к уходу за собой: упражнения, косметика, макияж и правильное питание
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform">
              Начать уход
            </button>
            <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform">
              Узнать больше
            </button>
          </div>
        </div>
      </section>

      <section id="exercises" className="container mx-auto px-4 py-20 bg-primary/5 rounded-3xl mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Icon name="Sparkles" size={36} className="text-primary-foreground" />
            <h3 className="text-4xl font-bold text-primary-foreground">Упражнения для лица от отёков</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faceExercises.map((exercise, idx) => (
              <Card key={idx} className="animate-scale-in border-none shadow-lg hover:shadow-xl transition-all hover:scale-105" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Icon name={exercise.icon} size={28} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{exercise.title}</h4>
                      <p className="text-muted-foreground">{exercise.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skincare" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Icon name="Sparkle" size={36} className="text-secondary-foreground" />
            <h3 className="text-4xl font-bold text-secondary-foreground">Уходовая косметика и средства</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {skincare.map((routine, idx) => (
              <Card key={idx} className="animate-fade-in border-none shadow-lg bg-secondary/10" style={{ animationDelay: `${idx * 0.15}s` }}>
                <CardContent className="p-6">
                  <div className="bg-secondary p-3 rounded-xl w-fit mb-4">
                    <Icon name={routine.icon} size={28} className="text-secondary-foreground" />
                  </div>
                  <h4 className="text-2xl font-semibold mb-4 text-secondary-foreground">{routine.title}</h4>
                  <ul className="space-y-2">
                    {routine.products.map((product, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={16} className="text-secondary-foreground" />
                        <span className="text-foreground/80">{product}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="makeup" className="container mx-auto px-4 py-20 bg-accent/20 rounded-3xl mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Icon name="Paintbrush" size={36} className="text-accent-foreground" />
            <h3 className="text-4xl font-bold text-accent-foreground">Как красиво краситься</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {makeupTips.map((tip, idx) => (
              <Card key={idx} className="animate-scale-in border-none shadow-lg" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="bg-accent p-3 rounded-xl w-fit mb-4">
                    <Icon name={tip.icon} size={28} className="text-accent-foreground" />
                  </div>
                  <h4 className="text-2xl font-semibold mb-4 text-accent-foreground">{tip.title}</h4>
                  <ol className="space-y-3">
                    {tip.steps.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                          {sIdx + 1}
                        </span>
                        <span className="text-foreground/80">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="nutrition" className="container mx-auto px-4 py-20 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Icon name="Salad" size={36} className="text-primary-foreground" />
            <h3 className="text-4xl font-bold text-primary-foreground">Питание для стройности</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nutrition.map((group, idx) => (
              <Card key={idx} className="animate-fade-in border-none shadow-lg hover:shadow-xl transition-all" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4">
                    <Icon name={group.icon} size={28} className="text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-primary-foreground">{group.category}</h4>
                  <ul className="space-y-2">
                    {group.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        <span className="text-sm text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 py-12">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-2xl font-bold text-primary-foreground mb-4">Beauty Care</h4>
          <p className="text-muted-foreground mb-6">Ваш путеводитель в мире красоты и здоровья</p>
          <div className="flex gap-6 justify-center">
            <Icon name="Instagram" size={24} className="text-muted-foreground hover:text-primary-foreground cursor-pointer transition-colors" />
            <Icon name="Youtube" size={24} className="text-muted-foreground hover:text-primary-foreground cursor-pointer transition-colors" />
            <Icon name="Mail" size={24} className="text-muted-foreground hover:text-primary-foreground cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
