import React from 'react';
import { Mail, Clock, Calendar, Users, CreditCard, MapPin, Wifi, Shield, GraduationCap } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-orange-400 bg-clip-text text-transparent mb-6">
              Английский для путешествий
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
              Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится в отпуске, поездках и будущих путешествиях!
            </p>
          </div>
        </div>
        
        {/* Decorative runway lights */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Target Audience */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-900/30 text-cyan-400 mb-4">
            <MapPin className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Для кого курс</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 shadow-2xl">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-2">Первая группа</h3>
            <p className="text-xl text-gray-300">4–5 класс</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 shadow-2xl">
            <h3 className="text-2xl font-semibold text-orange-400 mb-2">Вторая группа</h3>
            <p className="text-xl text-gray-300">6–8 класс</p>
          </div>
        </div>
      </div>

      {/* Curriculum */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-900/30 text-teal-400 mb-4">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Программа курса</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Аэропорт без стресса", desc: "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.", icon: "✈️" },
            { title: "В отеле: заселение и помощь", desc: "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.", icon: "🏨" },
            { title: "Кафе и рестораны", desc: "Заказ еды, вопросы про аллергены, счёт и чаевые.", icon: "🍽️" },
            { title: "На улице: ориентирование и просьбы", desc: "Как спросить дорогу, вызвать такси или найти аптеку.", icon: "🗺️" },
            { title: "Экстренные случаи", desc: "Потеря вещей, болезнь, помощь полиции — всё это на английском.", icon: "🚨" },
            { title: "Туризм и развлечения", desc: "Покупка билетов, экскурсии, общение с гидами, музеи и парки.", icon: "🎭" },
            { title: "Дружба в путешествиях", desc: "Как познакомиться с другими детьми или подростками за границей.", icon: "👫" },
            { title: "Дипломный проект", desc: "«Мой идеальный отпуск» — ребёнок планирует воображаемое путешествие и представляет его на английском.", icon: "🏆" }
          ].map((item, index) => (
            <div key={index} className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Special */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">✨ Почему этот курс особенный?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20">
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">Практический подход</h3>
              <p className="text-gray-300">Акцент на практическую, живую речь, а не на грамматику ради грамматики.</p>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Реальные ситуации</h3>
              <p className="text-gray-300">Все ситуации — из реальной жизни путешественника.</p>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Интерактивные задания</h3>
              <p className="text-gray-300">Ролевые игры, аудиоситуации, мини-квесты.</p>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20">
              <h3 className="text-lg font-semibold text-pink-400 mb-3">Результат</h3>
              <p className="text-gray-300">Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900/30 text-blue-400 mb-4">
            <Wifi className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Что потребуется</h2>
          <div className="max-w-2xl mx-auto text-gray-300 text-lg">
            <p className="mb-2">• Стационарный компьютер или ноутбук с наушниками и микрофоном</p>
            <p>• Стабильный интернет и Zoom</p>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/30 text-purple-400 mb-4">
            <Calendar className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Расписание</h2>
          <div className="max-w-md mx-auto grid gap-4">
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/30">
              <div className="flex items-center justify-center gap-2 text-cyan-400">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Четверг, 15:00 (МСК)</span>
              </div>
              <p className="text-gray-300 mt-1">группа 4–5 класс</p>
            </div>
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-lg p-4 border border-orange-500/30">
              <div className="flex items-center justify-center gap-2 text-orange-400">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Пятница, 15:30 (МСК)</span>
              </div>
              <p className="text-gray-300 mt-1">группа 6–8 класс</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-900/30 text-green-400 mb-4">
            <CreditCard className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Стоимость</h2>
          <div className="max-w-md mx-auto">
            <div className="text-2xl font-bold text-cyan-400 mb-2">Полный курс (10 уроков): 12 000 руб</div>
            <div className="text-lg text-gray-300">Абонемент: 1 300 руб / урок</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-900/30 text-yellow-400 mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-6">📢 Набор открыт!</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Группы маленькие — максимум 6 детей, чтобы каждый получил внимание. Места ограничены! 
            👉 Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-orange-500 hover:from-cyan-600 hover:to-orange-600 text-white font-bold text-xl px-12 py-4 rounded-full shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105">
            Записаться на курс
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>© 2025 Английский для путешествий. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
