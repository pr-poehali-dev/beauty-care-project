import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  
  const [trackerData, setTrackerData] = useState({
    morning: {
      water: false,
      skincare: false,
      exercise: false,
      breakfast: false
    },
    day: {
      water: false,
      lunch: false,
      posture: false
    },
    evening: {
      water: false,
      skincare: false,
      makeup: false,
      dinner: false
    }
  });

  const toggleTask = (period: 'morning' | 'day' | 'evening', task: string) => {
    setTrackerData(prev => ({
      ...prev,
      [period]: {
        ...prev[period],
        [task]: !prev[period][task as keyof typeof prev.morning]
      }
    }));
  };

  const getProgress = (period: 'morning' | 'day' | 'evening') => {
    const tasks = Object.values(trackerData[period]);
    const completed = tasks.filter(Boolean).length;
    return Math.round((completed / tasks.length) * 100);
  };

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

  const mealPlan = [
    {
      meal: 'Завтрак',
      time: '8:00 - 9:00',
      icon: 'Coffee',
      examples: [
        {
          name: 'Овсянка с ягодами',
          ingredients: 'Овсяные хлопья 50г, греческий йогурт, ягоды, мёд',
          calories: '320 ккал'
        },
        {
          name: 'Омлет с авокадо',
          ingredients: '2 яйца, авокадо, помидоры черри, цельнозерновой тост',
          calories: '380 ккал'
        },
        {
          name: 'Смузи-боул',
          ingredients: 'Банан, ягоды, протеин, гранола, семена чиа',
          calories: '350 ккал'
        }
      ]
    },
    {
      meal: 'Обед',
      time: '13:00 - 14:00',
      icon: 'UtensilsCrossed',
      examples: [
        {
          name: 'Куриная грудка с киноа',
          ingredients: 'Куриная грудка 150г, киноа 80г, салат из овощей',
          calories: '450 ккал'
        },
        {
          name: 'Запечённый лосось',
          ingredients: 'Лосось 150г, бурый рис, брокколи на пару',
          calories: '480 ккал'
        },
        {
          name: 'Боул с тофу',
          ingredients: 'Тофу 120г, батат, шпинат, авокадо, кунжут',
          calories: '420 ккал'
        }
      ]
    },
    {
      meal: 'Ужин',
      time: '18:00 - 19:00',
      icon: 'Moon',
      examples: [
        {
          name: 'Запечённая треска',
          ingredients: 'Треска 150г, овощи гриль, салат с оливковым маслом',
          calories: '380 ккал'
        },
        {
          name: 'Индейка с овощами',
          ingredients: 'Индейка 150г, цветная капуста, морковь, зелень',
          calories: '360 ккал'
        },
        {
          name: 'Творожная запеканка',
          ingredients: 'Творог 150г, яйцо, ягоды, мёд',
          calories: '320 ккал'
        }
      ]
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
          <p className="text-xl text-muted-foreground text-center mb-12">
            Трёхразовое сбалансированное питание с примерами блюд
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {mealPlan.map((meal, idx) => (
              <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <Card className="border-none shadow-lg mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Icon name={meal.icon} size={24} className="text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-primary-foreground">{meal.meal}</h4>
                        <p className="text-sm text-muted-foreground">{meal.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-4">
                  {meal.examples.map((example, eIdx) => (
                    <Card key={eIdx} className="border-none shadow-md hover:shadow-lg transition-all hover:scale-102">
                      <CardContent className="p-5">
                        <h5 className="text-lg font-semibold mb-2 text-foreground">{example.name}</h5>
                        <p className="text-sm text-muted-foreground mb-3">{example.ingredients}</p>
                        <div className="flex items-center gap-2">
                          <Icon name="Flame" size={16} className="text-primary-foreground" />
                          <span className="text-sm font-medium text-primary-foreground">{example.calories}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-primary/10 rounded-2xl">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={24} className="text-primary-foreground flex-shrink-0 mt-1" />
              <div>
                <h5 className="text-lg font-semibold mb-2 text-primary-foreground">Советы по питанию</h5>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-foreground">•</span>
                    <span>Пейте 1.5-2 литра воды в день</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-foreground">•</span>
                    <span>Перерыв между приёмами пищи 4-5 часов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-foreground">•</span>
                    <span>Последний приём пищи за 3 часа до сна</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-foreground">•</span>
                    <span>Добавьте полезные перекусы: орехи, фрукты, кефир</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tracker" className="container mx-auto px-4 py-20 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="ClipboardCheck" size={36} className="text-primary-foreground" />
              <h3 className="text-4xl font-bold text-primary-foreground">Трекер ухода</h3>
            </div>
            <p className="text-xl text-muted-foreground">
              Организуйте свой день: отмечайте выполненные задачи и следите за прогрессом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg bg-gradient-to-br from-primary/10 to-primary/5 animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary p-2 rounded-lg">
                      <Icon name="Sunrise" size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary-foreground">Утро</h4>
                      <p className="text-sm text-muted-foreground">6:00 - 12:00</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-foreground">{getProgress('morning')}%</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <Checkbox 
                      checked={trackerData.morning.water}
                      onCheckedChange={() => toggleTask('morning', 'water')}
                      id="morning-water"
                    />
                    <label htmlFor="morning-water" className="flex-1 cursor-pointer text-foreground">
                      Выпить стакан воды
                    </label>
                    <Icon name="Droplet" size={18} className="text-primary-foreground" />
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <Checkbox 
                      checked={trackerData.morning.skincare}
                      onCheckedChange={() => toggleTask('morning', 'skincare')}
                      id="morning-skincare"
                    />
                    <label htmlFor="morning-skincare" className="flex-1 cursor-pointer text-foreground">
                      Утренний уход за кожей
                    </label>
                    <Icon name="Sparkles" size={18} className="text-primary-foreground" />
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <Checkbox 
                      checked={trackerData.morning.exercise}
                      onCheckedChange={() => toggleTask('morning', 'exercise')}
                      id="morning-exercise"
                    />
                    <label htmlFor="morning-exercise" className="flex-1 cursor-pointer text-foreground">
                      Упражнения для лица
                    </label>
                    <Icon name="Smile" size={18} className="text-primary-foreground" />
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <Checkbox 
                      checked={trackerData.morning.breakfast}
                      onCheckedChange={() => toggleTask('morning', 'breakfast')}
                      id="morning-breakfast"
                    />
                    <label htmlFor="morning-breakfast" className="flex-1 cursor-pointer text-foreground">
                      Полезный завтрак
                    </label>
                    <Icon name="Coffee" size={18} className="text-primary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-secondary/10 to-secondary/5 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary p-2 rounded-lg">
                      <Icon name="Sun" size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-secondary-foreground">День</h4>
                      <p className="text-sm text-muted-foreground">12:00 - 18:00</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-secondary-foreground">{getProgress('day')}%</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <Checkbox 
                      checked={trackerData.day.water}
                      onCheckedChange={() => toggleTask('day', 'water')}
                      id="day-water"
                    />
                    <label htmlFor="day-water" className="flex-1 cursor-pointer text-foreground">
                      Пить воду регулярно
                    </label>
                    <Icon name="Droplet" size={18} className="text-secondary-foreground" />
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <Checkbox 
                      checked={trackerData.day.lunch}
                      onCheckedChange={() => toggleTask('day', 'lunch')}
                      id="day-lunch"
                    />
                    <label htmlFor="day-lunch" className="flex-1 cursor-pointer text-foreground">
                      Сбалансированный обед
                    </label>
                    <Icon name="UtensilsCrossed" size={18} className="text-secondary-foreground" />
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <Checkbox 
                      checked={trackerData.day.posture}
                      onCheckedChange={() => toggleTask('day', 'posture')}
                      id="day-posture"
                    />
                    <label htmlFor="day-posture" className="flex-1 cursor-pointer text-foreground">
                      Следить за осанкой
                    </label>
                    <Icon name="User" size={18} className="text-secondary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-accent/20 to-accent/10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-accent p-2 rounded-lg">
                      <Icon name="Moon" size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-accent-foreground">Вечер</h4>
                      <p className="text-sm text-muted-foreground">18:00 - 22:00</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent-foreground">{getProgress('evening')}%</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <Checkbox 
                      checked={trackerData.evening.water}
                      onCheckedChange={() => toggleTask('evening', 'water')}
                      id="evening-water"
                    />
                    <label htmlFor="evening-water" className="flex-1 cursor-pointer text-foreground">
                      Выпить воду
                    </label>
                    <Icon name="Droplet" size={18} className="text-accent-foreground" />
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <Checkbox 
                      checked={trackerData.evening.skincare}
                      onCheckedChange={() => toggleTask('evening', 'skincare')}
                      id="evening-skincare"
                    />
                    <label htmlFor="evening-skincare" className="flex-1 cursor-pointer text-foreground">
                      Вечерний уход
                    </label>
                    <Icon name="Sparkles" size={18} className="text-accent-foreground" />
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <Checkbox 
                      checked={trackerData.evening.makeup}
                      onCheckedChange={() => toggleTask('evening', 'makeup')}
                      id="evening-makeup"
                    />
                    <label htmlFor="evening-makeup" className="flex-1 cursor-pointer text-foreground">
                      Снять макияж
                    </label>
                    <Icon name="Eraser" size={18} className="text-accent-foreground" />
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <Checkbox 
                      checked={trackerData.evening.dinner}
                      onCheckedChange={() => toggleTask('evening', 'dinner')}
                      id="evening-dinner"
                    />
                    <label htmlFor="evening-dinner" className="flex-1 cursor-pointer text-foreground">
                      Лёгкий ужин
                    </label>
                    <Icon name="Moon" size={18} className="text-accent-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Card className="border-none shadow-lg bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 inline-block">
              <CardContent className="p-6 px-12">
                <div className="flex items-center gap-4">
                  <Icon name="Trophy" size={32} className="text-primary-foreground" />
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">Общий прогресс дня</div>
                    <div className="text-3xl font-bold text-primary-foreground">
                      {Math.round((getProgress('morning') + getProgress('day') + getProgress('evening')) / 3)}%
                    </div>
                  </div>
                  <Icon name="Sparkles" size={32} className="text-secondary-foreground" />
                </div>
              </CardContent>
            </Card>
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