import React from "react";

export default function SubBanner() {
  return (
    <div className="mt-5 mb-5">
      <div className="banner">
        <div className="banner-patch bg-warning">عرض خاص</div>
        <div className="banner-content">
          <h3>اشترك الآن أول 3 أشهر مجاناً</h3>
          <p className="text-info">
            الإشتراك السنوى بعد 3 أشهر 2000 جنيه / سنة
          </p>
          <p
            href="#contactForm"
            className="btn btn-warning"
            onClick={() => window.scrollTo({ top: 2900, behavior: "smooth" })}
          >
            اشترك الان
          </p>
        </div>
      </div>
      <h2 className="text-center text-warning fst-italic fw-bolder mt-3 glo">
        تواجد على الانترنت و استفد من عملائنا{" "}
      </h2>
    </div>
  );
}
