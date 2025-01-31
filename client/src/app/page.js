import "./globals.css";
import jwt from 'jsonwebtoken';

export default function Home() {
  const token = jwt.sign({ time: new Date().toISOString() }, "SECRET_KEY", { expiresIn: "60d" });
  console.log(token);
  return (
    <div className="home-page">
      <div className="blog">
        <header>
          <div>
            <img src="" alt="" />
            <h3>Admin KACM</h3>
          </div>
          <p>12/12/2002 12:00</p>
        </header>
        <div className="body-blog">
          <p dir="rtl">
            نادي الكوكب المراكشي هو نادي رياضي مغربي من مدينة مراكش. تأسس عام
            1947 من طرف المؤسس الفعلي الحاج إدريس الطالبي، لونه الرسمي هو الأحمر
            تيمنا بلقب المدينة حيث تُلقَّب بمراكش الحمراء. يثير الاستغراب، أن
            الكوكب المراكشي خلق من جديد في عجالة، ففي سنوات قليلة أصبح الفريق
            يملك مقومات النادي الكبير، من خلال وضع تقاليد تسييرية مضبوطة وناجحة.
            واستطاع احتلال موقع استراتيجي في الجانب المالي،
            واستطاع احتلال موقع استراتيجي في الجانب المالي،
            واستطاع احتلال موقع استراتيجي في الجانب المالي،
            واستطاع احتلال موقع استراتيجي في الجانب المالي،
          </p>
          <div>
            <img
              src="https://cdn.betimate.com/1200x0/left/top/smart/https://betimate.com/uploads/images/news/en-kacm-marrakesh-vs-husa-agadir-prediction-1711628342.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="blog">
        <header>
          <div>
            <img src="" alt="" />
            <h3>Admin KACM</h3>
          </div>
          <p>12/12/2002 12:00</p>
        </header>
        <div className="body-blog">
          <p dir="rtl">
            نادي الكوكب المراكشي هو نادي رياضي مغربي من مدينة مراكش. تأسس عام
            1947 من طرف المؤسس الفعلي الحاج إدريس الطالبي، لونه الرسمي هو الأحمر
            تيمنا بلقب المدينة حيث تُلقَّب بمراكش الحمراء. يثير الاستغراب، أن
            الكوكب المراكشي خلق من جديد في عجالة، ففي سنوات قليلة أصبح الفريق
            يملك مقومات النادي الكبير، من خلال وضع تقاليد تسييرية مضبوطة وناجحة.
            واستطاع احتلال موقع استراتيجي في الجانب المالي،
            واستطاع احتلال موقع استراتيجي في الجانب المالي،
            واستطاع احتلال موقع استراتيجي في الجانب المالي،
            واستطاع احتلال موقع استراتيجي في الجانب المالي،
          </p>
          <div>
            <img
              src="https://kech24.com/storage/2023/02/3a56d081-3237-455a-b46e-ec0a04b5009f-608x405.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
