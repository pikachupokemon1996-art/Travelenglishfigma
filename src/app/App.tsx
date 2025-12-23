import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Plane,
  Globe,
  MapPin,
  Calendar,
  Wifi,
  Coffee,
  Users,
  Star,
  Check,
  ArrowRight,
  Clock,
  DollarSign,
  Sparkles,
  Building,
  Utensils,
  MessageCircle,
  Shield,
  GraduationCap,
  Laptop,
  Zap
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEnroll = () => {
    document.getElementById('enroll-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-amber-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0a0e1a]/95 backdrop-blur-lg shadow-lg' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-cyan-400" />
            <span className="text-xl bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
              Английский для путешествий
            </span>
          </div>
          <button
            onClick={scrollToEnroll}
            className="px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
          >
            Записаться
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-orange-500/20 rounded-full mb-6 border border-cyan-500/30">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-300">Набор открыт!</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">
              Курс «Английский для путешествий»
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
              Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится 
              в отпуске, поездках и будущих путешествиях!
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToEnroll}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 rounded-full text-lg shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Записаться на курс
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Floating icons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-20 left-10 text-cyan-400/30"
            >
              <Plane className="w-12 h-12" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-40 right-20 text-orange-400/30"
            >
              <Globe className="w-16 h-16" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute bottom-20 left-1/4 text-amber-400/30"
            >
              <Coffee className="w-10 h-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* For whom section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
              📌 Для кого курс
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/30 rounded-2xl p-8 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-cyan-300">Первая группа</h3>
                    <p className="text-gray-300">4–5 класс</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-2xl p-8 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-orange-300">Вторая группа</h3>
                    <p className="text-gray-300">6–8 класс</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-4 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              📚 Программа курса
            </h2>
            <p className="text-center text-gray-400 mb-12">8 модулей для полной уверенности в путешествиях</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  number: '1',
                  title: 'Аэропорт без стресса',
                  description: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском.',
                  benefit: 'Уверенность уже в первые часы за границей.',
                  icon: Plane,
                  color: 'cyan'
                },
                {
                  number: '2',
                  title: 'В отеле: заселение и помощь',
                  description: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.',
                  benefit: 'Практика вежливых фраз и повседневной лексики.',
                  icon: Building,
                  color: 'orange'
                },
                {
                  number: '3',
                  title: 'Кафе и рестораны',
                  description: 'Заказ еды, вопросы про аллергены, счёт и чаевые.',
                  benefit: 'Развитие гастрономического словаря и уверенности в общении.',
                  icon: Utensils,
                  color: 'amber'
                },
                {
                  number: '4',
                  title: 'На улице: ориентирование и просьбы',
                  description: 'Как спросить дорогу, вызвать такси или найти аптеку.',
                  benefit: 'Понимание устной речи и произношения в реальных ситуациях.',
                  icon: MapPin,
                  color: 'cyan'
                },
                {
                  number: '5',
                  title: 'Экстренные случаи',
                  description: 'Потеря вещей, болезнь, помощь полиции — всё это на английском.',
                  benefit: 'Важные фразы, которые могут спасти отпуск.',
                  icon: Shield,
                  color: 'orange'
                },
                {
                  number: '6-8',
                  title: 'Туризм и развлечения',
                  description: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки.',
                  benefit: 'Погружение в культурный контекст через язык.',
                  icon: Star,
                  color: 'amber'
                },
                {
                  number: '7',
                  title: 'Дружба в путешествиях',
                  description: 'Как познакомиться с другими детьми или подростками за границей.',
                  benefit: 'Игровая практика диалогов и неформального общения.',
                  icon: MessageCircle,
                  color: 'cyan'
                },
                {
                  number: '8',
                  title: 'Дипломный проект: «Мой идеальный отпуск»',
                  description: 'Ребёнок планирует воображаемое путешествие и представляет его на английском.',
                  benefit: 'Развитие связной речи и творческого самовыражения.',
                  icon: Sparkles,
                  color: 'orange'
                }
              ].map((module, index) => {
                const Icon = module.icon;
                const colorMap: Record<string, { from: string; to: string; border: string; text: string; shadow: string }> = {
                  cyan: { from: 'from-cyan-500/10', to: 'to-cyan-600/5', border: 'border-cyan-500/30', text: 'text-cyan-400', shadow: 'hover:shadow-cyan-500/20' },
                  orange: { from: 'from-orange-500/10', to: 'to-orange-600/5', border: 'border-orange-500/30', text: 'text-orange-400', shadow: 'hover:shadow-orange-500/20' },
                  amber: { from: 'from-amber-500/10', to: 'to-amber-600/5', border: 'border-amber-500/30', text: 'text-amber-400', shadow: 'hover:shadow-amber-500/20' }
                };
                const colors = colorMap[module.color];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${colors.from} ${colors.to} border ${colors.border} rounded-2xl p-6 hover:shadow-lg ${colors.shadow} transition-all duration-300 group`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${colors.from} ${colors.border} border rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-sm ${colors.text}`}>{module.number}</span>
                          <h3 className="text-xl text-white group-hover:translate-x-1 transition-transform">{module.title}</h3>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">{module.description}</p>
                        <div className="flex items-start gap-2">
                          <Check className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                          <p className={`text-sm ${colors.text}`}>{module.benefit}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why special section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              ✨ Почему этот курс особенный?
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: MessageCircle,
                  title: 'Практика, а не теория',
                  description: 'Акцент на живую речь, а не на грамматику ради грамматики',
                  color: 'cyan'
                },
                {
                  icon: Globe,
                  title: 'Реальные ситуации',
                  description: 'Все ситуации из реальной жизни путешественника',
                  color: 'orange'
                },
                {
                  icon: Zap,
                  title: 'Интерактивно',
                  description: 'Ролевые игры, аудиоситуации, мини-квесты',
                  color: 'amber'
                },
                {
                  icon: Star,
                  title: 'Результат A2–B1',
                  description: 'Выход на уровень Pre-Intermediate за курс',
                  color: 'cyan'
                }
              ].map((item, index) => {
                const Icon = item.icon;
                const colorMap: Record<string, { bg: string; text: string; shadow: string }> = {
                  cyan: { bg: 'bg-gradient-to-br from-cyan-500 to-cyan-600', text: 'text-cyan-400', shadow: 'hover:shadow-cyan-500/30' },
                  orange: { bg: 'bg-gradient-to-br from-orange-500 to-orange-600', text: 'text-orange-400', shadow: 'hover:shadow-orange-500/30' },
                  amber: { bg: 'bg-gradient-to-br from-amber-500 to-amber-600', text: 'text-amber-400', shadow: 'hover:shadow-amber-500/30' }
                };
                const colors = colorMap[item.color];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-[#1a1f2e] rounded-2xl p-6 hover:shadow-lg ${colors.shadow} transition-all duration-300 text-center group`}
                  >
                    <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Requirements section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
              💻 Что потребуется
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Laptop,
                  title: 'Компьютер',
                  description: 'Стационарный компьютер или ноутбук с наушниками и микрофоном'
                },
                {
                  icon: Wifi,
                  title: 'Интернет',
                  description: 'Стабильное подключение к интернету'
                },
                {
                  icon: Users,
                  title: 'Zoom',
                  description: 'Программа Zoom для онлайн-занятий'
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-[#1a1f2e] to-[#0a0e1a] border border-amber-500/30 rounded-2xl p-6 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
                  >
                    <Icon className="w-12 h-12 text-amber-400 mb-4" />
                    <h3 className="text-xl mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule and Price section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl mb-8 bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                🕒 Расписание
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/30 rounded-2xl p-6 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <Clock className="w-8 h-8 text-cyan-400" />
                    <div>
                      <div className="text-cyan-300">Четверг, 15:00 (МСК)</div>
                      <div className="text-sm text-gray-400">группа 4–5 класс</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-2xl p-6 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <Clock className="w-8 h-8 text-orange-400" />
                    <div>
                      <div className="text-orange-300">Пятница, 15:30 (МСК)</div>
                      <div className="text-sm text-gray-400">группа 6–8 класс</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Price */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl mb-8 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                💳 Стоимость
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/30 rounded-2xl p-6 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <DollarSign className="w-8 h-8 text-amber-400" />
                    <div className="flex-1">
                      <div className="text-xl text-white mb-1">Полный курс</div>
                      <div className="text-sm text-gray-400">10 уроков</div>
                    </div>
                    <div className="text-2xl text-amber-400">12 000 ₽</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-2xl p-6 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <DollarSign className="w-8 h-8 text-orange-400" />
                    <div className="flex-1">
                      <div className="text-xl text-white mb-1">Абонемент</div>
                      <div className="text-sm text-gray-400">за один урок</div>
                    </div>
                    <div className="text-2xl text-orange-400">1 300 ₽</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enrollment highlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-500/10 via-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-3xl p-8 md:p-12 text-center"
          >
            <Sparkles className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              📢 Набор открыт!
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Группы маленькие — максимум 6 детей, чтобы каждый получил внимание.
            </p>
            <p className="text-lg text-amber-400 mb-8">
              Места ограничены!
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="enroll-section" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1a1f2e] to-[#0a0e1a] border-2 border-orange-500/50 rounded-3xl p-8 md:p-12 shadow-2xl shadow-orange-500/30"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full mb-6 border border-orange-500/30">
              <Plane className="w-5 h-5 text-orange-400" />
              <span className="text-orange-300">Следующее путешествие начнётся с уверенности</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Запишитесь сейчас!
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 rounded-full text-xl shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 flex items-center gap-3 mx-auto group"
            >
              <span>Записаться на курс</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-cyan-400" />
                <span>Малые группы</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-amber-400" />
                <span>Реальные ситуации</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-orange-400" />
                <span>Быстрый результат</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-cyan-400" />
            <span className="text-lg bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
              Английский для путешествий
            </span>
          </div>
          <p>© 2025 Курс английского для путешествий. Откройте мир без языковых барьеров!</p>
        </div>
      </footer>
    </div>
  );
}
