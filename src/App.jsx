import React from 'react';
import {
  Plane,
  Globe,
  MapPin,
  Users,
  Calendar,
  CreditCard,
  Star,
  Clock,
  Sparkles,
  Laptop,
  Wifi,
  MessageCircle,
} from "lucide-react";

export default function App() {
  const programItems = [
    {
      title: "Аэропорт без стресса",
      description:
        "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.",
      result: "Уверенность уже в первые часы за границей.",
      icon: Plane,
    },
    {
      title: "В отеле: заселение и помощь",
      description:
        "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.",
      result: "Практика вежливых фраз и повседневной лексики.",
      icon: Wifi,
    },
    {
      title: "Кафе и рестораны",
      description:
        "Заказ еды, вопросы про аллергены, счёт и чаевые.",
      result:
        "Развитие гастрономического словаря и уверенности в общении.",
      icon: Star,
    },
    {
      title: "На улице: ориентирование и просьбы",
      description:
        "Как спросить дорогу, вызвать такси или найти аптеку.",
      result:
        "Понимание устной речи и произношения в реальных ситуациях.",
      icon: MapPin,
    },
    {
      title: "Экстренные случаи",
      description:
        "Потеря вещей, болезнь, помощь полиции — всё это на английском.",
      result: "Важные фразы, которые могут спасти отпуск.",
      icon: Globe,
    },
    {
      title: "Туризм и развлечения",
      description:
        "Покупка билетов, экскурсии, общение с гидами, музеи и парки.",
      result: "Погружение в культурный контекст через язык.",
      icon: Globe,
    },
    {
      title: "Дружба в путешествиях",
      description:
        "Как познакомиться с другими детьми или подростками за границей.",
      result:
        "Игровая практика диалогов и неформального общения.",
      icon: MessageCircle,
    },
    {
      title: "Дипломный проект: «Мой идеальный отпуск»",
      description:
        "Ребёнок планирует воображаемое путешествие и представляет его на английском.",
      result:
        "Развитие связной речи и творческого самовыражения.",
      icon: Sparkles,
    },
  ];

  const features = [
    {
      text: "Акцент на практическую, живую речь, а не на грамматику ради грамматики.",
    },
    {
      text: "Все ситуации — из реальной жизни путешественника.",
    },
    {
      text: "Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты.",
    },
    {
      text: "Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс.",
    },
  ];

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#12171f] to-[#0a0e1a] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-teal-500/10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24">
          {/* Top badge */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-teal-500/20 border border-orange-500/30">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-200">
                Набор открыт!
              </span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mb-6 sm:mb-8">
            <span className="block mb-2">Курс</span>
            <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-teal-400 bg-clip-text text-transparent">
              «Английский для путешествий»
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 text-center max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Мечтаете свободно общаться за границей — от заказа
            кофе до поиска утраченного чемодана? Этот курс
            научит вашего ребёнка реальному разговорному
            английскому, который пригодится в отпуске, поездках
            и будущих путешествиях!
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={scrollToBottom}
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full text-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">
                Записаться на курс
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* For whom section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex items-center gap-3 mb-8">
          <Users className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl">
            Для кого курс
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 hover:border-orange-500/40 transition-colors">
            <div className="text-xl sm:text-2xl mb-2">
              Первая группа
            </div>
            <div className="text-3xl sm:text-4xl bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              4–5 класс
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 to-teal-500/5 border border-teal-500/20 hover:border-teal-500/40 transition-colors">
            <div className="text-xl sm:text-2xl mb-2">
              Вторая группа
            </div>
            <div className="text-3xl sm:text-4xl bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
              6–8 класс
            </div>
          </div>
        </div>
      </div>

      {/* Program section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl">
            Программа курса
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {programItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-teal-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-orange-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl mb-3 text-orange-200">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-start gap-2 text-teal-300">
                  <span className="text-lg mt-0.5">👉</span>
                  <p className="text-sm sm:text-base">
                    {item.result}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why special section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl">
            Почему этот курс особенный?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 mt-2 flex-shrink-0" />
              <p className="text-gray-200 leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex items-center gap-3 mb-8">
          <Laptop className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl">
            Что потребуется
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 max-w-3xl">
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-start gap-3">
              <span className="text-teal-400 mt-1">•</span>
              <span>
                Стационарный компьютер или ноутбук с наушниками
                и микрофоном
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-400 mt-1">•</span>
              <span>Стабильный интернет и Zoom</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Schedule section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex items-center gap-3 mb-8">
          <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl">
            Расписание
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20">
            <div className="text-gray-300 mb-2">Четверг</div>
            <div className="text-2xl sm:text-3xl mb-2 text-orange-300">
              15:00 МСК
            </div>
            <div className="text-gray-400">
              группа 4–5 класс
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20">
            <div className="text-gray-300 mb-2">Пятница</div>
            <div className="text-2xl sm:text-3xl mb-2 text-teal-300">
              15:30 МСК
            </div>
            <div className="text-gray-400">
              группа 6–8 класс
            </div>
          </div>
        </div>
      </div>

      {/* Pricing section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex items-center gap-3 mb-8">
          <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl">
            Стоимость
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30">
            <div className="text-gray-300 mb-3">
              Полный курс (10 уроков)
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              12 000 ₽
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/30">
            <div className="text-gray-300 mb-3">Абонемент</div>
            <div className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              1 300 ₽
            </div>
            <div className="text-gray-400 mt-2">за урок</div>
          </div>
        </div>
      </div>

      {/* Final CTA section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500/20 via-amber-500/20 to-teal-500/20 border border-orange-500/30 p-8 sm:p-12 md:p-16">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-teal-500/5" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
              <Star className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-200">
                Набор открыт!
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
              Группы маленькие — максимум 6 детей
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 mb-4">
              чтобы каждый получил внимание
            </p>
            <p className="text-lg sm:text-xl text-orange-300 mb-8 sm:mb-10">
              Места ограничены!
            </p>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Запишитесь сейчас — и следующее путешествие станет
              первым, где ваш ребёнок заговорит по-английски без
              страха!
            </p>

            {/* Main CTA Button */}
            <button className="group relative px-10 py-5 sm:px-12 sm:py-6 bg-gradient-to-r from-orange-500 via-amber-500 to-teal-500 rounded-full text-xl sm:text-2xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center gap-3">
                <span>Записаться на курс</span>
                <Plane className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <p className="mt-6 text-sm text-gray-400">
              После клика вы будете перенаправлены на форму
              записи
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Курс «Английский для путешествий». Все права
            защищены.
          </p>
        </div>
      </div>
    </div>
  );
}