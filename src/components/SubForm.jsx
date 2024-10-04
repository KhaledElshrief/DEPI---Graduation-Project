export default function SubForm() {
  return (
    <div className="sub-form">
      <h2 className="text-center mt-5">الاشتراك كسنتر فى خصوصى</h2>
      <form action="" className="form mb-5" id="contactForm">
        <label htmlFor="" data-end="*">
          اسم السنتر{" "}
        </label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="" data-end="*">
          العنوان{" "}
        </label>
        <br />
        <input type="text" />
        <br />

        <label htmlFor="" data-end="*">
          هاتف{" "}
        </label>
        <br />
        <input type="number" />
        <br />

        <label htmlFor="" data-end="*">
          ايميل{" "}
        </label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="" data-end="*">
          الخطة المطلوبة{" "}
        </label>
        <br />
        <input
          type="radio"
          name="نوع الاشتراك"
          id="one"
          value={"الخطة الشهرية 200 ج / شهر"}
        />
        <label htmlFor="one">الخطة الشهرية 200 ج / شهر</label>
        <br />
        <input
          type="radio"
          name="نوع الاشتراك"
          id="two"
          value={"الخطة السنوية 166.6 ج / شهر"}
        />
        <label htmlFor="two">الخطة السنوية 166.6 ج / شهر </label>
        <br />
        <input
          type="radio"
          name="نوع الاشتراك"
          id="three"
          value={"الخطة المجانية 3 أشهر"}
        />
        <label htmlFor="three">الخطة المجانية 3 أشهر</label>
        <br />
        <p>
          أول 3 اشهر مجاناً فى الخطط المدفوعة (لا تحتاج إلى تسجل بطاقة بنك الآن)
        </p>
        <button className="btn btn-warning">ارسال</button>
      </form>
    </div>
  );
}
